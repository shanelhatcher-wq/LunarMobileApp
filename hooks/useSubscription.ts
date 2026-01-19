import { useState, useEffect, useCallback } from 'react';
import { getSubscriptionStatus, startFreeTrial, subscribe, cancelSubscription, SubscriptionStatus } from '@/services/subscriptionService';

export function useSubscription() {
  const [status, setStatus] = useState<SubscriptionStatus>({
    isPro: false,
    plan: 'free',
    isTrialActive: false,
  });
  const [loading, setLoading] = useState(true);

  const loadStatus = useCallback(async () => {
    setLoading(true);
    try {
      const currentStatus = await getSubscriptionStatus();
      setStatus(currentStatus);
    } catch (error) {
      console.error('Error loading subscription status:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadStatus();
  }, [loadStatus]);

  const handleStartTrial = useCallback(async () => {
    await startFreeTrial();
    await loadStatus();
  }, [loadStatus]);

  const handleSubscribe = useCallback(async (plan: 'monthly' | 'yearly') => {
    await subscribe(plan);
    await loadStatus();
  }, [loadStatus]);

  const handleCancel = useCallback(async () => {
    await cancelSubscription();
    await loadStatus();
  }, [loadStatus]);

  return {
    status,
    loading,
    startTrial: handleStartTrial,
    subscribe: handleSubscribe,
    cancel: handleCancel,
    refresh: loadStatus,
  };
}
