export type Language = 'en' | 'es' | 'fr' | 'de' | 'hi' | 'zh' | 'ja' | 'it';

export interface LanguageOption {
  code: Language;
  name: string;
  nativeName: string;
}

export const AVAILABLE_LANGUAGES: LanguageOption[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'es', name: 'Spanish', nativeName: 'Español' },
  { code: 'fr', name: 'French', nativeName: 'Français' },
  { code: 'de', name: 'German', nativeName: 'Deutsch' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
  { code: 'zh', name: 'Chinese', nativeName: '中文' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano' },
];

export interface Translations {
  // Tab Navigation
  tabs: {
    moon: string;
    calendar: string;
    insights: string;
    profile: string;
  };

  // Home Screen
  home: {
    illumination: string;
    sunTimes: string;
    sunrise: string;
    sunset: string;
    moonTimes: string;
    moonrise: string;
    moonset: string;
    nextNewMoon: string;
    nextFullMoon: string;
    moonAge: string;
    moonAgeSince: string;
    days: string;
  };

  // Calendar Screen
  calendar: {
    title: string;
    weekdays: string[];
    months: string[];
    bestViewingTimes: string;
    specialMoonDescription: string;
    fullMoonNames: string[];
  };

  // Insights Screen
  insights: {
    title: string;
    premiumContent: string;
    unlockDescription: string;
    unlockButton: string;
    astrologicalInfluences: string;
    astrologicalDescription: string;
    advancedData: string;
    advancedDataDescription: string;
    illuminationTrend: string;
    illuminationTrendSubtitle: string;
  };

  // Profile Screen
  profile: {
    title: string;
    moonProActive: string;
    allFeaturesAccess: string;
    trialEnds: string;
    monthlyPlan: string;
    yearlyPlan: string;
    renews: string;
    upgradeToMoonPro: string;
    adFree: string;
    detailedAnalysis: string;
    widgets: string;
    illuminationTrends: string;
    astrologicalInsights: string;
    monthly: string;
    yearly: string;
    month: string;
    year: string;
    save: string;
    startTrial: string;
    cancelAnytime: string;
    restorePurchases: string;
    settings: string;
    language: string;
  };

  // Moon Phases
  phases: {
    newMoon: string;
    waxingCrescent: string;
    firstQuarter: string;
    waxingGibbous: string;
    fullMoon: string;
    waningGibbous: string;
    lastQuarter: string;
    waningCrescent: string;
  };

  // Location
  location: {
    selectLocation: string;
    searchCities: string;
    latitude: string;
    longitude: string;
  };

  // Common
  common: {
    today: string;
  };

  // Alerts
  alerts: {
    success: string;
    trialStarted: string;
    subscribed: string;
    noPurchases: string;
    comingSoon: string;
    languageChanged: string;
  };

  // About
  about: {
    title: string;
    description: string;
    appName: string;
    appVersion: string;
    deviceModel: string;
    systemVersion: string;
    madeWith: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    common: {
      today: 'Tap for Today',
    },
    tabs: {
      moon: 'Moon',
      calendar: 'Calendar',
      insights: 'Insights',
      profile: 'Profile',
    },
    home: {
      illumination: 'Illumination',
      sunTimes: 'Sun Times',
      sunrise: 'Sunrise',
      sunset: 'Sunset',
      moonTimes: 'Moon Times',
      moonrise: 'Moonrise',
      moonset: 'Moonset',
      nextNewMoon: 'Next New Moon in',
      nextFullMoon: 'Next Full Moon in',
      moonAge: 'Moon Age',
      moonAgeSince: 'Days since last new moon',
      days: 'days',
    },
    calendar: {
      title: 'Moon Calendar',
      weekdays: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
      months: [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ],
      bestViewingTimes: 'Best Viewing Times',
      specialMoonDescription: 'is a celestial name given to the full moon during this period.',
      fullMoonNames: [
        'Wolf Moon', 'Snow Moon', 'Worm Moon', 'Pink Moon',
        'Flower Moon', 'Strawberry Moon', 'Buck Moon', 'Sturgeon Moon',
        'Harvest Moon', 'Hunter\'s Moon', 'Beaver Moon', 'Cold Moon'
      ],
    },
    insights: {
      title: 'Premium Insights',
      premiumContent: 'Premium Content',
      unlockDescription: 'Unlock detailed moon insights, illumination trends, and astrological data',
      unlockButton: 'Unlock with Lunar Pro',
      astrologicalInfluences: 'Astrological Influences',
      astrologicalDescription: 'Unlock data about astrological events and influences.',
      advancedData: 'Advanced Lunar Data',
      advancedDataDescription: 'Experience lunar cycles with enhanced data.',
      illuminationTrend: 'Illumination Trend',
      illuminationTrendSubtitle: 'Illumination over the month',
    },
    profile: {
      title: 'My Account',
      moonProActive: 'Lunar Pro Active',
      allFeaturesAccess: 'You have access to all premium features',
      trialEnds: 'Trial ends',
      monthlyPlan: 'Monthly',
      yearlyPlan: 'Yearly',
      renews: 'Renews',
      upgradeToMoonPro: 'Upgrade to Lunar Pro',
      adFree: 'Ad-free experience',
      detailedAnalysis: 'Detailed analysis',
      widgets: 'Home Screen Widgets',
      illuminationTrends: 'Illumination trends',
      astrologicalInsights: 'Astrological insights',
      monthly: 'Monthly',
      yearly: 'Yearly',
      month: '/month',
      year: '/year',
      save: 'Save',
      startTrial: 'Start 7-Day Free Trial',
      cancelAnytime: 'Cancel anytime. After trial',
      restorePurchases: 'Restore Purchases',
      settings: 'Settings',
      language: 'Language',
    },
    phases: {
      newMoon: 'New Moon',
      waxingCrescent: 'Waxing Crescent',
      firstQuarter: 'First Quarter',
      waxingGibbous: 'Waxing Gibbous',
      fullMoon: 'Full Moon',
      waningGibbous: 'Waning Gibbous',
      lastQuarter: 'Last Quarter',
      waningCrescent: 'Waning Crescent',
    },
    location: {
      selectLocation: 'Select Location',
      searchCities: 'Search cities...',
      latitude: 'Latitude',
      longitude: 'Longitude',
    },
    alerts: {
      success: 'Success',
      trialStarted: 'Your 7-day free trial has started! Enjoy all premium features.',
      subscribed: 'You are now subscribed to Lunar Pro',
      noPurchases: 'No previous purchases found.',
      comingSoon: 'Settings page coming soon!',
      languageChanged: 'Language changed successfully',
    },
    about: {
      title: 'About',
      description: 'Lunar Watch helps you explore and keep track of lunar phases and more. Find out more:',
      appName: 'App Name',
      appVersion: 'App Version',
      deviceModel: 'Device Model',
      systemVersion: 'System Version',
      madeWith: 'Made with love',
    },
  },
  es: {
    common: {
      today: 'Toca para Hoy',
    },
    tabs: {
      moon: 'Luna',
      calendar: 'Calendario',
      insights: 'Análisis',
      profile: 'Perfil',
    },
    home: {
      illumination: 'Iluminación',
      sunTimes: 'Horarios del Sol',
      sunrise: 'Amanecer',
      sunset: 'Atardecer',
      moonTimes: 'Horarios de la Luna',
      moonrise: 'Salida de Luna',
      moonset: 'Puesta de Luna',
      nextNewMoon: 'Próxima Luna Nueva en',
      nextFullMoon: 'Próxima Luna Llena en',
      moonAge: 'Edad de la Luna',
      moonAgeSince: 'Días desde la última luna nueva',
      days: 'días',
    },
    calendar: {
      title: 'Calendario Lunar',
      weekdays: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
      months: [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
      ],
      bestViewingTimes: 'Mejores Horarios de Observación',
      specialMoonDescription: 'es un nombre celestial dado a la luna llena durante este período.',
      fullMoonNames: [
        'Luna del Lobo', 'Luna de Nieve', 'Luna del Gusano', 'Luna Rosa',
        'Luna de las Flores', 'Luna de Fresa', 'Luna del Ciervo', 'Luna del Esturión',
        'Luna de la Cosecha', 'Luna del Cazador', 'Luna del Castor', 'Luna Fría'
      ],
    },
    insights: {
      title: 'Análisis Premium',
      premiumContent: 'Contenido Premium',
      unlockDescription: 'Desbloquea análisis detallados de la luna, tendencias de iluminación y datos astrológicos',
      unlockButton: 'Desbloquear con Lunar Pro',
      astrologicalInfluences: 'Influencias Astrológicas',
      astrologicalDescription: 'Desbloquea datos sobre eventos e influencias astrológicas.',
      advancedData: 'Datos Lunares Avanzados',
      advancedDataDescription: 'Experimenta los ciclos lunares con datos mejorados.',
      illuminationTrend: 'Tendencia de Iluminación',
      illuminationTrendSubtitle: 'Iluminación durante el mes',
    },
    profile: {
      title: 'Mi Cuenta',
      moonProActive: 'Lunar Pro Activo',
      allFeaturesAccess: 'Tienes acceso a todas las funciones premium',
      trialEnds: 'Prueba termina',
      monthlyPlan: 'Mensual',
      yearlyPlan: 'Anual',
      renews: 'Renueva',
      upgradeToMoonPro: 'Actualizar a Lunar Pro',
      adFree: 'Experiencia sin anuncios',
      detailedAnalysis: 'Análisis detallado',
      widgets: 'Widgets de pantalla de inicio',
      illuminationTrends: 'Tendencias de iluminación',
      astrologicalInsights: 'Conocimientos astrológicos',
      monthly: 'Mensual',
      yearly: 'Anual',
      month: '/mes',
      year: '/año',
      save: 'Ahorra',
      startTrial: 'Iniciar Prueba Gratuita de 7 Días',
      cancelAnytime: 'Cancela en cualquier momento. Después de la prueba',
      restorePurchases: 'Restaurar Compras',
      settings: 'Ajustes',
      language: 'Idioma',
    },
    phases: {
      newMoon: 'Luna Nueva',
      waxingCrescent: 'Luna Creciente',
      firstQuarter: 'Cuarto Creciente',
      waxingGibbous: 'Gibosa Creciente',
      fullMoon: 'Luna Llena',
      waningGibbous: 'Gibosa Menguante',
      lastQuarter: 'Cuarto Menguante',
      waningCrescent: 'Luna Menguante',
    },
    location: {
      selectLocation: 'Seleccionar Ubicación',
      searchCities: 'Buscar ciudades...',
      latitude: 'Latitud',
      longitude: 'Longitud',
    },
    alerts: {
      success: 'Éxito',
      trialStarted: '¡Tu prueba gratuita de 7 días ha comenzado! Disfruta de todas las funciones premium.',
      subscribed: 'Ahora estás suscrito a Lunar Pro',
      noPurchases: 'No se encontraron compras anteriores.',
      comingSoon: '¡Página de ajustes próximamente!',
      languageChanged: 'Idioma cambiado exitosamente',
    },
    about: {
      title: 'Acerca de',
      description: 'Lunar Watch te ayuda a explorar y realizar un seguimiento de las fases lunares y más. Descubre más:',
      appName: 'Nombre de la Aplicación',
      appVersion: 'Versión de la Aplicación',
      deviceModel: 'Modelo del Dispositivo',
      systemVersion: 'Versión del Sistema',
      madeWith: 'Hecho con amor',
    },
  },
  fr: {
    common: {
      today: 'Appuyez pour Aujourd\'hui',
    },
    tabs: {
      moon: 'Lune',
      calendar: 'Calendrier',
      insights: 'Analyses',
      profile: 'Profil',
    },
    home: {
      illumination: 'Illumination',
      sunTimes: 'Heures du Soleil',
      sunrise: 'Lever du soleil',
      sunset: 'Coucher du soleil',
      moonTimes: 'Heures de la Lune',
      moonrise: 'Lever de lune',
      moonset: 'Coucher de lune',
      nextNewMoon: 'Prochaine Nouvelle Lune dans',
      nextFullMoon: 'Prochaine Pleine Lune dans',
      moonAge: 'Âge de la Lune',
      moonAgeSince: 'Jours depuis la dernière nouvelle lune',
      days: 'jours',
    },
    calendar: {
      title: 'Calendrier Lunaire',
      weekdays: ['Di', 'Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa'],
      months: [
        'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
        'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
      ],
      bestViewingTimes: 'Meilleurs Moments d\'Observation',
      specialMoonDescription: 'est un nom céleste donné à la pleine lune pendant cette période.',
      fullMoonNames: [
        'Lune du Loup', 'Lune des Neiges', 'Lune du Ver', 'Lune Rose',
        'Lune des Fleurs', 'Lune de Fraise', 'Lune du Cerf', 'Lune de l\'Esturgeon',
        'Lune des Moissons', 'Lune du Chasseur', 'Lune du Castor', 'Lune Froide'
      ],
    },
    insights: {
      title: 'Analyses Premium',
      premiumContent: 'Contenu Premium',
      unlockDescription: 'Débloquez des analyses détaillées de la lune, des tendances d\'illumination et des données astrologiques',
      unlockButton: 'Débloquer avec Lunar Pro',
      astrologicalInfluences: 'Influences Astrologiques',
      astrologicalDescription: 'Débloquez des données sur les événements et influences astrologiques.',
      advancedData: 'Données Lunaires Avancées',
      advancedDataDescription: 'Découvrez les cycles lunaires avec des données améliorées.',
      illuminationTrend: 'Tendance d\'Illumination',
      illuminationTrendSubtitle: 'Illumination au cours du mois',
    },
    profile: {
      title: 'Mon Compte',
      moonProActive: 'Lunar Pro Actif',
      allFeaturesAccess: 'Vous avez accès à toutes les fonctionnalités premium',
      trialEnds: 'Essai se termine',
      monthlyPlan: 'Mensuel',
      yearlyPlan: 'Annuel',
      renews: 'Renouvelle',
      upgradeToMoonPro: 'Passer à Lunar Pro',
      adFree: 'Expérience sans publicité',
      detailedAnalysis: 'Analyse détaillée',
      widgets: 'Widgets d\'écran d\'accueil',
      illuminationTrends: 'Tendances d\'illumination',
      astrologicalInsights: 'Perspectives astrologiques',
      monthly: 'Mensuel',
      yearly: 'Annuel',
      month: '/mois',
      year: '/an',
      save: 'Économisez',
      startTrial: 'Commencer l\'Essai Gratuit de 7 Jours',
      cancelAnytime: 'Annulez à tout moment. Après l\'essai',
      restorePurchases: 'Restaurer les Achats',
      settings: 'Paramètres',
      language: 'Langue',
    },
    phases: {
      newMoon: 'Nouvelle Lune',
      waxingCrescent: 'Premier Croissant',
      firstQuarter: 'Premier Quartier',
      waxingGibbous: 'Gibbeuse Croissante',
      fullMoon: 'Pleine Lune',
      waningGibbous: 'Gibbeuse Décroissante',
      lastQuarter: 'Dernier Quartier',
      waningCrescent: 'Dernier Croissant',
    },
    location: {
      selectLocation: 'Sélectionner l\'Emplacement',
      searchCities: 'Rechercher des villes...',
      latitude: 'Latitude',
      longitude: 'Longitude',
    },
    alerts: {
      success: 'Succès',
      trialStarted: 'Votre essai gratuit de 7 jours a commencé! Profitez de toutes les fonctionnalités premium.',
      subscribed: 'Vous êtes maintenant abonné à Lunar Pro',
      noPurchases: 'Aucun achat précédent trouvé.',
      comingSoon: 'Page de paramètres bientôt disponible!',
      languageChanged: 'Langue changée avec succès',
    },
    about: {
      title: 'À propos',
      description: 'Lunar Watch vous aide à explorer et suivre les phases lunaires et plus encore. En savoir plus :',
      appName: 'Nom de l\'Application',
      appVersion: 'Version de l\'Application',
      deviceModel: 'Modèle de l\'Appareil',
      systemVersion: 'Version du Système',
      madeWith: 'Fait avec amour',
    },
  },
  de: {
    common: {
      today: 'Tippen für Heute',
    },
    tabs: {
      moon: 'Mond',
      calendar: 'Kalender',
      insights: 'Einblicke',
      profile: 'Profil',
    },
    home: {
      illumination: 'Beleuchtung',
      sunTimes: 'Sonnenzeiten',
      sunrise: 'Sonnenaufgang',
      sunset: 'Sonnenuntergang',
      moonTimes: 'Mondzeiten',
      moonrise: 'Mondaufgang',
      moonset: 'Monduntergang',
      nextNewMoon: 'Nächster Neumond in',
      nextFullMoon: 'Nächster Vollmond in',
      moonAge: 'Mondalter',
      moonAgeSince: 'Tage seit dem letzten Neumond',
      days: 'Tagen',
    },
    calendar: {
      title: 'Mondkalender',
      weekdays: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
      months: [
        'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
        'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'
      ],
      bestViewingTimes: 'Beste Beobachtungszeiten',
      specialMoonDescription: 'ist ein himmlischer Name für den Vollmond in dieser Zeit.',
      fullMoonNames: [
        'Wolfsmond', 'Schneemond', 'Wurmmond', 'Rosa Mond',
        'Blumenmond', 'Erdbeermond', 'Hirschmond', 'Störmond',
        'Erntemond', 'Jägermond', 'Bibermond', 'Kalter Mond'
      ],
    },
    insights: {
      title: 'Premium-Einblicke',
      premiumContent: 'Premium-Inhalt',
      unlockDescription: 'Schalten Sie detaillierte Mondanalysen, Beleuchtungstrends und astrologische Daten frei',
      unlockButton: 'Mit Lunar Pro freischalten',
      astrologicalInfluences: 'Astrologische Einflüsse',
      astrologicalDescription: 'Schalten Sie Daten über astrologische Ereignisse und Einflüsse frei.',
      advancedData: 'Erweiterte Monddaten',
      advancedDataDescription: 'Erleben Sie Mondzyklen mit erweiterten Daten.',
      illuminationTrend: 'Beleuchtungstrend',
      illuminationTrendSubtitle: 'Beleuchtung über den Monat',
    },
    profile: {
      title: 'Mein Konto',
      moonProActive: 'Lunar Pro Aktiv',
      allFeaturesAccess: 'Sie haben Zugriff auf alle Premium-Funktionen',
      trialEnds: 'Testversion endet',
      monthlyPlan: 'Monatlich',
      yearlyPlan: 'Jährlich',
      renews: 'Erneuert',
      upgradeToMoonPro: 'Auf Lunar Pro upgraden',
      adFree: 'Werbefreies Erlebnis',
      detailedAnalysis: 'Detaillierte Analyse',
      widgets: 'Startbildschirm-Widgets',
      illuminationTrends: 'Beleuchtungstrends',
      astrologicalInsights: 'Astrologische Einblicke',
      monthly: 'Monatlich',
      yearly: 'Jährlich',
      month: '/Monat',
      year: '/Jahr',
      save: 'Sparen',
      startTrial: '7-Tägige Kostenlose Testversion Starten',
      cancelAnytime: 'Jederzeit kündbar. Nach der Testversion',
      restorePurchases: 'Käufe Wiederherstellen',
      settings: 'Einstellungen',
      language: 'Sprache',
    },
    phases: {
      newMoon: 'Neumond',
      waxingCrescent: 'Zunehmende Sichel',
      firstQuarter: 'Erstes Viertel',
      waxingGibbous: 'Zunehmender Mond',
      fullMoon: 'Vollmond',
      waningGibbous: 'Abnehmender Mond',
      lastQuarter: 'Letztes Viertel',
      waningCrescent: 'Abnehmende Sichel',
    },
    location: {
      selectLocation: 'Standort Auswählen',
      searchCities: 'Städte suchen...',
      latitude: 'Breitengrad',
      longitude: 'Längengrad',
    },
    alerts: {
      success: 'Erfolg',
      trialStarted: 'Ihre 7-tägige kostenlose Testversion hat begonnen! Genießen Sie alle Premium-Funktionen.',
      subscribed: 'Sie haben jetzt Lunar Pro abonniert',
      noPurchases: 'Keine früheren Käufe gefunden.',
      comingSoon: 'Einstellungsseite kommt bald!',
      languageChanged: 'Sprache erfolgreich geändert',
    },
    about: {
      title: 'Über',
      description: 'Lunar Watch hilft Ihnen, Mondphasen zu erkunden und zu verfolgen und vieles mehr. Erfahren Sie mehr:',
      appName: 'App-Name',
      appVersion: 'App-Version',
      deviceModel: 'Gerätemodell',
      systemVersion: 'Systemversion',
      madeWith: 'Mit Liebe gemacht',
    },
  },
  hi: {
    common: {
      today: 'आज के लिए टैप करें',
    },
    tabs: {
      moon: 'चाँद',
      calendar: 'कैलेंडर',
      insights: 'अंतर्दृष्टि',
      profile: 'प्रोफ़ाइल',
    },
    home: {
      illumination: 'रोशनी',
      sunTimes: 'सूर्य का समय',
      sunrise: 'सूर्योदय',
      sunset: 'सूर्यास्त',
      moonTimes: 'चाँद का समय',
      moonrise: 'चंद्रोदय',
      moonset: 'चंद्रास्त',
      nextNewMoon: 'अगला अमावस्या',
      nextFullMoon: 'अगली पूर्णिमा',
      moonAge: 'चंद्रमा की आयु',
      moonAgeSince: 'पिछली अमावस्या के बाद से दिन',
      days: 'दिनों में',
    },
    calendar: {
      title: 'चंद्र कैलेंडर',
      weekdays: ['रवि', 'सोम', 'मंगल', 'बुध', 'गुरु', 'शुक्र', 'शनि'],
      months: [
        'जनवरी', 'फरवरी', 'मार्च', 'अप्रैल', 'मई', 'जून',
        'जुलाई', 'अगस्त', 'सितंबर', 'अक्टूबर', 'नवंबर', 'दिसंबर'
      ],
      bestViewingTimes: 'सर्वोत्तम दर्शन समय',
      specialMoonDescription: 'इस अवधि के दौरान पूर्णिमा को दिया गया एक दिव्य नाम है।',
      fullMoonNames: [
        'भेड़िया चंद्रमा', 'बर्फ चंद्रमा', 'कीड़ा चंद्रमा', 'गुलाबी चंद्रमा',
        'फूल चंद्रमा', 'स्ट्रॉबेरी चंद्रमा', 'हिरण चंद्रमा', 'स्टर्जन चंद्रमा',
        'फसल चंद्रमा', 'शिकारी चंद्रमा', 'बीवर चंद्रमा', 'ठंडा चंद्रमा'
      ],
    },
    insights: {
      title: 'प्रीमियम अंतर्दृष्टि',
      premiumContent: 'प्रीमियम सामग्री',
      unlockDescription: 'विस्तृत चंद्र अंतर्दृष्टि, रोशनी के रुझान और ज्योतिषीय डेटा अनलॉक करें',
      unlockButton: 'Lunar Pro से अनलॉक करें',
      astrologicalInfluences: 'ज्योतिषीय प्रभाव',
      astrologicalDescription: 'ज्योतिषीय घटनाओं और प्रभावों के बारे में डेटा अनलॉक करें।',
      advancedData: 'उन्नत चंद्र डेटा',
      advancedDataDescription: 'उन्नत डेटा के साथ चंद्र चक्र का अनुभव करें।',
      illuminationTrend: 'रोशनी का रुझान',
      illuminationTrendSubtitle: 'महीने में रोशनी',
    },
    profile: {
      title: 'मेरा खाता',
      moonProActive: 'Lunar Pro सक्रिय',
      allFeaturesAccess: 'आपके पास सभी प्रीमियम सुविधाओं तक पहुंच है',
      trialEnds: 'परीक्षण समाप्त',
      monthlyPlan: 'मासिक',
      yearlyPlan: 'वार्षिक',
      renews: 'नवीनीकरण',
      upgradeToMoonPro: 'Lunar Pro में अपग्रेड करें',
      adFree: 'विज्ञापन-मुक्त अनुभव',
      detailedAnalysis: 'विस्तृत विश्लेषण',
      widgets: 'होम स्क्रीन विजेट',
      illuminationTrends: 'रोशनी के रुझान',
      astrologicalInsights: 'ज्योतिषीय अंतर्दृष्टि',
      monthly: 'मासिक',
      yearly: 'वार्षिक',
      month: '/महीना',
      year: '/वर्ष',
      save: 'बचाएं',
      startTrial: '7-दिन का निःशुल्क परीक्षण शुरू करें',
      cancelAnytime: 'किसी भी समय रद्द करें। परीक्षण के बाद',
      restorePurchases: 'खरीदारी पुनर्स्थापित करें',
      settings: 'सेटिंग्स',
      language: 'भाषा',
    },
    phases: {
      newMoon: 'अमावस्या',
      waxingCrescent: 'शुक्ल पक्ष प्रारंभ',
      firstQuarter: 'प्रथम चरण',
      waxingGibbous: 'शुक्ल पक्ष',
      fullMoon: 'पूर्णिमा',
      waningGibbous: 'कृष्ण पक्ष',
      lastQuarter: 'अंतिम चरण',
      waningCrescent: 'कृष्ण पक्ष अंत',
    },
    location: {
      selectLocation: 'स्थान चुनें',
      searchCities: 'शहर खोजें...',
      latitude: 'अक्षांश',
      longitude: 'देशांतर',
    },
    alerts: {
      success: 'सफलता',
      trialStarted: 'आपका 7-दिन का निःशुल्क परीक्षण शुरू हो गया है! सभी प्रीमियम सुविधाओं का आनंद लें।',
      subscribed: 'आप अब Lunar Pro की सदस्यता ले चुके हैं',
      noPurchases: 'कोई पिछली खरीदारी नहीं मिली।',
      comingSoon: 'सेटिंग्स पेज जल्द आ रहा है!',
      languageChanged: 'भाषा सफलतापूर्वक बदल दी गई',
    },
    about: {
      title: 'के बारे में',
      description: 'Lunar Watch आपको चंद्रमा की कलाओं को खोजने और ट्रैक करने में मदद करता है और बहुत कुछ। और जानें:',
      appName: 'ऐप का नाम',
      appVersion: 'ऐप संस्करण',
      deviceModel: 'डिवाइस मॉडल',
      systemVersion: 'सिस्टम संस्करण',
      madeWith: 'प्यार से बनाया गया',
    },
  },
  zh: {
    common: {
      today: '点击查看今天',
    },
    tabs: {
      moon: '月相',
      calendar: '日历',
      insights: '洞察',
      profile: '个人资料',
    },
    home: {
      illumination: '照明度',
      sunTimes: '太阳时间',
      sunrise: '日出',
      sunset: '日落',
      moonTimes: '月亮时间',
      moonrise: '月出',
      moonset: '月落',
      nextNewMoon: '下一个新月',
      nextFullMoon: '下一个满月',
      moonAge: '月龄',
      moonAgeSince: '距离上次新月的天数',
      days: '天',
    },
    calendar: {
      title: '月相日历',
      weekdays: ['日', '一', '二', '三', '四', '五', '六'],
      months: [
        '一月', '二月', '三月', '四月', '五月', '六月',
        '七月', '八月', '九月', '十月', '十一月', '十二月'
      ],
      bestViewingTimes: '最佳观赏时间',
      specialMoonDescription: '是这个时期满月的天体名称。',
      fullMoonNames: [
        '狼月', '雪月', '虫月', '粉月',
        '花月', '草莓月', '鹿月', '鲟鱼月',
        '收获月', '猎月', '海狸月', '寒月'
      ],
    },
    insights: {
      title: '高级洞察',
      premiumContent: '高级内容',
      unlockDescription: '解锁详细的月相洞察、照明趋势和占星数据',
      unlockButton: '使用 Lunar Pro 解锁',
      astrologicalInfluences: '占星影响',
      astrologicalDescription: '解锁有关占星事件和影响的数据。',
      advancedData: '高级月相数据',
      advancedDataDescription: '体验增强数据的月相周期。',
      illuminationTrend: '照明趋势',
      illuminationTrendSubtitle: '月内照明度',
    },
    profile: {
      title: '我的账户',
      moonProActive: 'Lunar Pro 已激活',
      allFeaturesAccess: '您可以访问所有高级功能',
      trialEnds: '试用结束',
      monthlyPlan: '月度',
      yearlyPlan: '年度',
      renews: '续订',
      upgradeToMoonPro: '升级到 Lunar Pro',
      adFree: '无广告体验',
      detailedAnalysis: '详细分析',
      widgets: '主屏幕小部件',
      illuminationTrends: '照明趋势',
      astrologicalInsights: '占星洞察',
      monthly: '月度',
      yearly: '年度',
      month: '/月',
      year: '/年',
      save: '节省',
      startTrial: '开始 7 天免费试用',
      cancelAnytime: '随时取消。试用后',
      restorePurchases: '恢复购买',
      settings: '设置',
      language: '语言',
    },
    phases: {
      newMoon: '新月',
      waxingCrescent: '娥眉月',
      firstQuarter: '上弦月',
      waxingGibbous: '盈凸月',
      fullMoon: '满月',
      waningGibbous: '亏凸月',
      lastQuarter: '下弦月',
      waningCrescent: '残月',
    },
    location: {
      selectLocation: '选择位置',
      searchCities: '搜索城市...',
      latitude: '纬度',
      longitude: '经度',
    },
    alerts: {
      success: '成功',
      trialStarted: '您的 7 天免费试用已开始！享受所有高级功能。',
      subscribed: '您现在已订阅 Lunar Pro',
      noPurchases: '未找到以前的购买记录。',
      comingSoon: '设置页面即将推出！',
      languageChanged: '语言更改成功',
    },
    about: {
      title: '关于',
      description: 'Lunar Watch 帮助您探索和跟踪月相等更多内容。了解更多：',
      appName: '应用名称',
      appVersion: '应用版本',
      deviceModel: '设备型号',
      systemVersion: '系统版本',
      madeWith: '用心制作',
    },
  },
  ja: {
    common: {
      today: '今日をタップ',
    },
    tabs: {
      moon: '月',
      calendar: 'カレンダー',
      insights: 'インサイト',
      profile: 'プロフィール',
    },
    home: {
      illumination: '光度',
      sunTimes: '太陽の時間',
      sunrise: '日の出',
      sunset: '日の入',
      moonTimes: '月の時間',
      moonrise: '月の出',
      moonset: '月の入',
      nextNewMoon: '次の新月まで',
      nextFullMoon: '次の満月まで',
      moonAge: '月齢',
      moonAgeSince: '前回の新月からの日数',
      days: '日',
    },
    calendar: {
      title: '月のカレンダー',
      weekdays: ['日', '月', '火', '水', '木', '金', '土'],
      months: [
        '1月', '2月', '3月', '4月', '5月', '6月',
        '7月', '8月', '9月', '10月', '11月', '12月'
      ],
      bestViewingTimes: '最適な観測時間',
      specialMoonDescription: 'はこの時期の満月に付けられた天体名です。',
      fullMoonNames: [
        'ウルフムーン', 'スノームーン', 'ワームムーン', 'ピンクムーン',
        'フラワームーン', 'ストロベリームーン', 'バックムーン', 'スタージョンムーン',
        'ハーベストムーン', 'ハンターズムーン', 'ビーバームーン', 'コールドムーン'
      ],
    },
    insights: {
      title: 'プレミアムインサイト',
      premiumContent: 'プレミアムコンテンツ',
      unlockDescription: '詳細な月のインサイト、光度トレンド、占星術データをロック解除',
      unlockButton: 'Lunar Pro でロック解除',
      astrologicalInfluences: '占星術的影響',
      astrologicalDescription: '占星術のイベントと影響に関するデータのロックを解除します。',
      advancedData: '高度な月データ',
      advancedDataDescription: '強化されたデータで月のサイクルを体験してください。',
      illuminationTrend: '光度トレンド',
      illuminationTrendSubtitle: '月間の光度',
    },
    profile: {
      title: 'マイアカウント',
      moonProActive: 'Lunar Pro アクティブ',
      allFeaturesAccess: 'すべてのプレミアム機能にアクセスできます',
      trialEnds: '試用終了',
      monthlyPlan: '月額',
      yearlyPlan: '年額',
      renews: '更新',
      upgradeToMoonPro: 'Lunar Pro にアップグレード',
      adFree: '広告なし体験',
      detailedAnalysis: '詳細な分析',
      widgets: 'ホーム画面ウィジェット',
      illuminationTrends: '光度トレンド',
      astrologicalInsights: '占星術的インサイト',
      monthly: '月額',
      yearly: '年額',
      month: '/月',
      year: '/年',
      save: '保存',
      startTrial: '7日間無料トライアルを開始',
      cancelAnytime: 'いつでもキャンセル可能。トライアル後',
      restorePurchases: '購入を復元',
      settings: '設定',
      language: '言語',
    },
    phases: {
      newMoon: '新月',
      waxingCrescent: '三日月',
      firstQuarter: '上弦の月',
      waxingGibbous: '十三夜月',
      fullMoon: '満月',
      waningGibbous: '寝待月',
      lastQuarter: '下弦の月',
      waningCrescent: '有明月',
    },
    location: {
      selectLocation: '場所を選択',
      searchCities: '都市を検索...',
      latitude: '緯度',
      longitude: '経度',
    },
    alerts: {
      success: '成功',
      trialStarted: '7日間の無料トライアルが開始されました！すべてのプレミアム機能をお楽しみください。',
      subscribed: 'Lunar Pro にサブスクライブしました',
      noPurchases: '以前の購入が見つかりませんでした。',
      comingSoon: '設定ページは近日公開！',
      languageChanged: '言語が正常に変更されました',
    },
    about: {
      title: 'について',
      description: 'Lunar Watchは、月の満ち欠けなどを探索し、追跡するのに役立ちます。詳細はこちら：',
      appName: 'アプリ名',
      appVersion: 'アプリバージョン',
      deviceModel: 'デバイスモデル',
      systemVersion: 'システムバージョン',
      madeWith: '愛を込めて作成',
    },
  },
  it: {
    common: {
      today: 'Tocca per Oggi',
    },
    tabs: {
      moon: 'Luna',
      calendar: 'Calendario',
      insights: 'Approfondimenti',
      profile: 'Profilo',
    },
    home: {
      illumination: 'Illuminazione',
      sunTimes: 'Orari del Sole',
      sunrise: 'Alba',
      sunset: 'Tramonto',
      moonTimes: 'Orari della Luna',
      moonrise: 'Levata della luna',
      moonset: 'Tramonto della luna',
      nextNewMoon: 'Prossima Luna Nuova tra',
      nextFullMoon: 'Prossima Luna Piena tra',
      moonAge: 'Età della Luna',
      moonAgeSince: 'Giorni dall\'ultima luna nuova',
      days: 'giorni',
    },
    calendar: {
      title: 'Calendario Lunare',
      weekdays: ['Do', 'Lu', 'Ma', 'Me', 'Gi', 'Ve', 'Sa'],
      months: [
        'Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno',
        'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'
      ],
      bestViewingTimes: 'Migliori Orari di Osservazione',
      specialMoonDescription: 'è un nome celestiale dato alla luna piena durante questo periodo.',
      fullMoonNames: [
        'Luna del Lupo', 'Luna della Neve', 'Luna del Verme', 'Luna Rosa',
        'Luna dei Fiori', 'Luna della Fragola', 'Luna del Cervo', 'Luna dello Storione',
        'Luna del Raccolto', 'Luna del Cacciatore', 'Luna del Castoro', 'Luna Fredda'
      ],
    },
    insights: {
      title: 'Approfondimenti Premium',
      premiumContent: 'Contenuto Premium',
      unlockDescription: 'Sblocca approfondimenti lunari dettagliati, tendenze di illuminazione e dati astrologici',
      unlockButton: 'Sblocca con Lunar Pro',
      astrologicalInfluences: 'Influenze Astrologiche',
      astrologicalDescription: 'Sblocca i dati sugli eventi astrologici e le influenze.',
      advancedData: 'Dati Lunari Avanzati',
      advancedDataDescription: 'Vivi i cicli lunari con dati migliorati.',
      illuminationTrend: 'Tendenza di Illuminazione',
      illuminationTrendSubtitle: 'Illuminazione durante il mese',
    },
    profile: {
      title: 'Il Mio Account',
      moonProActive: 'Lunar Pro Attivo',
      allFeaturesAccess: 'Hai accesso a tutte le funzionalità premium',
      trialEnds: 'Prova termina',
      monthlyPlan: 'Mensile',
      yearlyPlan: 'Annuale',
      renews: 'Rinnova',
      upgradeToMoonPro: 'Passa a Lunar Pro',
      adFree: 'Esperienza senza pubblicità',
      detailedAnalysis: 'Analisi dettagliata',
      widgets: 'Widget della schermata iniziale',
      illuminationTrends: 'Tendenze di illuminazione',
      astrologicalInsights: 'Approfondimenti astrologici',
      monthly: 'Mensile',
      yearly: 'Annuale',
      month: '/mese',
      year: '/anno',
      save: 'Risparmia',
      startTrial: 'Inizia Prova Gratuita di 7 Giorni',
      cancelAnytime: 'Annulla in qualsiasi momento. Dopo la prova',
      restorePurchases: 'Ripristina Acquisti',
      settings: 'Impostazioni',
      language: 'Lingua',
    },
    phases: {
      newMoon: 'Luna Nuova',
      waxingCrescent: 'Luna Crescente',
      firstQuarter: 'Primo Quarto',
      waxingGibbous: 'Gibbosa Crescente',
      fullMoon: 'Luna Piena',
      waningGibbous: 'Gibbosa Calante',
      lastQuarter: 'Ultimo Quarto',
      waningCrescent: 'Luna Calante',
    },
    location: {
      selectLocation: 'Seleziona Posizione',
      searchCities: 'Cerca città...',
      latitude: 'Latitudine',
      longitude: 'Longitudine',
    },
    alerts: {
      success: 'Successo',
      trialStarted: 'La tua prova gratuita di 7 giorni è iniziata! Goditi tutte le funzionalità premium.',
      subscribed: 'Ora sei abbonato a Lunar Pro',
      noPurchases: 'Nessun acquisto precedente trovato.',
      comingSoon: 'Pagina impostazioni in arrivo!',
      languageChanged: 'Lingua cambiata con successo',
    },
    about: {
      title: 'Informazioni',
      description: 'Lunar Watch ti aiuta a esplorare e tenere traccia delle fasi lunari e molto altro. Scopri di più:',
      appName: 'Nome dell\'App',
      appVersion: 'Versione dell\'App',
      deviceModel: 'Modello del Dispositivo',
      systemVersion: 'Versione del Sistema',
      madeWith: 'Fatto con amore',
    },
  },
};

export function getTranslations(language: Language): Translations {
  return translations[language];
}

export function getPhaseTranslation(phase: string, language: Language): string {
  const t = getTranslations(language);
  
  const phaseMap: Record<string, string> = {
    'New Moon': t.phases.newMoon,
    'Waxing Crescent': t.phases.waxingCrescent,
    'First Quarter': t.phases.firstQuarter,
    'Waxing Gibbous': t.phases.waxingGibbous,
    'Full Moon': t.phases.fullMoon,
    'Waning Gibbous': t.phases.waningGibbous,
    'Last Quarter': t.phases.lastQuarter,
    'Waning Crescent': t.phases.waningCrescent,
  };
  
  return phaseMap[phase] || phase;
}
