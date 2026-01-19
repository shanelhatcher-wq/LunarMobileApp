import AsyncStorage from '@react-native-async-storage/async-storage';

const SUBSCRIPTION_KEY = '@moon_pro_subscription';
const TRIAL_KEY = '@moon_pro_trial';

export interface SubscriptionStatus {
  isPro: boolean;
  plan: 'free' | 'monthly' | 'yearly';
  expiresAt?: Date;
  isTrialActive: boolean;
  trialEndsAt?: Date;
}

export async function getSubscriptionStatus(): Promise<SubscriptionStatus> {
  try {
    const [subData, trialData] = await Promise.all([
      AsyncStorage.getItem(SUBSCRIPTION_KEY),
      AsyncStorage.getItem(TRIAL_KEY),
    ]);

    let status: SubscriptionStatus = {
      isPro: false,
      plan: 'free',
      isTrialActive: false,
    };

    if (trialData) {
      const trial = JSON.parse(trialData);
      const trialEndsAt = new Date(trial.endsAt);
      if (trialEndsAt > new Date()) {
        status.isPro = true;
        status.isTrialActive = true;
        status.trialEndsAt = trialEndsAt;
        return status;
      }
    }

    if (subData) {
      const sub = JSON.parse(subData);
      const expiresAt = new Date(sub.expiresAt);
      if (expiresAt > new Date()) {
        status.isPro = true;
        status.plan = sub.plan;
        status.expiresAt = expiresAt;
      }
    }

    return status;
  } catch (error) {
    return {
      isPro: false,
      plan: 'free',
      isTrialActive: false,
    };
  }
}

export async function startFreeTrial(): Promise<void> {
  const trialEndsAt = new Date();
  trialEndsAt.setDate(trialEndsAt.getDate() + 7);

  const trialData = {
    startedAt: new Date().toISOString(),
    endsAt: trialEndsAt.toISOString(),
  };

  await AsyncStorage.setItem(TRIAL_KEY, JSON.stringify(trialData));
}

export async function subscribe(plan: 'monthly' | 'yearly'): Promise<void> {
  const expiresAt = new Date();
  if (plan === 'monthly') {
    expiresAt.setMonth(expiresAt.getMonth() + 1);
  } else {
    expiresAt.setFullYear(expiresAt.getFullYear() + 1);
  }

  const subData = {
    plan,
    startedAt: new Date().toISOString(),
    expiresAt: expiresAt.toISOString(),
  };

  await AsyncStorage.setItem(SUBSCRIPTION_KEY, JSON.stringify(subData));
  await AsyncStorage.removeItem(TRIAL_KEY);
}

export async function cancelSubscription(): Promise<void> {
  await AsyncStorage.removeItem(SUBSCRIPTION_KEY);
  await AsyncStorage.removeItem(TRIAL_KEY);
}
