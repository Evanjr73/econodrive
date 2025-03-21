
import { TestIds, InterstitialAd, AppOpenAd, AdEventType } from "react-native-google-mobile-ads";

const devmode = false;

export const adUnitId = devmode ? TestIds.APP_OPEN : "ca-app-pub-6400911604782344/6815725444";
 export const appOpenAd = AppOpenAd.createForAdRequest(adUnitId, {
  keywords: ['fachion', 'clothing']
})
export const addBannerUnited = devmode ? TestIds.ADAPTIVE_BANNER : "ca-app-pub-4013254471054866/1451106718";
export const adInterstitialUid = devmode ? TestIds.INTERSTITIAL : "ca-app-pub-4013254471054866/3011600394";

export const interstitialVideoad = InterstitialAd.createForAdRequest(adInterstitialUid , {
  keywords: ['fashion', 'clothing'],
});



