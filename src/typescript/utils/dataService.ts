const SKIP_NOTIFICATION: Array<string> = [];

export function shouldShowNotification(site: string) {
  let shouldSkipNotification = SKIP_NOTIFICATION.includes(site);
  SKIP_NOTIFICATION.push(site);
  return !shouldSkipNotification;
}

export async function loadServiceConfig(url: URL) {
  return TWOFACTORAUTHORG_DATA[url.origin];
}

/**
 * The configuration for a single service.
 * 
 * @export
 * @interface SERVICE_CONFIG
 */
export interface SERVICE_CONFIG {
  name: string;
  url: string;
  img?: string;
  tfa: boolean;
  software?: boolean;
  hardware?: boolean;
  sms?: boolean;
  phone?: boolean;
  email?: boolean;
  exceptions?: object;
  doc?: string;
  twitter?: string;
  facebook?: string;
  email_address?: string;
  status?: string;
  lang?: string;
}

/**
 * A map of category -> services
 * 
 * @export
 * @interface CATEGORY_MAP
 */
export interface CATEGORY_MAP {
  [category: string]: {
    [serviceName: string]: SERVICE_CONFIG
  }
}

export interface ORIGIN_TO_SERVICE_CONFIG {
  [origin: string] : SERVICE_CONFIG;
}

const TWOFACTORAUTHORG_DATA: ORIGIN_TO_SERVICE_CONFIG = {
  "https://www.aerofs.com": {
    "name": "AeroFS",
    "url": "https://www.aerofs.com/",
    "tfa": true,
    "software": true,
    "img": "aerofs.png",
    "doc": "https://support.aerofs.com/hc/en-us/articles/202610424-How-Do-I-Set-Up-Two-Factor-Authentication-"
  },
  "https://www.icloud.com": {
    "name": "Apple iCloud",
    "url": "https://www.icloud.com",
    "img": "icloud.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "exceptions": {
      "text": "See https://support.apple.com/HT202656 for a list of supported SMS carriers."
    },
    "doc": "https://support.apple.com/HT204152"
  },
  "https://www.backblaze.com": {
    "name": "Backblaze",
    "url": "https://www.backblaze.com",
    "img": "backblaze.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://help.backblaze.com/hc/en-us/articles/217666588-Two-Factor-Verification"
  },
  "https://www.box.com": {
    "name": "Box",
    "url": "https://www.box.com/",
    "img": "box.png",
    "tfa": true,
    "sms": true,
    "doc": "https://community.box.com/t5/How-to-Guides-for-Account/Manage-Account-Settings/ta-p/20022#authentication"
  },
  "https://www.getcloudapp.com": {
    "name": "CloudApp",
    "url": "https://www.getcloudapp.com/",
    "twitter": "cloudapp",
    "img": "cloudapp.png",
    "tfa": false,
    "facebook": "getcloudapp"
  },
  "https://www.crashplan.com": {
    "name": "CrashPlan",
    "url": "https://www.crashplan.com",
    "twitter": "crashplan",
    "img": "crashplan.png",
    "tfa": false,
    "facebook": "CrashPlan"
  },
  "https://degoo.com": {
    "name": "Degoo",
    "url": "https://degoo.com/",
    "img": "degoo.png",
    "tfa": false,
    "twitter": "DegooBackup",
    "facebook": "DegooBackup",
    "email_address": "support@degoo.com"
  },
  "https://www.dropbox.com": {
    "name": "Dropbox",
    "url": "https://www.dropbox.com",
    "img": "dropbox.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "hardware": true,
    "doc": "https://www.dropbox.com/en/help/363"
  },
  "https://evernote.com": {
    "name": "Evernote",
    "url": "https://evernote.com",
    "img": "evernote.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://blog.evernote.com/blog/2013/10/04/two-step-verification-available-to-all-users/"
  },
  "https://filethis.com": {
    "name": "FileThis",
    "url": "https://filethis.com",
    "twitter": "FileThisCompany",
    "img": "filethis.png",
    "tfa": false,
    "facebook": "FileThis"
  },
  "https://drive.google.com": {
    "name": "Google Drive",
    "url": "https://drive.google.com",
    "img": "drive.png",
    "tfa": true,
    "sms": true,
    "phone": true,
    "software": true,
    "hardware": true,
    "doc": "https://www.google.com/intl/en-US/landing/2step/features.html"
  },
  "https://www.google.com": {
    "name": "Google",
    "url": "https://www.google.com",
    "tfa": true,
    "sms": true,
    "phone": true,
    "software": true,
    "hardware": true,
    "doc": "https://www.google.com/intl/en-US/landing/2step/features.html"
  },
  "https://hubic.com": {
    "name": "hubiC",
    "url": "https://hubic.com/",
    "twitter": "hubic",
    "img": "hubic.png",
    "tfa": false
  },
  "https://www.idrive.com": {
    "name": "IDrive",
    "url": "https://www.idrive.com",
    "twitter": "IDriveBackup",
    "img": "idrive.png",
    "tfa": false,
    "facebook": "IDriveBackup"
  },
  "https://www.jottacloud.com": {
    "name": "Jottacloud",
    "url": "https://www.jottacloud.com",
    "twitter": "jottacloud",
    "email_address": "support@jottacloud.com",
    "facebook": "Jottacloud",
    "img": "jotta.png",
    "tfa": false
  },
  "https://www.justcloud.com": {
    "name": "JustCloud",
    "url": "https://www.justcloud.com",
    "twitter": "justcloudcom",
    "img": "justcloud.png",
    "tfa": false,
    "facebook": "JustCloudStorage"
  },
  "https://koofr.eu": {
    "name": "Koofr",
    "url": "https://koofr.eu",
    "tfa": true,
    "software": true,
    "img": "koofr.png",
    "doc": "https://koofr.eu/help/other/how-do-i-enable-2-step-verification/"
  },
  "https://mega.nz": {
    "name": "Mega",
    "url": "https://mega.nz/",
    "twitter": "MEGAprivacy",
    "img": "mega.png",
    "tfa": false
  },
  "https://www.nimbox.co.uk": {
    "name": "Nimbox",
    "url": "https://www.nimbox.co.uk/",
    "img": "nimbox.png",
    "tfa": true,
    "email": true,
    "sms": true,
    "software": true,
    "doc": "http://support.nimbox.co.uk/knowledge_base/topics/two-step-slash-two-factor-authentication"
  },
  "https://onedrive.live.com": {
    "name": "OneDrive",
    "url": "https://onedrive.live.com",
    "img": "onedrive.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://support.microsoft.com/en-us/help/12408/microsoft-account-about-two-step-verification"
  },
  "https://pogoplug.com": {
    "name": "Pogoplug",
    "url": "https://pogoplug.com/",
    "twitter": "pogoplug",
    "img": "pogoplug.png",
    "tfa": false
  },
  "https://www.qnap.com": {
    "name": "QNAP",
    "url": "https://www.qnap.com",
    "img": "qnap.png",
    "tfa": true,
    "email": true,
    "software": true,
    "doc": "https://www.qnap.com/i/useng/tutorial/con_show.php?op=showone&cid=151"
  },
  "https://www.panterranetworks.com": {
    "name": "SmartBox",
    "url": "https://www.panterranetworks.com/products/smartbox.php",
    "img": "smartbox.png",
    "tfa": true,
    "email": true,
    "software": true,
    "exceptions": {
      "text": "Only available for Enterprise users"
    }
  },
  "https://spideroak.com": {
    "name": "SpiderOak",
    "url": "https://spideroak.com",
    "twitter": "spideroak",
    "img": "spideroak.png",
    "tfa": false,
    "facebook": "SpiderOak"
  },
  "https://www.sugarsync.com": {
    "name": "SugarSync",
    "twitter": "SugarSync",
    "url": "https://www.sugarsync.com/",
    "img": "sugarsync.png",
    "tfa": false,
    "facebook": "SugarSync"
  },
  "https://www.sync.com": {
    "name": "Sync",
    "url": "https://www.sync.com",
    "img": "sync.png",
    "software": true,
    "email": true,
    "tfa": true,
    "doc": "https://www.sync.com/help/how-do-i-setup-two-factor-authentication/"
  },
  "https://www.synology.com": {
    "name": "Synology",
    "url": "https://www.synology.com/",
    "img": "synology.png",
    "tfa": true,
    "software": true,
    "email": true,
    "doc": "https://originwww.synology.com/en-us/knowledgebase/tutorials/615#t5"
  },
  "https://thisdata.com": {
    "name": "ThisData",
    "url": "https://thisdata.com",
    "img": "thisdata.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://thisdata.com/blog/how-to-enable-two-factor-authentication/"
  },
  "https://tresorit.com": {
    "name": "Tresorit",
    "url": "https://tresorit.com/",
    "img": "tresorit.png",
    "tfa": true,
    "sms": true,
    "phone": true,
    "software": true,
    "email": true,
    "doc": "https://support.tresorit.com/entries/104192996-How-to-set-up-two-step-verification"
  },
  "https://disk.yandex.com": {
    "name": "Yandex.Disk",
    "url": "https://disk.yandex.com",
    "img": "yandexdisk.png",
    "tfa": true,
    "software": true,
    "exceptions": {
      "text": "SMS-capable phone required for initial setup."
    },
    "doc": "https://yandex.com/support/passport/authorization/twofa.html"
  },
  "http://www.zetta.net": {
    "name": "Zetta.net",
    "url": "http://www.zetta.net/",
    "img": "zetta.png",
    "tfa": true,
    "software": true,
    "doc": "http://www.zetta.net/about/blog/how-set-zetta-two-factor-authentication/"
  },
  "https://www.actorsfcu.com": {
    "name": "Actors Federal Credit Union",
    "url": "https://www.actorsfcu.com/",
    "twitter": "ActorsFCU",
    "facebook": "ActorsFCU",
    "img": "actorsfcu.png",
    "tfa": false
  },
  "https://www.addiko.hr": {
    "name": "Addiko Bank",
    "url": "https://www.addiko.hr/",
    "img": "addikobank.png",
    "tfa": true,
    "hardware": true,
    "software": true,
    "doc": "https://www.addiko.hr/sites/addiko.hr/files/content/addiko_bank_uputa_za_koristenje_tokena_mtokena.pdf"
  },
  "https://www.alliantcreditunion.org": {
    "name": "Alliant Credit Union",
    "url": "https://www.alliantcreditunion.org/",
    "twitter": "AlliantCU",
    "facebook": "alliantcreditunion",
    "img": "alliantcreditunion.png",
    "tfa": false
  },
  "https://www.ally.com": {
    "name": "Ally Bank",
    "url": "https://www.ally.com/",
    "img": "allybank.png",
    "tfa": true,
    "sms": true,
    "email": true,
    "doc": "http://www.ally.com/messages/sms/index.html"
  },
  "https://www.altra.org": {
    "name": "Altra Federal Credit Union",
    "url": "https://www.altra.org/",
    "twitter": "AltraCU",
    "facebook": "altra.org",
    "img": "altrafcu.png",
    "tfa": false
  },
  "https://www.americafirst.com": {
    "name": "America First Credit Union",
    "url": "https://www.americafirst.com/",
    "twitter": "AFCU",
    "facebook": "americafirstfb",
    "img": "americafirstcu.png",
    "tfa": false
  },
  "https://www.americanexpress.com": {
    "name": "American Express",
    "url": "https://www.americanexpress.com/",
    "twitter": "AmericanExpress",
    "facebook": "AmericanExpressUS",
    "img": "americanexpress.png",
    "tfa": false
  },
  "https://www.americaschristiancu.com": {
    "name": "America’s Christian Credit Union",
    "url": "https://www.americaschristiancu.com",
    "img": "accu.png",
    "tfa": true,
    "sms": true,
    "phone": true,
    "email": true,
    "doc": "https://www.americaschristiancu.com/ministry/services/online-banking-bill-pay.html"
  },
  "https://www.andrewsfcu.org": {
    "name": "Andrews Federal Credit Union",
    "url": "https://www.andrewsfcu.org/",
    "twitter": "AndrewsFederal",
    "facebook": "AndrewsFederal",
    "img": "andrewsfederalcu.png",
    "tfa": false
  },
  "https://www.anz.com.au": {
    "name": "Australia and New Zealand Banking Group",
    "url": "https://www.anz.com.au/",
    "twitter": "ANZ_AU",
    "facebook": "ANZAustralia",
    "img": "anz.png",
    "tfa": false
  },
  "https://www.bmedonline.it": {
    "name": "Banca Mediolanum",
    "url": "https://www.bmedonline.it",
    "img": "mediolanum.png",
    "tfa": false,
    "twitter": "BancaMediolanum",
    "facebook": "BancaMediolanum",
    "lang": "it"
  },
  "http://www.bca.co.id": {
    "name": "Bank Central Asia (BCA)",
    "url": "http://www.bca.co.id/en",
    "img": "bankcentralasia.png",
    "tfa": true,
    "hardware": true,
    "doc": "http://www.bca.co.id/en/Individu/Produk/E-Banking/Klik-BCA"
  },
  "https://www.bankofamerica.com": {
    "name": "Bank of America",
    "url": "https://www.bankofamerica.com/",
    "img": "bankofamerica.png",
    "tfa": true,
    "sms": true,
    "email": true,
    "hardware": true,
    "doc": "https://www.bankofamerica.com/privacy/online-mobile-banking-privacy/safepass.go"
  },
  "http://www.bochk.com": {
    "name": "Bank of China (Hong Kong)",
    "url": "http://www.bochk.com",
    "img": "BOCHK.png",
    "tfa": true,
    "hardware": true,
    "doc": "https://www.bochk.com/en/security/2factorauthentication.html"
  },
  "https://www.barclays.co.uk": {
    "name": "Barclays UK",
    "url": "https://www.barclays.co.uk/",
    "img": "barclays.png",
    "tfa": true,
    "hardware": true,
    "software": true,
    "doc": "https://www.barclays.co.uk/Helpsupport/UpgradetoPINsentry/P1242559314766"
  },
  "https://www.banking.barclaysus.com": {
    "name": "Barclays US",
    "url": "https://www.banking.barclaysus.com/",
    "img": "barclays.png",
    "tfa": true,
    "sms": true,
    "phone": true,
    "email": true
  },
  "http://www.bbt.com": {
    "name": "BB&amp;T",
    "url": "http://www.bbt.com/",
    "twitter": "BBT",
    "facebook": "BBTBank",
    "img": "bbt.png",
    "tfa": false
  },
  "https://www.bhfcu.com": {
    "name": "Black Hills Federal Credit Union",
    "url": "https://www.bhfcu.com",
    "img": "bhfcu.png",
    "tfa": true,
    "sms": true,
    "phone": true,
    "email": true,
    "doc": "https://www.bhfcu.com/Landing/Online-Banking-FAQs"
  },
  "https://www.bmo.com": {
    "name": "BMO Bank of Montreal",
    "url": "https://www.bmo.com/",
    "twitter": "BMO",
    "img": "bmo.png",
    "tfa": false
  },
  "https://www.bmoharris.com": {
    "name": "BMO Harris Bank",
    "url": "https://www.bmoharris.com/",
    "twitter": "BMOHarrisBank",
    "facebook": "BMOHarrisBank",
    "img": "bmo.png",
    "tfa": false
  },
  "https://www.becu.org": {
    "name": "Boeing Employee Credit Union",
    "url": "https://www.becu.org/",
    "img": "becu.png",
    "tfa": true,
    "sms": true
  },
  "https://www.bofifederalbank.com": {
    "name": "BofI Federal Bank",
    "url": "https://www.bofifederalbank.com/",
    "img": "bofifederalbank.png",
    "tfa": true,
    "sms": true,
    "phone": true,
    "doc": "https://www.mybankofinternet.com/tob/live/usp-core/static/help.html#login_security"
  },
  "https://www.capitalone.com": {
    "name": "Capital One",
    "url": "https://www.capitalone.com/",
    "img": "capitalone.png",
    "tfa": true,
    "sms": true,
    "email": true,
    "software": true,
    "doc": "https://www.capitalone.com/identity-protection/swiftid/"
  },
  "https://www.cdcfcu.com": {
    "name": "CDC Federal Credit Union",
    "url": "https://www.cdcfcu.com",
    "twitter": "CDCCreditUnion",
    "facebook": "CDCFederalCreditUnion",
    "img": "cdcfcu.png",
    "tfa": false
  },
  "https://www.chase.com": {
    "name": "Chase",
    "url": "https://www.chase.com/",
    "img": "chase.png",
    "tfa": true,
    "sms": true,
    "phone": true,
    "email": true,
    "doc": "https://twofactorauth.org/notes/chase/"
  },
  "https://www.chimebank.com": {
    "name": "Chime",
    "url": "https://www.chimebank.com",
    "img": "chime.png",
    "tfa": false,
    "twitter": "Chime",
    "facebook": "chimebank"
  },
  "https://www.cibc.ca": {
    "name": "CIBC",
    "url": "https://www.cibc.ca",
    "twitter": "cibc",
    "facebook": "CIBC",
    "img": "cibc.png",
    "tfa": false
  },
  "https://online.citi.com": {
    "name": "Citibank",
    "url": "https://online.citi.com/",
    "twitter": "Citibank",
    "facebook": "citibank",
    "img": "citibank.png",
    "tfa": false
  },
  "https://www.citibank.com.au": {
    "name": "Citibank Australia",
    "url": "https://www.citibank.com.au/",
    "img": "citibank.png",
    "tfa": true,
    "software": true,
    "sms": true,
    "doc": "https://www.citibank.com.au/otp/"
  },
  "https://www.citizensbank.com": {
    "name": "Citizens Bank",
    "url": "https://www.citizensbank.com",
    "twitter": "citizensbank",
    "facebook": "citizensbank",
    "img": "citizensbank.png",
    "tfa": false
  },
  "https://www.comdirect.de": {
    "name": "comdirect",
    "url": "https://www.comdirect.de/",
    "twitter": "comdirect",
    "facebook": "comdirect",
    "img": "comdirect.png",
    "tfa": false,
    "lang": "de"
  },
  "http://www.cbq.qa": {
    "name": "Commercial Bank of Qatar",
    "url": "http://www.cbq.qa/",
    "img": "cbq.png",
    "tfa": true,
    "sms": true,
    "doc": "https://cbonline.cbq.qa/RIB/Common/FAQContent",
    "exceptions": {
      "text": "An SMS capable phone with a Qatar phone number is required."
    }
  },
  "https://www.commerzbank.de": {
    "name": "Commerzbank",
    "url": "https://www.commerzbank.de/",
    "twitter": "commerzbank",
    "facebook": "commerzbank",
    "img": "commerzbank.png",
    "email_address": "directbanking@commerzbank.com",
    "tfa": false,
    "lang": "de"
  },
  "https://www.commbank.com.au": {
    "name": "Commonwealth Bank of Australia",
    "url": "https://www.commbank.com.au/",
    "img": "commbank.png",
    "tfa": true,
    "sms": true,
    "doc": "https://www.commbank.com.au/security-privacy/netcode.html"
  },
  "https://www.cua.com.au": {
    "name": "Credit Union Australia",
    "url": "https://www.cua.com.au/",
    "img": "cua.png",
    "tfa": false,
    "twitter": "cua_connect",
    "facebook": "CUA"
  },
  "https://www.desjardins.com": {
    "name": "Desjardins",
    "url": "https://www.desjardins.com/",
    "twitter": "mvtdesjardins",
    "facebook": "desjardins",
    "img": "desjardins.png",
    "tfa": false,
    "lang": "fr"
  },
  "https://www.dkb.de": {
    "name": "Deutsche Kreditbank (DKB)",
    "url": "https://www.dkb.de/",
    "img": "dkb.png",
    "tfa": false,
    "facebook": "Deutsche.Kreditbank",
    "lang": "de"
  },
  "https://www.dcu.org": {
    "name": "Digital Federal Credit Union",
    "url": "https://www.dcu.org",
    "img": "dcu.png",
    "tfa": true,
    "phone": true,
    "sms": true,
    "email": true,
    "doc": "https://www.dcu.org/online-banking/online-banking-enhancements.html"
  },
  "https://www.discover.com": {
    "name": "Discover",
    "url": "https://www.discover.com/",
    "img": "discover.png",
    "tfa": true,
    "email": true,
    "phone": true,
    "sms": true,
    "doc": "https://www.discover.com/credit-cards/member-benefits/security-center/protect-account/account-verification.html"
  },
  "https://www.dnb.no": {
    "name": "DNB",
    "url": "https://www.dnb.no/",
    "img": "dnb.png",
    "tfa": true,
    "hardware": true,
    "software": true,
    "doc": "https://www.dnb.no/privat/kundeservice/innlogging-nettbank.html"
  },
  "http://www.dutchbanglabank.com": {
    "name": "Dutch-Bangla Bank Limited (DBBL)",
    "url": "http://www.dutchbanglabank.com/",
    "facebook": "Dutchbanglabankltd",
    "email_address": "hrd_head@dbbl.com.bd",
    "img": "dbbl.png",
    "tfa": false,
    "lang": "bn"
  },
  "https://www.easybank.at": {
    "name": "Easybank",
    "url": "https://www.easybank.at",
    "facebook": "easybank",
    "img": "easybank.png",
    "tfa": false,
    "lang": "de"
  },
  "https://www.erstebank.hr": {
    "name": "Erste Bank Hrvatska",
    "url": "https://www.erstebank.hr/",
    "img": "erstehr.png",
    "tfa": true,
    "hardware": true,
    "software": true,
    "doc": "https://www.erstebank.hr/content/dam/hr/ebc/www_erstebank_hr/gradani/downloads/e-bankarstvo/Upute%20za%20prijavu.pdf"
  },
  "https://everbank.com": {
    "name": "everbank.com",
    "url": "https://everbank.com",
    "img": "everbank.png",
    "tfa": true,
    "phone": true,
    "sms": true
  },
  "https://www.fairwinds.org": {
    "name": "Fairwinds",
    "url": "https://www.fairwinds.org",
    "img": "fairwinds.png",
    "tfa": true,
    "sms": true,
    "email": true,
    "phone": true,
    "doc": "https://www.fairwinds.org/inside/privacy/security_we.asp#multifactor-auth"
  },
  "https://www.53.com": {
    "name": "Fifth Third Bank",
    "url": "https://www.53.com/",
    "twitter": "fifththird",
    "facebook": "FifthThirdBank",
    "img": "fifththird.png",
    "tfa": false
  },
  "https://getfinal.com": {
    "name": "Final",
    "url": "https://getfinal.com/",
    "img": "final.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://getfinal.com/company-news/2017/05/31/why-final-is-transitioning-to-TOTP-for-2FA/"
  },
  "http://www1.firstdirect.com": {
    "name": "First Direct",
    "url": "http://www1.firstdirect.com/",
    "img": "firstdirect.png",
    "tfa": true,
    "hardware": true,
    "software": true,
    "doc": "https://www1.firstdirect.com/1/2/securekey/"
  },
  "https://www.firstrepublic.com": {
    "name": "First Republic Bank",
    "url": "https://www.firstrepublic.com/",
    "img": "first-republic.png",
    "tfa": true,
    "sms": true,
    "phone": true,
    "email": true,
    "doc": "https://www.firstrepublic.com/resource/banking-online-faqs#su10"
  },
  "https://www.firsttechfed.com": {
    "name": "First Tech Federal Credit Union",
    "url": "https://www.firsttechfed.com/",
    "img": "firsttechfcu.png",
    "tfa": true,
    "hardware": true,
    "software": true,
    "doc": "https://www.firsttechfed.com/Tools-and-Resources/Tools-and-Resources/What-You-Can-Do-To-Protect-Your-Privacy#3"
  },
  "https://www.efirstbank.com": {
    "name": "FirstBank",
    "url": "https://www.efirstbank.com/",
    "twitter": "efirstbank",
    "facebook": "efirstbank",
    "email_address": "banking@efirstbank.com",
    "img": "firstbank.png",
    "tfa": false
  },
  "https://www.gls.de": {
    "name": "GLS Gemeinschaftsbank",
    "url": "https://www.gls.de/",
    "twitter": "glsbank",
    "facebook": "glsbank",
    "img": "gls.png",
    "tfa": false,
    "lang": "de"
  },
  "https://www.gsbank.com": {
    "name": "GS Bank",
    "url": "https://www.gsbank.com",
    "twitter": "GoldmanSachs",
    "facebook": "goldmansachs",
    "img": "gsbank.png",
    "tfa": false
  },
  "https://www.halifax.co.uk": {
    "name": "Halifax",
    "url": "https://www.halifax.co.uk",
    "twitter": "AskHalifaxBank",
    "facebook": "halifax",
    "img": "halifax.png",
    "tfa": false
  },
  "https://www.handelsbanken.se": {
    "name": "Handelsbanken",
    "url": "https://www.handelsbanken.se/",
    "img": "handelsbanken.png",
    "tfa": true,
    "hardware": true,
    "software": true,
    "doc": "https://www.handelsbanken.se/shb/INeT/ICentSv.nsf/Default/qAE99695C4C1D033DC12579120036EB43?Opendocument"
  },
  "https://www.holvi.com": {
    "name": "Holvi",
    "url": "https://www.holvi.com/",
    "img": "holvi.png",
    "twitter": "Holvi",
    "facebook": "HolviCom",
    "tfa": false
  },
  "http://www.hsbc.com": {
    "name": "HSBC",
    "url": "http://www.hsbc.com",
    "img": "hsbc.png",
    "tfa": true,
    "hardware": true,
    "software": true,
    "doc": "https://www.hsbc.co.uk/1/2/customer-support/online-banking-security/secure-key"
  },
  "https://www.huntington.com": {
    "name": "Huntington National Bank",
    "url": "https://www.huntington.com",
    "twitter": "Huntington_Bank",
    "facebook": "HuntingtonBank",
    "img": "huntingtonnationalbank.png",
    "tfa": false
  },
  "https://www.iberiabank.com": {
    "name": "IberiaBank",
    "url": "https://www.iberiabank.com",
    "twitter": "IBERIABANK",
    "facebook": "IberiaBank",
    "img": "iberiabank.png",
    "tfa": false
  },
  "https://www.ing.lu": {
    "name": "ING (Luxembourg)",
    "url": "https://www.ing.lu",
    "img": "ing.png",
    "tfa": true,
    "hardware": true,
    "doc": "https://www.ing.lu/web/ING/EN/Personal/Customerservices/FAQ/MYING_FAQ_EN"
  },
  "https://www.ing.com.au": {
    "name": "ING Australia",
    "url": "https://www.ing.com.au",
    "img": "ing.png",
    "tfa": true,
    "sms": true
  },
  "https://www.ing-diba.at": {
    "name": "ING-DiBa Austria",
    "url": "https://www.ing-diba.at",
    "twitter": "INGDiBaAustria",
    "facebook": "ingdibaaustria",
    "img": "ingdibaaustria.png",
    "tfa": false,
    "lang": "de"
  },
  "https://www.intesasanpaolo.com": {
    "name": "Intesa Sanpaolo",
    "url": "https://www.intesasanpaolo.com",
    "img": "intesasanpaolo.png",
    "tfa": true,
    "hardware": true,
    "doc": "http://www.intesasanpaolo.com/servizi-multicanale/sicurezza.jsp"
  },
  "https://www.key.com": {
    "name": "KeyBank",
    "url": "https://www.key.com",
    "twitter": "KeyBank_Help",
    "img": "keybank.png",
    "tfa": false
  },
  "https://www.labanquepostale.fr": {
    "name": "La Banque Postale",
    "url": "https://www.labanquepostale.fr/",
    "twitter": "LaBanquePostale",
    "facebook": "labanquepostale",
    "img": "labanquepostale.png",
    "tfa": false,
    "lang": "fr"
  },
  "https://www.lendingclub.com": {
    "name": "LendingClub",
    "url": "https://www.lendingclub.com/",
    "twitter": "lendingclub",
    "facebook": "LendingClubTeam",
    "img": "lendingclub.png",
    "tfa": false
  },
  "https://www.lloydsbank.com": {
    "name": "Lloyds Bank",
    "url": "https://www.lloydsbank.com/",
    "twitter": "AskLloydsBank",
    "facebook": "lloydsbank",
    "img": "lloydsbank.png",
    "tfa": false
  },
  "https://www.lansforsakringar.se": {
    "name": "Länsförsäkringar",
    "url": "https://www.lansforsakringar.se/",
    "img": "lansforsakringar.png",
    "tfa": true,
    "software": true,
    "hardware": true,
    "doc": "http://www.lansforsakringar.se/privat/att-vara-kund/digitala-tjanster-telefonbank/internetbanken/"
  },
  "https://www.mtb.com": {
    "name": "MandT Bank",
    "url": "https://www.mtb.com/",
    "img": "mtbank.png",
    "tfa": false,
    "twitter": "MandT_Help",
    "facebook": "MandTBank"
  },
  "https://www.mbna.ca": {
    "name": "MBNA Canada",
    "url": "https://www.mbna.ca",
    "img": "mbnacanada.png",
    "tfa": false,
    "twitter": "mbna_canada",
    "facebook": "MBNACanada"
  },
  "https://www.meridiancu.ca": {
    "name": "Meridian Credit Union",
    "url": "https://www.meridiancu.ca",
    "img": "meridian.png",
    "twitter": "meridiancu",
    "facebook": "MeridianCreditUnion",
    "tfa": false
  },
  "https://n26.com": {
    "name": "N26",
    "url": "https://n26.com",
    "img": "n26.png",
    "twitter": "n26",
    "facebook": "N26",
    "tfa": false
  },
  "http://www.nationwide.co.uk": {
    "name": "Nationwide Building Society",
    "url": "http://www.nationwide.co.uk/",
    "img": "nationwide.png",
    "tfa": true,
    "hardware": true,
    "doc": "http://www.nationwide.co.uk/support/security-centre/internet-banking-security/card-reader-and-security-questions"
  },
  "https://www.natwest.com": {
    "name": "Natwest UK",
    "url": "https://www.natwest.com/personal.ashx",
    "img": "natwest.png",
    "tfa": true,
    "hardware": true,
    "doc": "http://www.natwest.com/personal/online-banking/g1/banking-safely-online/card-reader.ashx"
  },
  "https://www.navyfederal.org": {
    "name": "Navy Federal Credit Union",
    "url": "https://www.navyfederal.org/",
    "img": "navyfederal.png",
    "tfa": false,
    "twitter": "NavyFederal",
    "facebook": "NavyFederal"
  },
  "https://www.mynefcu.org": {
    "name": "NEFCU",
    "url": "https://www.mynefcu.org/",
    "img": "nefcu.png",
    "tfa": false,
    "twitter": "mynefcu",
    "facebook": "NEFCU",
    "email_address": "info@mynefcu.org"
  },
  "https://www.nordea.se": {
    "name": "Nordea Sverige",
    "url": "https://www.nordea.se/",
    "img": "nordea.png",
    "tfa": true,
    "hardware": true,
    "software": true,
    "doc": "https://www.nordea.se/privat/vardagstjanster/internet-mobil-telefon/bank-id.html"
  },
  "https://www.nordnet.fi": {
    "name": "Nordnet Finland",
    "url": "https://www.nordnet.fi/",
    "img": "nordnet.png",
    "tfa": false,
    "twitter": "nordnetFI",
    "lang": "fi"
  },
  "https://www.nordnet.se": {
    "name": "Nordnet Sverige",
    "url": "https://www.nordnet.se/",
    "img": "nordnet.png",
    "tfa": true,
    "software": true,
    "exceptions": {
      "text": "TFA only available for Swedish residents with BankID."
    }
  },
  "https://necu.org": {
    "name": "Northeast Credit Union",
    "url": "https://necu.org",
    "img": "necu.png",
    "tfa": false,
    "twitter": "NortheastCU",
    "facebook": "northeastcu"
  },
  "https://www.nubank.com.br": {
    "name": "Nubank",
    "url": "https://www.nubank.com.br",
    "img": "nubank.png",
    "tfa": false,
    "twitter": "nubankbrasil",
    "facebook": "nubankbrasil",
    "lang": "pt"
  },
  "https://www.optumbank.com": {
    "name": "Optum Bank",
    "url": "https://www.optumbank.com",
    "img": "optum.png",
    "tfa": false,
    "twitter": "myOptum",
    "facebook": "myOptum"
  },
  "https://www.therightbank.com": {
    "name": "Pacific Continental",
    "url": "https://www.therightbank.com/",
    "img": "pcb.png",
    "tfa": true,
    "sms": true,
    "phone": true,
    "doc": "https://www.therightbank.com/sites/www.therightbank.com/files/files/online-services-instructions.pdf"
  },
  "https://partnersfcu.org": {
    "name": "Partners Federal Credit Union",
    "url": "https://partnersfcu.org/",
    "img": "partners.png",
    "tfa": false
  },
  "https://www.patelco.org": {
    "name": "Patelco Credit Union",
    "url": "https://www.patelco.org/",
    "img": "patelco.png",
    "tfa": true,
    "sms": true,
    "email": true,
    "phone": true,
    "doc": "https://www.patelco.org/Privacy-Security/Protection"
  },
  "https://www.penfed.org": {
    "name": "PenFed",
    "url": "https://www.penfed.org/",
    "twitter": "PenFed",
    "facebook": "PenFed",
    "img": "penfed.png",
    "tfa": false
  },
  "https://www.pnc.com": {
    "name": "PNC Bank",
    "url": "https://www.pnc.com/",
    "img": "pncbank.png",
    "tfa": true,
    "sms": true,
    "doc": "https://www.pnc.com/en/customer-service/update-center/sign-on-changes.html"
  },
  "https://www.poba.hr": {
    "name": "Podravska banka",
    "url": "https://www.poba.hr/",
    "img": "podravska.png",
    "tfa": true,
    "hardware": true,
    "software": true,
    "doc": "http://www.poba.hr/get_file.php?d=pobaklik__upute_gradani.pdf&PHPSESSID=cafutfbcjozu"
  },
  "https://www.postbank.de": {
    "name": "Postbank",
    "url": "https://www.postbank.de/",
    "twitter": "postbank",
    "facebook": "postbank",
    "img": "postbank.png",
    "tfa": false,
    "lang": "de"
  },
  "http://www.rb.cz": {
    "name": "Raiffeisen Bank CZ",
    "url": "http://www.rb.cz/",
    "img": "raiffeisenbank_cz.png",
    "doc": "http://www.rb.cz/firemni-finance/podnikatele-a-male-firmy/prime-bankovnictvi/sluzby-pro-firemni-ucty/bezpecnost-internetoveho-bankovnictvi/",
    "tfa": true,
    "hardware": true
  },
  "http://www.rbcroyalbank.com": {
    "name": "RBC Royal Bank",
    "url": "http://www.rbcroyalbank.com",
    "twitter": "RBC_Canada",
    "facebook": "rbc",
    "img": "rbc.png",
    "tfa": false
  },
  "https://www.regions.com": {
    "name": "Regions Bank",
    "url": "https://www.regions.com",
    "twitter": "askRegions",
    "facebook": "RegionsBank",
    "img": "RegionsBank.png",
    "tfa": false
  },
  "https://www.sdccu.com": {
    "name": "San Diego County Credit Union",
    "url": "https://www.sdccu.com",
    "twitter": "sdccu",
    "facebook": "SDCCU",
    "img": "sdccu.png",
    "tfa": false
  },
  "https://www.sffirecu.org": {
    "name": "San Francisco Fire Credit Union",
    "url": "https://www.sffirecu.org",
    "twitter": "SFFireCU",
    "facebook": "sffirecu",
    "img": "sffirecu.png",
    "tfa": false,
    "status": "https://twitter.com/sffirecu/status/577532435228991488"
  },
  "https://www.sccfcu.org": {
    "name": "Santa Clara County Federal Credit Union",
    "url": "https://www.sccfcu.org/",
    "twitter": "SCCFCU",
    "facebook": "SCCFCU",
    "img": "sccfcu.png",
    "tfa": false
  },
  "https://www.santander.com.br": {
    "name": "Santander BR",
    "url": "https://www.santander.com.br/",
    "img": "santander.png",
    "tfa": false,
    "twitter": "santander_br",
    "facebook": "santanderbrasil",
    "email_address": "santander.email@santander.com.br",
    "lang": "pt"
  },
  "http://www.santander.co.uk": {
    "name": "Santander UK",
    "url": "http://www.santander.co.uk",
    "img": "santander.png",
    "tfa": true,
    "sms": true,
    "doc": "http://www.santander.co.uk/uk/help-support/security-centre"
  },
  "https://www.schoolsfirstfcu.org": {
    "name": "SchoolsFirst FCU",
    "url": "https://www.schoolsfirstfcu.org/",
    "twitter": "SchoolsFirstFCU",
    "facebook": "SchoolsFirstFCU",
    "img": "schoolsfirst.png",
    "tfa": false
  },
  "https://www.szkb.ch": {
    "name": "Schwyzer Kantonalbank",
    "url": "https://www.szkb.ch/",
    "img": "szkb.png",
    "tfa": true,
    "sms": true,
    "doc": "https://www.szkb.ch/pub/ueber-die-szkb/servicezentrum/e-services/sicherheit"
  },
  "http://www.scotiabank.com": {
    "name": "Scotiabank",
    "url": "http://www.scotiabank.com",
    "img": "scotiabank.png",
    "tfa": false,
    "twitter": "ScotiabankHelps",
    "facebook": "scotiabank"
  },
  "https://seb.se": {
    "name": "SEB",
    "url": "https://seb.se/",
    "img": "seb.png",
    "tfa": true,
    "software": true,
    "hardware": true,
    "doc": "https://seb.se/privat/digitala-tjanster"
  },
  "https://www.servicecu.org": {
    "name": "Service Credit Union",
    "url": "https://www.servicecu.org/",
    "img": "service_cu.png",
    "tfa": false,
    "facebook": "ServiceCreditUnion"
  },
  "https://www.simple.com": {
    "name": "Simple",
    "url": "https://www.simple.com/",
    "img": "simple.png",
    "tfa": true,
    "sms": true,
    "doc": "https://www.simple.com/help/articles/account-maintenance/security"
  },
  "http://www.sparda.de": {
    "name": "Sparda Banken",
    "url": "http://www.sparda.de/",
    "twitter": "spardaberlin",
    "facebook": "spardaberlin",
    "email_address": "info@sparda-verband.de",
    "img": "spardabank.png",
    "tfa": false,
    "lang": "de"
  },
  "https://www.sparkasse.de": {
    "name": "Sparkasse",
    "url": "https://www.sparkasse.de/",
    "twitter": "sparkasse",
    "facebook": "sparkasse",
    "email_address": "sparkasse@sparkassen-finanzportal.de",
    "img": "sparkasse.png",
    "tfa": false,
    "lang": "de"
  },
  "https://www.splitskabanka.hr": {
    "name": "Splitska banka",
    "url": "https://www.splitskabanka.hr/",
    "img": "splitska.png",
    "tfa": true,
    "hardware": true,
    "doc": "https://www.splitskabanka.hr/LinkClick.aspx?fileticket=uADVHHVmbUU%3d&tabid=4756&portalid=8&mid=8287"
  },
  "https://www.onlinesbi.com": {
    "name": "State Bank of India",
    "url": "https://www.onlinesbi.com/",
    "img": "sbi.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://www.onlinesbi.com/sbijava/mobile/sbsecure_otp_app_faq.html"
  },
  "https://www.statefarm.com": {
    "name": "State Farm",
    "url": "https://www.statefarm.com/",
    "img": "statefarm.png",
    "tfa": false,
    "twitter": "StateFarm",
    "facebook": "StateFarm"
  },
  "https://www.suntrust.com": {
    "name": "SunTrust",
    "url": "https://www.suntrust.com/",
    "twitter": "SunTrust",
    "facebook": "suntrust",
    "img": "suntrust.png",
    "tfa": false
  },
  "https://www.swedbank.se": {
    "name": "Swedbank",
    "url": "https://www.swedbank.se/",
    "img": "swedbank.png",
    "tfa": true,
    "hardware": true,
    "software": true,
    "doc": "https://hjalp.swedbank.se/logga-in/index.htm"
  },
  "https://www.tangerine.ca": {
    "name": "Tangerine",
    "url": "https://www.tangerine.ca/",
    "twitter": "tangerinebank",
    "facebook": "TangerineBank",
    "img": "tangerine.png",
    "tfa": false
  },
  "https://www.targobank.de": {
    "name": "TARGOBANK",
    "url": "https://www.targobank.de/",
    "img": "targobank.png",
    "tfa": false,
    "twitter": "TARGOBANK",
    "facebook": "targobank",
    "lang": "de"
  },
  "http://www.tbcbank.ge": {
    "name": "TBC Bank",
    "url": "http://www.tbcbank.ge",
    "img": "tbcbank.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "http://www.tbcbank.ge/web/en/web/guest/tbc-digipass"
  },
  "https://www.tdbank.com": {
    "name": "TD Bank",
    "url": "https://www.tdbank.com",
    "twitter": "TDBank_US",
    "facebook": "TDBank",
    "img": "tdbank.png",
    "tfa": false
  },
  "https://www.tdcanadatrust.com": {
    "name": "TD Canada Trust",
    "url": "https://www.tdcanadatrust.com",
    "twitter": "TD_Canada",
    "img": "tdbank.png",
    "tfa": false
  },
  "https://www.towerfcu.org": {
    "name": "Tower Federal Credit Union",
    "url": "https://www.towerfcu.org/",
    "img": "TowerFCU.png",
    "tfa": true,
    "sms": true,
    "phone": true,
    "doc": "https://server.iad.liveperson.net/hc/s-81758502/cmd/kbresource/kb-8660536393490959114/front_page!PAGETYPE?category=5352"
  },
  "https://www.triodos.de": {
    "name": "Triodos Bank Deutschland",
    "url": "https://www.triodos.de",
    "twitter": "triodosde",
    "facebook": "triodos.de",
    "img": "triodosbank.png",
    "tfa": false,
    "lang": "de"
  },
  "http://www.tsb.co.uk": {
    "name": "TSB Bank",
    "url": "http://www.tsb.co.uk",
    "twitter": "TSB",
    "facebook": "TSBbankUK",
    "img": "tsb.png",
    "tfa": false
  },
  "https://www.ubibanca.com": {
    "name": "UBI Banca",
    "url": "https://www.ubibanca.com/",
    "img": "ubibanca.png",
    "tfa": false,
    "facebook": "UBIBanca",
    "lang": "it"
  },
  "https://www.umpquabank.com": {
    "name": "Umpqua Bank",
    "url": "https://www.umpquabank.com/",
    "img": "umpqua.png",
    "tfa": true,
    "sms": true,
    "phone": true,
    "doc": "https://www.umpquabank.com/personal-banking/online-banking-and-billpay/security-faqs/"
  },
  "https://www.unifyfcu.com": {
    "name": "Unify Financial Credit Union",
    "url": "https://www.unifyfcu.com",
    "img": "UnifyFCU.png",
    "tfa": true,
    "email": true,
    "sms": true,
    "phone": true,
    "doc": "https://www.unifyfcu.com/multi-factor-authentication-keep-bad-guys-out"
  },
  "https://www.unionbank.com": {
    "name": "Union Bank",
    "url": "https://www.unionbank.com/",
    "twitter": "UnionBank",
    "facebook": "UnionBank",
    "img": "unionbank.png",
    "tfa": false
  },
  "https://www.usbank.com": {
    "name": "US Bank",
    "url": "https://www.usbank.com/",
    "twitter": "usbank",
    "facebook": "usbank",
    "img": "usbank.png",
    "tfa": false
  },
  "https://www.usaa.com": {
    "name": "USAA",
    "url": "https://www.usaa.com/",
    "img": "usaa.png",
    "tfa": true,
    "sms": true,
    "hardware": true,
    "software": true,
    "doc": "https://www.usaa.com/inet/pages/security_token_logon_options"
  },
  "https://www.uwcu.org": {
    "name": "UW Credit Union",
    "url": "https://www.uwcu.org/",
    "img": "uwcu.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "phone": true,
    "doc": "https://www.uwcu.org/OnlineBanking/OnlineSecurity/VerifyU.aspx"
  },
  "https://vystarcu.org": {
    "name": "VyStar Credit Union",
    "url": "https://vystarcu.org/",
    "twitter": "OfficialVyStar",
    "facebook": "VyStarCU",
    "img": "vystar.png",
    "tfa": false
  },
  "https://www.wellsfargo.com": {
    "name": "Wells Fargo",
    "url": "https://www.wellsfargo.com/",
    "img": "wellsfargo.png",
    "tfa": true,
    "sms": true,
    "phone": true,
    "hardware": true,
    "doc": "https://www.wellsfargo.com/privacy-security/advanced-access"
  },
  "https://www.wescom.org": {
    "name": "Wescom Credit Union",
    "url": "https://www.wescom.org/",
    "twitter": "Liz_Wescom",
    "facebook": "WescomCreditUnion",
    "img": "wescom.png",
    "tfa": false
  },
  "https://www.wscu.com": {
    "name": "Westminster Savings Credit Union (WSCU)",
    "url": "https://www.wscu.com/",
    "twitter": "wscu",
    "facebook": "westminstersavings",
    "img": "wscu.png",
    "tfa": false
  },
  "https://www.widiba.it": {
    "name": "Widiba",
    "url": "https://www.widiba.it",
    "img": "widiba.png",
    "tfa": false,
    "twitter": "widiba_tw",
    "facebook": "widiba.it",
    "lang": "it"
  },
  "https://www.zagbank.ca": {
    "name": "Zag Bank",
    "url": "https://www.zagbank.ca/",
    "twitter": "zagbank",
    "facebook": "zagbank",
    "img": "zagbank.png",
    "tfa": false
  },
  "https://www.zaba.hr": {
    "name": "Zagrebačka banka",
    "url": "https://www.zaba.hr/",
    "img": "zagrebacka.png",
    "tfa": true,
    "hardware": true,
    "software": true,
    "doc": "https://www.zaba.hr/home/token#pan3"
  },
  "https://www.zkb.ch": {
    "name": "Zurich Cantonal Bank (ZKB)",
    "url": "https://www.zkb.ch/",
    "img": "zkb.png",
    "tfa": true,
    "sms": true,
    "email": true,
    "phone": true,
    "software": true,
    "hardware": true,
    "doc": "https://www.zkb.ch/de/pr/pk/efinance/ebanking/login-verfahren.html"
  },
  "https://aws.amazon.com": {
    "name": "Amazon AWS WorkSpaces",
    "url": "https://aws.amazon.com/workspaces/",
    "doc": "https://aws.amazon.com/blogs/aws/multi-factor-auth-for-workspaces/",
    "tfa": true,
    "hardware": true,
    "software": true,
    "img": "awsworkspaces.png"
  },
  "https://www.ctl.io": {
    "name": "appFog",
    "url": "https://www.ctl.io/appfog/",
    "twitter": "appfog",
    "img": "appfog.png",
    "tfa": false
  },
  "https://www.brightbox.com": {
    "name": "Brightbox",
    "url": "https://www.brightbox.com/",
    "twitter": "brightbox",
    "facebook": "brightbox",
    "email_address": "support@brightbox.com",
    "img": "brightbox.png",
    "tfa": false
  },
  "https://www.cloud66.com": {
    "name": "Cloud 66",
    "url": "https://www.cloud66.com",
    "img": "cloud66.png",
    "tfa": true,
    "software": true,
    "doc": "http://blog.cloud66.com/two-factor-authentication-for-your-accounts/"
  },
  "https://cloud.ca": {
    "name": "cloud.ca",
    "url": "https://cloud.ca",
    "img": "cloudca.png",
    "tfa": true,
    "software": true,
    "doc": "https://cloud.ca/two-factor-authentication-is-now-available-on-cloud-ca/"
  },
  "https://www.datapipe.com": {
    "name": "Datapipe",
    "url": "https://www.datapipe.com/",
    "img": "datapipe.png",
    "tfa": true,
    "software": true,
    "doc": "https://www.datapipe.com/security_compliance/managed_security/two_factor_authentication/"
  },
  "https://www.digitalocean.com": {
    "name": "DigitalOcean",
    "url": "https://www.digitalocean.com/",
    "img": "digitalocean.png",
    "tfa": true,
    "software": true,
    "doc": "https://www.digitalocean.com/company/blog/introducing-two-factor-authentication/"
  },
  "https://www.engineyard.com": {
    "name": "EngineYard",
    "url": "https://www.engineyard.com",
    "img": "engineyard.png",
    "tfa": true,
    "software": true,
    "doc": "https://blog.engineyard.com/2015/engine-yards-two-factor-authentication"
  },
  "https://www.fortrabbit.com": {
    "name": "fortrabbit",
    "url": "https://www.fortrabbit.com/",
    "img": "fortrabbit.png",
    "tfa": true,
    "software": true,
    "doc": "https://help.fortrabbit.com/security#toc-two-factor-authentication"
  },
  "https://cloud.google.com": {
    "name": "Google Cloud Platform",
    "url": "https://cloud.google.com",
    "img": "googlecloud.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "phone": true,
    "hardware": true,
    "doc": "https://www.google.com/intl/en-US/landing/2step/features.html"
  },
  "https://www.heroku.com": {
    "name": "Heroku",
    "url": "https://www.heroku.com/",
    "img": "heroku.png",
    "tfa": true,
    "software": true,
    "doc": "https://devcenter.heroku.com/articles/two-factor-authentication"
  },
  "https://hostiso.com": {
    "name": "Hostiso",
    "url": "https://hostiso.com/",
    "img": "hostiso.png",
    "tfa": true,
    "software": true,
    "exceptions": {
      "text": "While both the main client area and the shared hosting panel support 2FA, each system is separate and requires its own setup."
    }
  },
  "https://www.hyper.sh": {
    "name": "Hyper.sh",
    "url": "https://www.hyper.sh",
    "img": "hypersh.png",
    "tfa": false,
    "twitter": "hyper_sh",
    "email_address": "contact@hyper.sh"
  },
  "https://bluemix.net": {
    "name": "IBM BlueMix",
    "url": "https://bluemix.net",
    "img": "ibmbluemix.png",
    "tfa": false,
    "twitter": "IBMcloud",
    "facebook": "IBMCloud"
  },
  "https://www.joyent.com": {
    "name": "Joyent",
    "url": "https://www.joyent.com/",
    "img": "joyent.png",
    "tfa": true,
    "software": true,
    "doc": "https://docs.joyent.com/public-cloud/getting-started/2fa"
  },
  "https://www.leaseweb.com": {
    "name": "LeaseWeb",
    "url": "https://www.leaseweb.com/",
    "img": "leaseweb.png",
    "tfa": true,
    "sms": true,
    "doc": "https://kb.leaseweb.com/display/KB/Two+factor+authentication%3A+Cyber+Security"
  },
  "https://www.linode.com": {
    "name": "Linode",
    "url": "https://www.linode.com/",
    "img": "linode.png",
    "tfa": true,
    "software": true,
    "doc": "https://www.linode.com/docs/security/linode-manager-security-controls"
  },
  "https://azure.microsoft.com": {
    "name": "Microsoft Azure",
    "url": "https://azure.microsoft.com/",
    "img": "microsoftazure.png",
    "tfa": true,
    "sms": true,
    "phone": true,
    "software": true,
    "doc": "https://azure.microsoft.com/en-us/documentation/articles/multi-factor-authentication/"
  },
  "https://mlab.com": {
    "name": "mLab",
    "url": "https://mlab.com/",
    "img": "mlab.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "http://docs.mlab.com/security/#two-factor-authentication"
  },
  "https://www.openshift.com": {
    "name": "OpenShift",
    "url": "https://www.openshift.com/",
    "twitter": "openshift",
    "facebook": "openshift",
    "img": "openshift.png",
    "tfa": false
  },
  "https://www.packet.net": {
    "name": "Packet",
    "url": "https://www.packet.net/",
    "img": "packet.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://help.packet.net/faq/onboarding/portal"
  },
  "https://www.profitbricks.de": {
    "name": "ProfitBricks",
    "url": "https://www.profitbricks.de",
    "img": "profitbricks.png",
    "tfa": true,
    "software": true,
    "doc": "https://www.profitbricks.com/help/2-Factor_Authentication"
  },
  "https://www.rackspace.com": {
    "name": "Rackspace",
    "url": "https://www.rackspace.com/",
    "img": "rackspace.png",
    "tfa": true,
    "sms": true,
    "doc": "http://www.rackspace.com/knowledge_center/article/myrackspace-two-factor-authentication"
  },
  "https://www.rightscale.com": {
    "name": "RightScale",
    "url": "https://www.rightscale.com/",
    "img": "rightscale.png",
    "tfa": false,
    "twitter": "RightScale",
    "facebook": "RightScale"
  },
  "https://www.scaleway.com": {
    "name": "Scaleway",
    "url": "https://www.scaleway.com",
    "img": "scaleway.png",
    "tfa": true,
    "software": true,
    "doc": "https://blog.online.net/2017/06/13/introducing-two-factor-authentication-on-scaleway/"
  },
  "https://www.scalr.com": {
    "name": "Scalr",
    "url": "https://www.scalr.com",
    "img": "scalr.png",
    "tfa": true,
    "software": true,
    "doc": "https://scalr-wiki.atlassian.net/wiki/display/docs/Two-Factor+Authentication"
  },
  "https://www.singlehop.com": {
    "name": "SingleHop",
    "url": "https://www.singlehop.com",
    "img": "singlehop.png",
    "tfa": true,
    "software": true,
    "doc": "http://library.singlehop.com/assets_project_development/Two_Factor_Instructions.pdf"
  },
  "https://www.tilaa.com": {
    "name": "Tilaa",
    "url": "https://www.tilaa.com",
    "img": "tilaa.png",
    "tfa": true,
    "software": true,
    "hardware": true,
    "exceptions": {
      "text": "SMS-capable phone required."
    },
    "doc": "http://blog.tilaa.com/post/128110588046/two-factor-authentication-and-session-management"
  },
  "https://userify.com": {
    "name": "Userify",
    "url": "https://userify.com",
    "img": "userify.png",
    "tfa": true,
    "software": true,
    "hardware": true,
    "doc": "https://userify.com/docs/multifactor-authentication/"
  },
  "https://www.vultr.com": {
    "name": "Vultr",
    "url": "https://www.vultr.com/",
    "img": "vultr.png",
    "tfa": true,
    "software": true,
    "hardware": true,
    "doc": "https://www.vultr.com/faq/#authy"
  },
  "https://actionnetwork.org": {
    "name": "Action Network",
    "url": "https://actionnetwork.org/",
    "img": "actionnetwork.png",
    "tfa": true,
    "software": true,
    "doc": "https://help.actionnetwork.org/hc/en-us/articles/217206826"
  },
  "https://basecamp.com": {
    "name": "Basecamp",
    "url": "https://basecamp.com/",
    "img": "basecamp.png",
    "tfa": true,
    "sms": true,
    "doc": "https://basecamp.com/help/guides/you/phone-verification"
  },
  "https://campfirenow.com": {
    "name": "Campfire",
    "url": "https://campfirenow.com/",
    "img": "campfire.png",
    "tfa": true,
    "sms": true,
    "doc": "https://help.37signals.com/sign-in/questions/460-how-do-i-set-up-and-use-phone-verification-for-logging-in"
  },
  "https://community.carbonblack.com": {
    "name": "Carbon Black Community Exchange",
    "url": "https://community.carbonblack.com/",
    "img": "carbonblack.png",
    "tfa": false,
    "twitter": "CarbonBlack_Inc",
    "facebook": "carbonblackinc"
  },
  "https://customer.io": {
    "name": "Customer.io",
    "url": "https://customer.io",
    "img": "customerio.png",
    "tfa": true,
    "software": true,
    "doc": "https://customer.io/docs/two-factor-auth.html"
  },
  "https://directmailmac.com": {
    "name": "Direct Mail",
    "url": "https://directmailmac.com",
    "img": "directmail.png",
    "tfa": true,
    "software": true,
    "doc": "https://directmailmac.com/support/article/507"
  },
  "https://discordapp.com": {
    "name": "Discord",
    "url": "https://discordapp.com/",
    "img": "discord.png",
    "tfa": true,
    "sms": true,
    "email": true,
    "software": true,
    "doc": "https://support.discordapp.com/hc/en-us/articles/219576828"
  },
  "https://disqus.com": {
    "name": "Disqus",
    "url": "https://disqus.com",
    "twitter": "disqus",
    "facebook": "disqus",
    "img": "disqus.png",
    "tfa": false
  },
  "http://www.doodle.com": {
    "name": "Doodle",
    "url": "http://www.doodle.com",
    "img": "doodle.png",
    "twitter": "doodletweet",
    "tfa": false
  },
  "https://fleep.io": {
    "name": "Fleep",
    "url": "https://fleep.io",
    "twitter": "fleepio",
    "facebook": "fleepio",
    "img": "fleep.png",
    "tfa": false
  },
  "https://www.flowdock.com": {
    "name": "Flowdock",
    "url": "https://www.flowdock.com",
    "twitter": "flowdock",
    "facebook": "flowdock",
    "img": "flowdock.png",
    "tfa": false
  },
  "https://frontapp.com": {
    "name": "Front App",
    "url": "https://frontapp.com",
    "img": "front_app.png",
    "tfa": true,
    "software": true,
    "doc": "https://community.frontapp.com/t/q56jf8/activating-two-factor-authentication-2fa"
  },
  "https://chatgrape.com": {
    "name": "Grape",
    "url": "https://chatgrape.com/",
    "img": "grape.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://chatgrape.com/doc/deployment/2fa.html"
  },
  "https://www.hipchat.com": {
    "name": "HipChat",
    "url": "https://www.hipchat.com",
    "twitter": "HipChat",
    "facebook": "HipChat",
    "img": "hipchat.png",
    "tfa": false
  },
  "https://www.irccloud.com": {
    "name": "IRCCloud",
    "url": "https://www.irccloud.com",
    "img": "irccloud.png",
    "twitter": "IRCCloud",
    "facebook": "irccloud",
    "tfa": false
  },
  "https://www.kik.com": {
    "name": "Kik",
    "url": "https://www.kik.com/",
    "img": "kik.png",
    "tfa": false,
    "twitter": "Kik",
    "facebook": "kikplaynice",
    "email_address": "support@kik.com"
  },
  "https://line.me": {
    "name": "LINE",
    "url": "https://line.me/en/",
    "img": "line.png",
    "tfa": false,
    "facebook": "line.worldwide"
  },
  "https://mailchimp.com": {
    "name": "MailChimp",
    "url": "https://mailchimp.com/",
    "img": "mailchimp.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "http://kb.mailchimp.com/accounts/login/set-up-two-factor-authentication-with-sms"
  },
  "https://www.mailgun.com": {
    "name": "Mailgun",
    "url": "https://www.mailgun.com",
    "img": "mailgun.png",
    "tfa": true,
    "software": true
  },
  "https://maxemail.emailcenteruk.com": {
    "name": "Maxemail",
    "url": "https://maxemail.emailcenteruk.com/",
    "img": "maxemail.png",
    "tfa": true,
    "hardware": true,
    "doc": "https://www.emailcenteruk.com/maxemail/platform-security-collaboration/"
  },
  "https://peerio.com": {
    "name": "Peerio",
    "url": "https://peerio.com",
    "img": "peerio.png",
    "tfa": true,
    "software": true,
    "doc": "https://peerio.zendesk.com/hc/en-us/articles/202933829-How-do-I-setup-two-factor-authentication-"
  },
  "https://ryver.com": {
    "name": "Ryver",
    "url": "https://ryver.com/",
    "img": "ryver.png",
    "twitter": "ryverapp",
    "facebook": "RyverApp",
    "tfa": false
  },
  "http://www.salesforce.com": {
    "name": "Salesforce",
    "url": "http://www.salesforce.com",
    "img": "salesforce.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "email": true,
    "doc": "https://help.salesforce.com/HTViewHelpDoc?id=security_require_two_factor_authentication.htm"
  },
  "https://sendgrid.com": {
    "name": "SendGrid",
    "url": "https://sendgrid.com/",
    "img": "sendgrid.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://sendgrid.com/docs/User_Guide/Settings/two_factor_authentication.html"
  },
  "https://app.sendloop.com": {
    "name": "Sendloop",
    "url": "https://app.sendloop.com",
    "img": "sendloop.png",
    "tfa": true,
    "software": true,
    "doc": "https://help.sendloop.com/docs/securing-your-account"
  },
  "https://www.skype.com": {
    "name": "Skype (via Microsoft Account)",
    "url": "https://www.skype.com",
    "img": "skype.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "http://windows.microsoft.com/en-au/windows/two-step-verification-faq",
    "exceptions": {
      "text": "Two-factor authentication is available only when logging in using a Microsoft account. If you have setup your account using a Skype password, 2FA through Microsoft is essentially useless."
    }
  },
  "https://slack.com": {
    "name": "Slack",
    "url": "https://slack.com/",
    "img": "slack.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://slack.zendesk.com/hc/en-us/articles/204509068-Enabling-two-factor-authentication"
  },
  "https://socketlabs.com": {
    "name": "SocketLabs",
    "url": "https://socketlabs.com/",
    "img": "socketlabs.png",
    "sms": true,
    "tfa": true,
    "software": true,
    "doc": "https://support.socketlabs.com/kb/145"
  },
  "https://sparkpost.com": {
    "name": "SparkPost",
    "url": "https://sparkpost.com/",
    "img": "sparkpost.png",
    "tfa": true,
    "software": true,
    "doc": "https://support.sparkpost.com/customer/portal/articles/1948449"
  },
  "https://www.stackfield.com": {
    "name": "Stackfield",
    "url": "https://www.stackfield.com/",
    "img": "stackfield.png",
    "tfa": true,
    "software": true,
    "doc": "http://en.stackfield.help/article/92-activating-deactivating-the-two-factor-authentication"
  },
  "https://www.teamspeak.com": {
    "name": "TeamSpeak",
    "url": "https://www.teamspeak.com/",
    "twitter": "teamspeak",
    "facebook": "teamspeak",
    "img": "teamspeak.png",
    "tfa": false
  },
  "https://telegram.org": {
    "name": "Telegram",
    "url": "https://telegram.org/",
    "img": "telegram.png",
    "tfa": true,
    "sms": true,
    "phone": true,
    "doc": "https://telegram.org/blog/sessions-and-2-step-verification"
  },
  "https://www1.toutapp.com": {
    "name": "ToutApp",
    "url": "https://www1.toutapp.com/",
    "twitter": "toutapp",
    "facebook": "toutapp",
    "img": "toutapp.png",
    "tfa": false
  },
  "https://www.viber.com": {
    "name": "Viber",
    "url": "https://www.viber.com",
    "img": "viber.png",
    "tfa": false,
    "twitter": "ViberHelp",
    "facebook": "viber",
    "email_address": "support@viber.com"
  },
  "https://www.whatsapp.com": {
    "name": "WhatsApp",
    "url": "https://www.whatsapp.com/",
    "img": "whatsapp.png",
    "tfa": true,
    "sms": true,
    "phone": true,
    "doc": "https://www.whatsapp.com/faq/en/general/26000021"
  },
  "https://www.woltlab.com": {
    "name": "WoltLab",
    "url": "https://www.woltlab.com/",
    "twitter": "woltlab",
    "facebook": "WoltLab",
    "email_address": "woltlab@woltlab.com",
    "img": "woltlab.png",
    "tfa": false
  },
  "https://www.yammer.com": {
    "name": "Yammer",
    "url": "https://www.yammer.com",
    "twitter": "yammer",
    "facebook": "Yammer",
    "img": "yammer.png",
    "tfa": false
  },
  "https://anxpro.com": {
    "name": "ANXPRO Bitcoin Exchange",
    "url": "https://anxpro.com/",
    "img": "anxpro.png",
    "tfa": true,
    "software": true,
    "doc": "https://anxpro.com/pages/security"
  },
  "https://bitbay.net": {
    "name": "BitBay",
    "url": "https://bitbay.net/",
    "img": "bitbay.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://www.youtube.com/watch?v=KFvoNHgl9Pw"
  },
  "https://bitcoin.de": {
    "name": "Bitcoin.de",
    "url": "https://bitcoin.de",
    "img": "bitcoinde.png",
    "tfa": true,
    "software": true,
    "hardware": true,
    "doc": "https://www.bitcoin.de/de/faq/was-ist-die-2-step-verification-2-faktor-authentifizierung/46.html"
  },
  "https://bitcoinsnorway.com": {
    "name": "Bitcoins Norway",
    "url": "https://bitcoinsnorway.com",
    "img": "bitcoinsnorway.png",
    "tfa": true,
    "software": true
  },
  "https://www.bitfinex.com": {
    "name": "Bitfinex",
    "url": "https://www.bitfinex.com",
    "img": "bitfinex.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "hardware": true,
    "doc": "https://support.bitfinex.com/hc/en-us/sections/203192029-Security"
  },
  "https://www.bitgo.com": {
    "name": "BitGo",
    "url": "https://www.bitgo.com",
    "img": "bitgo.png",
    "tfa": true,
    "software": true,
    "hardware": true,
    "doc": "https://bitgo.zendesk.com/hc/en-us/sections/201009049-Two-Factor-Authentication-Help-Page"
  },
  "https://bitlish.com": {
    "name": "Bitlish",
    "url": "https://bitlish.com",
    "img": "bitlish.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://bitlish.com/how#mfa"
  },
  "https://bitpay.com": {
    "name": "Bitpay",
    "url": "https://bitpay.com",
    "img": "bitpay.png",
    "tfa": true,
    "software": true,
    "doc": "https://bitpay.com/two-factor"
  },
  "https://bitstamp.net": {
    "name": "Bitstamp",
    "url": "https://bitstamp.net",
    "img": "bitstamp.png",
    "tfa": true,
    "software": true,
    "doc": "https://www.bitstamp.net/s/documents/bitstamp_2_factor_authentication_guide.pdf"
  },
  "https://bittrex.com": {
    "name": "Bittrex",
    "url": "https://bittrex.com",
    "img": "bittrex.png",
    "tfa": true,
    "software": true,
    "doc": "https://support.bittrex.com/hc/en-us/articles/115000198612-How-do-I-troubleshoot-backup-remove-disable-enable-Two-Factor-Authentication-2FA-"
  },
  "https://blockchain.info": {
    "name": "Blockchain",
    "url": "https://blockchain.info/",
    "img": "blockchain.png",
    "tfa": true,
    "sms": true,
    "email": true,
    "software": true,
    "hardware": true,
    "doc": "https://support.blockchain.com/hc/en-us/articles/211164103-Enable-2-Step-Verification-2FA-"
  },
  "https://btcjam.com": {
    "name": "BTCJam",
    "url": "https://btcjam.com/",
    "img": "btcjam.png",
    "tfa": true,
    "software": true,
    "doc": "http://help.btcjam.com/customer/portal/articles/1987686"
  },
  "https://campbx.com": {
    "name": "CampBX",
    "url": "https://campbx.com/",
    "img": "campbx.png",
    "tfa": true,
    "software": true,
    "doc": "https://campbx.com/faq.php#security-compliance"
  },
  "https://cex.io": {
    "name": "CEX.IO",
    "url": "https://cex.io/",
    "img": "cex.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://cex.io/guide#4"
  },
  "https://circle.com": {
    "name": "Circle",
    "url": "https://circle.com",
    "img": "circle.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://support.circle.com/hc/en-us/articles/213560483--What-is-two-factor-authentication-2FA-"
  },
  "https://coincafe.com": {
    "name": "Coin Cafe",
    "url": "https://coincafe.com",
    "img": "coincafe.png",
    "tfa": true,
    "software": true,
    "email": true,
    "doc": "https://blog.coincafe.com/2016/01/08/2fa/"
  },
  "https://coinapult.com": {
    "name": "Coinapult",
    "url": "https://coinapult.com",
    "img": "coinapult.png",
    "tfa": true,
    "software": true,
    "doc": "https://coinapult.com/faq"
  },
  "https://www.coinbase.com": {
    "name": "Coinbase",
    "url": "https://www.coinbase.com/",
    "img": "coinbase.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "phone": true,
    "doc": "https://support.coinbase.com/customer/en/portal/articles/1658338-how-do-i-set-up-2-factor-authentication-with-authy-"
  },
  "https://www.coinfloor.co.uk": {
    "name": "Coinfloor",
    "url": "https://www.coinfloor.co.uk/",
    "img": "coinfloor.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "hardware": true,
    "doc": "https://www.coinfloor.co.uk/security"
  },
  "https://coingate.com": {
    "name": "CoinGate",
    "url": "https://coingate.com",
    "img": "coingate.png",
    "tfa": true,
    "software": true,
    "doc": "https://support.coingate.com/en/65/how-do-i-set-up-2-factor-authentication-2fa-on-my-account"
  },
  "https://coinify.com": {
    "name": "Coinify (Merchants)",
    "url": "https://coinify.com/merchants",
    "img": "coinify.png",
    "tfa": true,
    "software": true,
    "hardware": true,
    "exceptions": {
      "text": "While Coinify has aquired BIPS to allow for trading, only merchant accounts support TFA at this time. Trading is done through a separate account. Hardware support is limited to a print-out character matrix."
    }
  },
  "https://coinjar.com": {
    "name": "Coinjar",
    "url": "https://coinjar.com",
    "img": "coinjar.png",
    "tfa": true,
    "software": true,
    "sms": true,
    "doc": "https://support.coinjar.com/kb/using-coinjar/keeping-your-coinjar-secure-with-multi-factor-authentication"
  },
  "https://coins.ph": {
    "name": "Coins.ph",
    "url": "https://coins.ph/",
    "img": "coinsph.png",
    "tfa": true,
    "software": true,
    "doc": "https://support.coins.ph/hc/en-us/articles/202604924-What-is-two-factor-authentication-"
  },
  "https://gatehub.net": {
    "name": "Gatehub",
    "url": "https://gatehub.net",
    "img": "gatehub.png",
    "tfa": true,
    "sms": true,
    "software": true
  },
  "https://www.kraken.com": {
    "name": "Kraken",
    "url": "https://www.kraken.com/",
    "img": "kraken.png",
    "doc": "https://support.kraken.com/hc/en-us/articles/203395513-How-do-I-set-up-two-factor-authentication-",
    "tfa": true,
    "software": true,
    "hardware": true
  },
  "https://www.litebit.eu": {
    "name": "LiteBit",
    "url": "https://www.litebit.eu/",
    "img": "litebit.png",
    "tfa": true,
    "software": true,
    "doc": "https://support.litebit.eu/hc/en-us/articles/115000953504-What-is-Two-Factor-Authentication-2FA-How-to-"
  },
  "https://localbitcoins.com": {
    "name": "LocalBitcoins",
    "url": "https://localbitcoins.com/",
    "img": "localbitcoins.png",
    "tfa": true,
    "software": true,
    "doc": "https://localbitcoins.blogspot.com.au/2013/05/using-two-factor-authentication-on.html"
  },
  "https://www.luno.com": {
    "name": "Luno",
    "url": "https://www.luno.com/",
    "img": "luno.png",
    "tfa": true,
    "software": true,
    "doc": "https://www.luno.com/help/en/articles/1000203420-how-to-enable-twofactor-authentication"
  },
  "https://poloniex.com": {
    "name": "Poloniex",
    "url": "https://poloniex.com/",
    "img": "poloniex.png",
    "tfa": true,
    "software": true,
    "doc": "https://poloniex.freshdesk.com/support/solutions/articles/1000225338-how-do-i-to-setup-two-factor-authentication"
  },
  "https://satoshitango.com": {
    "name": "SatoshiTango",
    "url": "https://satoshitango.com/",
    "img": "satoshitango.png",
    "tfa": true,
    "software": true,
    "doc": "https://github.com/2factorauth/twofactorauth/pull/2321#issuecomment-273971890"
  },
  "https://uphold.com": {
    "name": "Uphold",
    "url": "https://uphold.com/",
    "img": "uphold.png",
    "tfa": true,
    "sms": true,
    "phone": true,
    "software": true,
    "doc": "https://support.uphold.com/hc/en-us/articles/206119683-How-does-phone-number-verification-work-"
  },
  "https://xapo.com": {
    "name": "Xapo",
    "url": "https://xapo.com",
    "img": "xapo.png",
    "tfa": true,
    "sms": true,
    "phone": true,
    "software": true,
    "doc": "https://support.xapo.com/how-do-i-enable-second-factor-authentication/view=faq"
  },
  "https://www.aha.io": {
    "name": "Aha!",
    "url": "https://www.aha.io/",
    "img": "aha.png",
    "tfa": true,
    "sms": true,
    "phone": true,
    "hardware": true,
    "software": true,
    "doc": "http://support.aha.io/hc/en-us/articles/202000957-Add-two-factor-authentication-2FA-"
  },
  "https://airbrake.io": {
    "name": "Airbrake",
    "url": "https://airbrake.io",
    "twitter": "airbrake",
    "facebook": "airbrake.io",
    "img": "airbrake.png",
    "tfa": false
  },
  "https://algolia.com": {
    "name": "Algolia",
    "url": "https://algolia.com",
    "img": "algolia.png",
    "tfa": true,
    "software": true,
    "doc": "https://www.algolia.com/doc/security/best-security-practices#two-factor-authentication"
  },
  "https://www.appveyor.com": {
    "name": "AppVeyor",
    "url": "https://www.appveyor.com",
    "img": "appveyor.png",
    "tfa": false,
    "twitter": "appveyor",
    "email_address": "team@appveyor.com"
  },
  "https://atechmedia.com": {
    "name": "aTech Media",
    "url": "https://atechmedia.com",
    "img": "atechmedia.png",
    "tfa": true,
    "software": true,
    "hardware": true,
    "doc": "https://atechmedia.com/blog/general/launches/two-factor-authentication"
  },
  "https://balsamiq.com": {
    "name": "Balsamiq",
    "url": "https://balsamiq.com",
    "twitter": "balsamiq",
    "facebook": "balsamiq",
    "img": "balsamiq.png",
    "tfa": false
  },
  "https://bintray.com": {
    "name": "Bintray",
    "url": "https://bintray.com/",
    "img": "bintray.png",
    "tfa": false,
    "twitter": "bintray"
  },
  "https://bitbucket.org": {
    "name": "Bitbucket",
    "url": "https://bitbucket.org",
    "img": "bitbucket.png",
    "tfa": true,
    "software": true,
    "hardware": true,
    "doc": "https://confluence.atlassian.com/x/425QLg"
  },
  "https://bugsnag.com": {
    "name": "Bugsnag",
    "url": "https://bugsnag.com",
    "img": "bugsnag.png",
    "tfa": true,
    "software": true,
    "doc": "https://docs.bugsnag.com/product/account-and-security/#security"
  },
  "https://bugzilla.mozilla.org": {
    "name": "Bugzilla@Mozilla",
    "url": "https://bugzilla.mozilla.org",
    "img": "bugzilla.png",
    "tfa": true,
    "software": true
  },
  "https://builtwith.com": {
    "name": "BuiltWith",
    "url": "https://builtwith.com",
    "img": "builtwith.png",
    "tfa": true,
    "software": true,
    "doc": "https://kb.builtwith.com/account-management/how-to-enable-2fa-on-builtwith/"
  },
  "http://www.cedexis.com": {
    "name": "Cedexis",
    "url": "http://www.cedexis.com/",
    "img": "cedexis.png",
    "tfa": false,
    "twitter": "Cedexis",
    "facebook": "Cedexis"
  },
  "https://c9.io": {
    "name": "Cloud9",
    "url": "https://c9.io",
    "twitter": "Cloud9IDE",
    "img": "cloud9.png",
    "tfa": false,
    "exceptions": {
      "text": "TFA available by signing up using GitHub"
    }
  },
  "https://www.cmtelecom.com": {
    "name": "CM Telecom",
    "url": "https://www.cmtelecom.com/",
    "img": "cmtelecom.png",
    "tfa": true,
    "sms": true,
    "phone": true,
    "software": true,
    "doc": "https://help.onlinesmsgateway.com/en/accounts-and-payments/how-do-i-enable-two-factor-authentication"
  },
  "https://codeclimate.com": {
    "name": "Code Climate",
    "url": "https://codeclimate.com",
    "img": "codeclimate.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://docs.codeclimate.com/docs/enabling-two-factor-authentication"
  },
  "https://codeanywhere.com": {
    "name": "Codeanywhere",
    "url": "https://codeanywhere.com",
    "img": "codeanywhere.png",
    "tfa": true,
    "sms": true,
    "doc": "https://blog.codeanywhere.com/codeanywhere-now-offers-two-factor-authentication/",
    "exceptions": {
      "text": "Only available on paid accounts at $7/10 per month (annual/monthly) or more."
    }
  },
  "https://codeship.com": {
    "name": "Codeship",
    "url": "https://codeship.com/",
    "twitter": "codeship",
    "facebook": "codeship",
    "img": "codeship.png",
    "tfa": false
  },
  "https://www.compose.io": {
    "name": "Compose.io",
    "url": "https://www.compose.io/",
    "img": "composeio.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://docs.compose.io/security/compose-two-factor-authentication.html"
  },
  "https://context.io": {
    "name": "Context.IO",
    "url": "https://context.io",
    "img": "contextio.png",
    "tfa": true,
    "software": true,
    "doc": "https://context.io/security-faq"
  },
  "http://deploybot.com": {
    "name": "Deploybot",
    "url": "http://deploybot.com/",
    "twitter": "deploybothq",
    "img": "deploybot.png",
    "tfa": false
  },
  "https://www.docker.com": {
    "name": "Docker",
    "url": "https://www.docker.com/",
    "twitter": "docker",
    "facebook": "docker.run",
    "img": "docker.png",
    "tfa": false
  },
  "https://www.dominodatalab.com": {
    "name": "Domino Data Lab",
    "url": "https://www.dominodatalab.com/",
    "img": "domino.png",
    "tfa": true,
    "software": true,
    "doc": "https://support.dominodatalab.com/hc/en-us/articles/115000998406-Two-Factor-Authentication"
  },
  "https://www.esri.com": {
    "name": "Esri",
    "url": "https://www.esri.com",
    "img": "esri.png",
    "tfa": true,
    "software": true,
    "doc": "https://doc.arcgis.com/en/arcgis-online/reference/multifactor.htm"
  },
  "https://www.fogcreek.com": {
    "name": "FogBugz & Kiln",
    "url": "https://www.fogcreek.com/fogbugz",
    "img": "fogbugz.png",
    "tfa": true,
    "software": true,
    "doc": "http://help.fogcreek.com/10892/two-factor-authentication"
  },
  "https://github.com": {
    "name": "GitHub",
    "url": "https://github.com",
    "img": "github.png",
    "tfa": true,
    "sms": true,
    "hardware": true,
    "software": true,
    "doc": "https://help.github.com/articles/about-two-factor-authentication"
  },
  "https://gitlab.com": {
    "name": "GitLab",
    "url": "https://gitlab.com",
    "img": "gitlab.png",
    "tfa": true,
    "hardware": true,
    "software": true,
    "doc": "https://docs.gitlab.com/ee/security/two_factor_authentication.html"
  },
  "https://atlas.hashicorp.com": {
    "name": "Hashicorp Atlas",
    "url": "https://atlas.hashicorp.com/",
    "img": "hashicorp-atlas.png",
    "tfa": true,
    "software": true,
    "sms": true,
    "doc": "https://atlas.hashicorp.com/help/user-accounts/authentication#two-factor-authentication"
  },
  "https://www.infobip.com": {
    "name": "Infobip",
    "url": "https://www.infobip.com/",
    "img": "infobip.png",
    "tfa": true,
    "sms": true,
    "doc": "https://www.infobip.com/messaging/enterprise/2_factor_authentication/"
  },
  "https://www.itglue.com": {
    "name": "IT Glue",
    "url": "https://www.itglue.com/",
    "img": "itglue.png",
    "tfa": true,
    "software": true,
    "doc": "https://kb.itglue.com/hc/en-us/articles/213293197-Using-multi-factor-authentication-MFA-"
  },
  "https://jetbrains.com": {
    "name": "JetBrains",
    "url": "https://jetbrains.com",
    "img": "jetbrains.png",
    "tfa": false,
    "twitter": "jetbrains",
    "facebook": "JetBrains"
  },
  "https://koding.com": {
    "name": "Koding",
    "url": "https://koding.com",
    "img": "koding.png",
    "tfa": true,
    "software": true,
    "doc": "https://www.koding.com/blog/2015/06/two-factor-authentication/"
  },
  "https://launchpad.net": {
    "name": "Launchpad",
    "url": "https://launchpad.net",
    "img": "launchpad.png",
    "tfa": true,
    "hardware": true,
    "software": true,
    "doc": "https://help.ubuntu.com/community/SSO/FAQs/2FA"
  },
  "https://looker.com": {
    "name": "Looker",
    "url": "https://looker.com/",
    "img": "looker.png",
    "tfa": true,
    "software": true,
    "doc": "https://www.looker.com/docs/admin/security/two-factor-authentication"
  },
  "https://www.mapbox.com": {
    "name": "Mapbox",
    "url": "https://www.mapbox.com",
    "img": "mapbox.png",
    "tfa": true,
    "software": true,
    "doc": "https://www.mapbox.com/help/two-step-verification/"
  },
  "https://www.metrological.com": {
    "name": "Metrological",
    "url": "https://www.metrological.com/",
    "img": "metrological.png",
    "tfa": true,
    "software": true,
    "doc": "https://github.com/2factorauth/twofactorauth/pull/2273#issuecomment-271876292"
  },
  "https://cloud.mongodb.com": {
    "name": "MongoDB Cloud Manager",
    "url": "https://cloud.mongodb.com",
    "img": "mongodbmms.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "phone": true,
    "doc": "https://docs.cloud.mongodb.com/core/two-factor-authentication/"
  },
  "https://newrelic.com": {
    "name": "New Relic",
    "url": "https://newrelic.com",
    "twitter": "newrelic",
    "facebook": "NewRelic",
    "img": "newrelic.png",
    "tfa": false
  },
  "https://www.nexmo.com": {
    "name": "Nexmo",
    "url": "https://www.nexmo.com/",
    "img": "nexmo.png",
    "tfa": true,
    "sms": true,
    "phone": true
  },
  "https://www.npmjs.com": {
    "name": "npm",
    "url": "https://www.npmjs.com/",
    "img": "npm.png",
    "tfa": true,
    "software": true,
    "doc": "https://docs.npmjs.com/getting-started/using-two-factor-authentication"
  },
  "https://www.nuget.org": {
    "name": "NuGet",
    "url": "https://www.nuget.org",
    "img": "nuget.png",
    "tfa": false,
    "twitter": "nuget",
    "email_address": "support@nuget.org"
  },
  "https://packagist.org": {
    "name": "Packagist",
    "url": "https://packagist.org",
    "img": "packagist.png",
    "tfa": false,
    "twitter": "packagist",
    "email_address": "contact@packagist.org"
  },
  "https://papertrailapp.com": {
    "name": "Papertrail",
    "url": "https://papertrailapp.com/",
    "twitter": "papertrailapp",
    "img": "papertrail.png",
    "tfa": false
  },
  "https://phacility.com": {
    "name": "Phacility",
    "url": "https://phacility.com/",
    "img": "phacility.png",
    "tfa": true,
    "software": true
  },
  "https://www.pingdom.com": {
    "name": "Pingdom",
    "url": "https://www.pingdom.com",
    "img": "pingdom.png",
    "tfa": false,
    "twitter": "pingdom",
    "facebook": "pingdom"
  },
  "https://www.pivotaltracker.com": {
    "name": "Pivotal Tracker",
    "url": "https://www.pivotaltracker.com",
    "twitter": "pivotaltracker",
    "facebook": "pivotaltracker",
    "img": "pivotaltracker.png",
    "tfa": false
  },
  "https://www.plivo.com": {
    "name": "Plivo",
    "url": "https://www.plivo.com",
    "twitter": "plivo",
    "facebook": "Plivo",
    "img": "plivo.png",
    "tfa": false
  },
  "https://pypi.python.org": {
    "name": "PyPI",
    "url": "https://pypi.python.org/",
    "twitter": "pypi",
    "img": "pypi.png",
    "tfa": false
  },
  "https://www.pythonanywhere.com": {
    "name": "PythonAnywhere",
    "url": "https://www.pythonanywhere.com",
    "img": "pythonanywhere.png",
    "tfa": true,
    "software": true
  },
  "https://raygun.com": {
    "name": "Raygun",
    "url": "https://raygun.com",
    "img": "raygun.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://raygun.com/docs/workflow/two-factor-authentication"
  },
  "https://rbcommons.com": {
    "name": "RBCommons",
    "url": "https://rbcommons.com",
    "img": "rbcommons.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "http://support.beanbaginc.com/support/solutions/articles/3000006998-enabling-two-factor-authentication"
  },
  "https://rollbar.com": {
    "name": "Rollbar",
    "url": "https://rollbar.com/",
    "img": "rollbar.png",
    "tfa": true,
    "software": true,
    "doc": "https://rollbar.com/docs/two-factor-authentication/"
  },
  "https://rubygems.org": {
    "name": "RubyGems.org",
    "url": "https://rubygems.org",
    "img": "rubygems.png",
    "tfa": false,
    "twitter": "rubygems",
    "email_address": "security@rubygems.org"
  },
  "https://saucelabs.com": {
    "name": "Sauce Labs",
    "url": "https://saucelabs.com",
    "img": "saucelabs.png",
    "tfa": false,
    "twitter": "saucelabs",
    "facebook": "saucelabs",
    "email_address": "support@saucelabs.com"
  },
  "https://semaphoreci.com": {
    "name": "Semaphore",
    "url": "https://semaphoreci.com",
    "img": "semaphore.png",
    "tfa": true,
    "doc": "https://semaphoreci.com/docs/two-step-verification.html",
    "software": true
  },
  "https://getsentry.com": {
    "name": "Sentry",
    "url": "https://getsentry.com",
    "img": "sentry.png",
    "tfa": true,
    "sms": true,
    "hardware": true,
    "software": true,
    "doc": "https://blog.getsentry.com/2016/06/22/introducing-2fa.html"
  },
  "https://sourceforge.net": {
    "name": "SourceForge",
    "url": "https://sourceforge.net/",
    "img": "sourceforge.png",
    "tfa": true,
    "software": true,
    "doc": "https://sourceforge.net/blog/introducing-multifactor-authentication-on-sourceforge/"
  },
  "https://status.io": {
    "name": "Status.io",
    "url": "https://status.io/",
    "img": "statusio.png",
    "tfa": true,
    "hardware": true,
    "doc": "http://blog.status.io/2014/03/01/yubikey/"
  },
  "https://statuscake.com": {
    "name": "StatusCake",
    "url": "https://statuscake.com/",
    "img": "statuscake.png",
    "tfa": true,
    "sms": true
  },
  "https://www.statuspage.io": {
    "name": "StatusPage.io",
    "url": "https://www.statuspage.io",
    "twitter": "statuspageio",
    "facebook": "statuspageio",
    "img": "statuspageio.png",
    "tfa": false
  },
  "https://www.sumologic.com": {
    "name": "Sumo Logic",
    "url": "https://www.sumologic.com",
    "img": "sumologic.png",
    "tfa": true,
    "software": true,
    "doc": "https://help.sumologic.com/Manage/Security/About_2-Step_Verification"
  },
  "https://taiga.io": {
    "name": "Taiga.io",
    "url": "https://taiga.io",
    "twitter": "taigaio",
    "facebook": "taigaio",
    "img": "taigaio.png",
    "tfa": false
  },
  "https://www.twilio.com": {
    "name": "Twilio",
    "url": "https://www.twilio.com/",
    "img": "twilio.png",
    "tfa": true,
    "sms": true,
    "doc": "https://www.twilio.com/help/faq/twilio-basics/what-happens-when-i-enable-two-factor-authentication"
  },
  "https://unfuddle.com": {
    "name": "Unfuddle",
    "url": "https://unfuddle.com/",
    "img": "unfuddle.png",
    "tfa": true,
    "sms": true,
    "phone": true,
    "software": true,
    "doc": "https://unfuddle.com/blog/2014/07/140721-two-factor-authentication"
  },
  "https://unity3d.com": {
    "name": "Unity",
    "url": "https://unity3d.com/",
    "img": "unity.png",
    "tfa": true,
    "sms": true,
    "doc": "https://support.unity3d.com/hc/en-us/articles/208764976-How-do-I-enable-Two-Factor-Authentication-on-my-account-"
  },
  "https://uptimerobot.com": {
    "name": "Uptime Robot",
    "url": "https://uptimerobot.com",
    "twitter": "uptimerobot",
    "facebook": "UptimeRobot",
    "img": "uptimerobot.png",
    "tfa": false
  },
  "http://www.visualstudio.com": {
    "name": "Visual Studio Online",
    "url": "http://www.visualstudio.com/",
    "img": "visualstudio.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "http://windows.microsoft.com/en-us/windows/two-step-verification-faq"
  },
  "https://zapier.com": {
    "name": "Zapier",
    "url": "https://zapier.com",
    "img": "zapier.png",
    "tfa": true,
    "software": true,
    "doc": "https://zapier.com/help/two-factor-authentication/"
  },
  "https://www.007names.com": {
    "name": "007Names",
    "url": "https://www.007names.com",
    "img": "007names.png",
    "tfa": true,
    "software": true,
    "doc": "https://www.007names.com/info/two-step.xhtml"
  },
  "https://101domain.com": {
    "name": "101domain",
    "url": "https://101domain.com",
    "img": "101domain.png",
    "tfa": true,
    "software": true,
    "hardware": true,
    "doc": "https://www.101domain.com/vip_security_card.htm"
  },
  "https://10dollar.ca": {
    "name": "10Dollar",
    "url": "https://10dollar.ca/",
    "img": "10dollar.png",
    "twitter": "10dollar_ca",
    "facebook": "10dollar.ca",
    "tfa": false
  },
  "https://www.123-reg.co.uk": {
    "name": "123 Reg",
    "url": "https://www.123-reg.co.uk",
    "img": "123reg.png",
    "tfa": false,
    "twitter": "123reg",
    "facebook": "123regfans"
  },
  "https://www.1and1.com": {
    "name": "1and1",
    "url": "https://www.1and1.com/",
    "img": "1and1.png",
    "tfa": false,
    "twitter": "1and1",
    "facebook": "1and1"
  },
  "https://www.20i.com": {
    "name": "20i",
    "url": "https://www.20i.com",
    "img": "20i.png",
    "tfa": true,
    "software": true,
    "doc": "https://www.20i.com/support/my-services/two-factor-authentication-my20i"
  },
  "https://www.above.com": {
    "name": "Above.com",
    "url": "https://www.above.com",
    "img": "above.png",
    "tfa": true,
    "software": true,
    "doc": "http://domains.above.com/manual-two-step-authentication.html"
  },
  "https://cloudflare.com": {
    "name": "Cloudflare",
    "url": "https://cloudflare.com",
    "img": "cloudflare.png",
    "tfa": true,
    "software": true,
    "doc": "https://support.cloudflare.com/hc/en-us/articles/200167866-What-is-Authy-2-Factor-Authentication-"
  },
  "https://www.cloudns.net": {
    "name": "ClouDNS",
    "url": "https://www.cloudns.net/",
    "img": "cloudns.png",
    "tfa": true,
    "software": true,
    "doc": "https://www.cloudns.net/wiki/article/201/"
  },
  "https://www.crazydomains.com": {
    "name": "Crazy Domains",
    "url": "https://www.crazydomains.com",
    "img": "crazydomains.png",
    "tfa": false,
    "twitter": "CrazyDomains",
    "facebook": "crazydomains"
  },
  "https://directnic.com": {
    "name": "Directnic",
    "url": "https://directnic.com",
    "img": "directnic.png",
    "tfa": true,
    "software": true,
    "hardware": true,
    "doc": "https://directnic.com/knowledge/article/137:how+do+i+set+up+two-factor+authentication%3F"
  },
  "https://www.dnsmadeeasy.com": {
    "name": "DNS Made Easy",
    "url": "https://www.dnsmadeeasy.com",
    "img": "dnsmadeeasy.png",
    "tfa": true,
    "software": true,
    "doc": "http://help.dnsmadeeasy.com/managed-dns/administrative/enable-two-factor-authentication/"
  },
  "https://dnsimple.com": {
    "name": "DNSimple",
    "url": "https://dnsimple.com/",
    "img": "dnsimple.png",
    "tfa": true,
    "software": true,
    "doc": "https://blog.dnsimple.com/2012/08/protect-your-dnsimple-account-with-two-factor-authentication-from-authy/"
  },
  "https://www.domainmonster.com": {
    "name": "Domain Monster",
    "url": "https://www.domainmonster.com/",
    "img": "domainmonster.png",
    "twitter": "domainmonster",
    "facebook": "Domainmonster",
    "tfa": false
  },
  "https://www.domain.com": {
    "name": "Domain.com",
    "url": "https://www.domain.com/",
    "twitter": "DomainDotCom",
    "facebook": "Domaindotcom",
    "img": "domaindotcom.png",
    "tfa": false
  },
  "https://www.df.eu": {
    "name": "domainFACTORY",
    "url": "https://www.df.eu",
    "img": "domainfactory.png",
    "twitter": "domainfactory",
    "facebook": "domainfactory.GmbH",
    "tfa": false,
    "lang": "de"
  },
  "https://www.domains4bitcoins.com": {
    "name": "Domains4Bitcoins.com",
    "url": "https://www.domains4bitcoins.com",
    "img": "domains4bitcoins.png",
    "tfa": true,
    "sms": true,
    "doc": "https://my.domains4bitcoins.com/kb/answer/2692"
  },
  "https://www.domainsatcost.ca": {
    "name": "DomainsAtCost",
    "url": "https://www.domainsatcost.ca/",
    "twitter": "domainsatcost",
    "facebook": "domainsatcost",
    "img": "domainsatcost.png",
    "tfa": false
  },
  "https://www.domaintools.com": {
    "name": "DomainTools",
    "url": "https://www.domaintools.com/",
    "twitter": "DomainTools",
    "facebook": "domaintoolsllc",
    "email_address": "memberservices@domaintools.com",
    "img": "domaintools.png",
    "tfa": false
  },
  "http://www.domeny.tv": {
    "name": "Domeny.tv",
    "url": "http://www.domeny.tv/en",
    "img": "domenytv.png",
    "tfa": true,
    "software": true,
    "doc": "http://www.domeny.tv/en/two-factor-authentication"
  },
  "https://dyn.com": {
    "name": "Dyn",
    "url": "https://dyn.com/",
    "img": "dyn.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "exceptions": {
      "text": "Currently only supported for the Managed DNS & Email Delivery platforms (via DynID). Eventually DynID (and 2FA) will be rolled out to all platforms (no ETA)."
    },
    "doc": "https://help.dyn.com/2-factor-authentication/"
  },
  "http://dynadot.com": {
    "name": "Dynadot",
    "url": "http://dynadot.com/",
    "img": "dynadot.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "http://dynadot.com/domain/security.html"
  },
  "https://easydns.com": {
    "name": "easyDNS",
    "url": "https://easydns.com",
    "img": "easydns.png",
    "tfa": true,
    "sms": true,
    "email": true,
    "doc": "https://fusion.easydns.com/Knowledgebase/Article/View/347/0/account-security"
  },
  "https://www.enom.com": {
    "name": "eNom",
    "url": "https://www.enom.com/",
    "img": "enom.png",
    "tfa": true,
    "software": true,
    "doc": "http://www.enom.com/kb/kb/kb_1687-setup-2-factor.htm"
  },
  "https://www.eurodns.com": {
    "name": "EuroDNS",
    "url": "https://www.eurodns.com",
    "img": "eurodns.png",
    "tfa": true,
    "software": true,
    "doc": "http://help.eurodns.com/customer/en/portal/articles/1633106-how-do-i-activate-two-step-verification-on-my-account-"
  },
  "http://fabulous.com": {
    "name": "Fabulous",
    "url": "http://fabulous.com",
    "img": "fabulous.png",
    "tfa": true,
    "hardware": true,
    "doc": "http://fabulous.com/informationcenter/index.htm?formdata%5Bqid%5D=1194"
  },
  "https://www.fasthosts.co.uk": {
    "name": "Fasthosts",
    "url": "https://www.fasthosts.co.uk/",
    "twitter": "Fasthosts",
    "facebook": "fasthostsinternet",
    "img": "fasthosts.png",
    "tfa": false
  },
  "https://freedns.afraid.org": {
    "name": "FreeDNS",
    "url": "https://freedns.afraid.org/",
    "email_address": "dnsadmin@afraid.org",
    "img": "freedns.png",
    "tfa": false
  },
  "https://gandi.net": {
    "name": "Gandi",
    "url": "https://gandi.net",
    "img": "gandi.png",
    "tfa": true,
    "software": true,
    "hardware": true,
    "doc": "https://doc.gandi.net/en/organization/users/security"
  },
  "http://www.godaddy.com": {
    "name": "GoDaddy",
    "img": "godaddy.png",
    "url": "http://www.godaddy.com/",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://www.godaddy.com/help/enable-two-step-verification-7502"
  },
  "https://domains.google.com": {
    "name": "Google Domains",
    "url": "https://domains.google.com",
    "img": "googledomains.png",
    "tfa": true,
    "sms": true,
    "phone": true,
    "software": true,
    "hardware": true,
    "doc": "https://www.google.com/intl/en-US/landing/2step/features.html"
  },
  "https://www.heartinternet.uk": {
    "name": "Heart Internet",
    "url": "https://www.heartinternet.uk/",
    "img": "heartinternet.png",
    "tfa": false,
    "twitter": "HeartInternet",
    "facebook": "heartinternet"
  },
  "https://www.hexonet.net": {
    "name": "Hexonet",
    "url": "https://www.hexonet.net/",
    "img": "hexonet.png",
    "tfa": true,
    "software": true,
    "doc": "https://cp.hexonet.net/cp2/downloads/2FA.pdf"
  },
  "http://www.hover.com": {
    "name": "Hover.com",
    "img": "hover.png",
    "url": "http://www.hover.com/",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://help.hover.com/entries/26677644"
  },
  "https://www.he.net": {
    "name": "Hurricane Electric",
    "url": "https://www.he.net/",
    "img": "hurricane.png",
    "tfa": true,
    "software": true
  },
  "https://www.incapsula.com": {
    "name": "Incapsula",
    "url": "https://www.incapsula.com/",
    "img": "incapsula.png",
    "tfa": true,
    "email": true,
    "software": true,
    "sms": true,
    "doc": "https://docs.incapsula.com/Content/management-console-and-settings/account-settings.htm"
  },
  "http://www.internet.bs": {
    "name": "Internet.bs",
    "url": "http://www.internet.bs",
    "img": "internetbs.png",
    "tfa": true,
    "software": true,
    "doc": "https://twofactorauth.org/notes/internetbs/"
  },
  "https://www.inwx.com": {
    "name": "INWX",
    "url": "https://www.inwx.com/en/",
    "img": "internetworx.png",
    "tfa": true,
    "software": true,
    "doc": "https://www.inwx.com/en/offer/mobiletan"
  },
  "https://iwantmyname.com": {
    "name": "iWantMyName",
    "url": "https://iwantmyname.com/",
    "img": "iwantmyname.png",
    "tfa": true,
    "software": true,
    "doc": "https://help.iwantmyname.com/customer/portal/articles/1139898"
  },
  "https://joker.com": {
    "name": "Joker.com",
    "url": "https://joker.com",
    "img": "joker.png",
    "tfa": true,
    "software": true,
    "doc": "https://joker.com/faq/content/52/480/en/what-is-two_factor_authentication.html"
  },
  "https://www.loopia.se": {
    "name": "Loopia",
    "url": "https://www.loopia.se/",
    "img": "loopia.png",
    "tfa": true,
    "software": true,
    "doc": "https://blogg.loopia.se/2015/03/16/nu-kan-du-logga-in-med-tvafaktorsautentiering-hos-loopia-genom-bankid/",
    "exceptions": {
      "text": "TFA only available for Swedish residents with BankID."
    }
  },
  "https://www.markmonitor.com": {
    "name": "MarkMonitor",
    "url": "https://www.markmonitor.com",
    "img": "markmonitor.png",
    "tfa": true,
    "hardware": true,
    "sms": true,
    "software": true
  },
  "https://metaname.net": {
    "name": "Metaname",
    "url": "https://metaname.net/",
    "img": "metaname.png",
    "tfa": true,
    "sms": true,
    "doc": "https://metaname.net/public/two_factor_authentication"
  },
  "https://www.moniker.com": {
    "name": "Moniker",
    "url": "https://www.moniker.com/",
    "img": "moniker.png",
    "tfa": false,
    "twitter": "monikersnap",
    "facebook": "MonikerLLC"
  },
  "https://www.mydomain.com": {
    "name": "MyDomain",
    "url": "https://www.mydomain.com/",
    "twitter": "mydomaindotcom",
    "facebook": "mydomain",
    "img": "mydomain.png",
    "tfa": false
  },
  "https://www.name.com": {
    "name": "Name.com",
    "url": "https://www.name.com/",
    "img": "namecom.png",
    "tfa": true,
    "software": true,
    "doc": "https://www.name.com/services/two-step-verification"
  },
  "https://www.namecheap.com": {
    "name": "Namecheap",
    "url": "https://www.namecheap.com/",
    "img": "namecheap.png",
    "tfa": true,
    "sms": true,
    "phone": true,
    "software": true,
    "doc": "https://www.namecheap.com/support/knowledgebase/article.aspx/9253/45/how-to-two-factor-authentication"
  },
  "https://www.namesilo.com": {
    "name": "NameSilo.com",
    "url": "https://www.namesilo.com/",
    "img": "namesilo.png",
    "tfa": true,
    "software": true,
    "doc": "https://www.namesilo.com/Support/2~Factor-Authentication"
  },
  "https://www.namespro.ca": {
    "name": "NamesPro.ca",
    "url": "https://www.namespro.ca/",
    "twitter": "namespro",
    "facebook": "namespro",
    "img": "namespro.png",
    "tfa": false
  },
  "https://www.nearlyfreespeech.net": {
    "name": "NearlyFreeSpeech.NET",
    "url": "https://www.nearlyfreespeech.net/",
    "img": "nfsn.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://blog.nearlyfreespeech.net/2014/02/28/price-cuts-more-security-and-recovery-options/"
  },
  "https://www.netfirms.com": {
    "name": "Netfirms",
    "url": "https://www.netfirms.com",
    "twitter": "netfirms",
    "facebook": "netfirmsfans",
    "img": "netfirms.png",
    "tfa": false
  },
  "https://www.netim.com": {
    "name": "Netim",
    "url": "https://www.netim.com/",
    "twitter": "Netim_com",
    "facebook": "netimcom",
    "img": "netim.png",
    "tfa": false
  },
  "http://www.netregistry.com.au": {
    "name": "Netregistry",
    "url": "http://www.netregistry.com.au/",
    "twitter": "netregistry",
    "facebook": "netregistry",
    "img": "netregistry.png",
    "tfa": false
  },
  "https://www.networksolutions.com": {
    "name": "Network Solutions",
    "url": "https://www.networksolutions.com/",
    "twitter": "netsolcares",
    "facebook": "Web.com",
    "img": "networksolutions.png",
    "tfa": false
  },
  "https://www.noip.com": {
    "name": "No-IP",
    "url": "https://www.noip.com/",
    "img": "noip.png",
    "tfa": false,
    "twitter": "NoIPcom",
    "facebook": "noipdns"
  },
  "http://www.nominet.uk": {
    "name": "Nominet",
    "url": "http://www.nominet.uk/",
    "img": "nominet.png",
    "tfa": true,
    "software": true,
    "doc": "http://registrars.nominet.org.uk/sites/default/files/two_factor_authentication_userguide.pdf"
  },
  "https://ns1.com": {
    "name": "NS1",
    "url": "https://ns1.com/",
    "img": "ns1.png",
    "tfa": true,
    "software": true,
    "doc": "https://ns1.com/articles/enabling-2-factor-authentication"
  },
  "https://www.openprovider.co.uk": {
    "name": "Openprovider",
    "url": "https://www.openprovider.co.uk",
    "img": "openprovider.png",
    "tfa": true,
    "software": true,
    "doc": "https://www.openprovider.co.uk/about-openprovider/news/secure-your-account-with-two-factor-authentication"
  },
  "https://opensrs.com": {
    "name": "OpenSRS",
    "url": "https://opensrs.com",
    "img": "opensrs.png",
    "tfa": true,
    "software": true,
    "sms": true,
    "doc": "https://help.opensrs.com/hc/en-us/articles/209618017-Two-Factor-Authentication-2FA-for-Reseller-Account-Access"
  },
  "https://www.pairnic.com": {
    "name": "pairNIC",
    "url": "https://www.pairnic.com/",
    "img": "pairnic.png",
    "tfa": true,
    "software": true,
    "sms": true,
    "doc": "https://www.pairnic.com/kb/posts/345"
  },
  "https://pointhq.com": {
    "name": "PointDNS",
    "url": "https://pointhq.com/",
    "twitter": "pointdns",
    "img": "pointdns.png",
    "tfa": false
  },
  "https://porkbun.com": {
    "name": "porkbun",
    "url": "https://porkbun.com",
    "img": "porkbunBuns.png",
    "tfa": true,
    "software": true,
    "doc": "https://porkbun.com/products/two_factor_authentication"
  },
  "https://register4less.com": {
    "name": "Register4Less",
    "url": "https://register4less.com/",
    "img": "register4less.png",
    "tfa": true,
    "software": true,
    "doc": "http://blog.register4less.com/?p=43"
  },
  "https://registro.br": {
    "name": "Registro.br",
    "url": "https://registro.br",
    "img": "registrobr.png",
    "tfa": true,
    "hardware": true,
    "software": true,
    "doc": "https://registro.br/ajuda.html?secao=GerenciamentoConta&item=310"
  },
  "https://www.strato.de": {
    "name": "STRATO",
    "url": "https://www.strato.de/",
    "twitter": "STRATO_AG",
    "facebook": "strato",
    "img": "strato.png",
    "tfa": false,
    "lang": "de"
  },
  "https://www.uk2.net": {
    "name": "UK2",
    "url": "https://www.uk2.net/",
    "twitter": "UK2",
    "facebook": "UK2.net",
    "img": "uk2.png",
    "tfa": false
  },
  "https://uniregistry.com": {
    "name": "Uniregistry",
    "url": "https://uniregistry.com/",
    "img": "uniregistry.png",
    "tfa": true,
    "software": true,
    "doc": "https://uniregistry.help/my-account-en/what-is-two-step-verification/"
  },
  "https://www.uniteddomains.com": {
    "name": "United Domains USA",
    "url": "https://www.uniteddomains.com/",
    "img": "uniteddomains-usa.png",
    "tfa": true,
    "software": true,
    "doc": "https://help.uniteddomains.com/hc/en-us/articles/115001458813-How-to-Enable-Disable-Two-Factor-Authentication"
  },
  "https://www.ud-reselling.com": {
    "name": "united-domains Reselling",
    "url": "https://www.ud-reselling.com/en/",
    "img": "udreselling.png",
    "tfa": true,
    "software": true,
    "doc": "https://www.ud-reselling.com/en/security/"
  },
  "https://www.united-domains.de": {
    "name": "united-domains.de",
    "url": "https://www.united-domains.de/",
    "img": "united-domains.png",
    "tfa": true,
    "software": true,
    "doc": "https://help.united-domains.de/faq-article/wie-aktiviere-ich-die-zweistufige-verifizierung-und-mache-mein-portfolio-login-sicherer",
    "exceptions": {
      "text": "A phone number is required to enable two-factor authentication."
    }
  },
  "https://www.verio.com": {
    "name": "Verio",
    "url": "https://www.verio.com/",
    "twitter": "Verio",
    "img": "verio.png",
    "tfa": false
  },
  "https://www.isc2.org": {
    "name": "(ISC)2",
    "url": "https://www.isc2.org",
    "img": "isc2.png",
    "tfa": false,
    "twitter": "ISC2",
    "facebook": "isc2fb"
  },
  "http://www.aaiedu.hr": {
    "name": "AAI@EduHr",
    "url": "http://www.aaiedu.hr/",
    "email_address": "aai@srce.hr",
    "img": "aaieduhr.png",
    "tfa": false,
    "lang": "hr"
  },
  "http://academicearth.org": {
    "name": "Academic Earth",
    "url": "http://academicearth.org/",
    "twitter": "academicearth",
    "facebook": "academicearth",
    "img": "academicearth.png",
    "tfa": false
  },
  "https://www.antagning.se": {
    "name": "Antagning.se",
    "url": "https://www.antagning.se",
    "img": "antagning.png",
    "twitter": "antagningse",
    "tfa": false
  },
  "https://www.babbel.com": {
    "name": "Babbel",
    "url": "https://www.babbel.com",
    "img": "babbel.png",
    "tfa": false,
    "twitter": "babbel",
    "facebook": "babbel.languages",
    "email_address": "support@en.babbel.com"
  },
  "https://www.cbtnuggets.com": {
    "name": "CBT Nuggets",
    "url": "https://www.cbtnuggets.com/",
    "img": "cbtnuggets.png",
    "twitter": "CBTNuggets",
    "facebook": "cbtnuggets",
    "tfa": false
  },
  "https://www.cwnp.com": {
    "name": "Certified Wireless Network Professional (CWNP)",
    "url": "https://www.cwnp.com",
    "img": "cwnp.png",
    "tfa": false,
    "twitter": "CWNP",
    "facebook": "OfficialCWNP",
    "email_address": "customercare@cwnp.com"
  },
  "https://www.clemson.edu": {
    "name": "Clemson University",
    "url": "https://www.clemson.edu/",
    "img": "clemson.png",
    "tfa": true,
    "sms": true,
    "phone": true,
    "software": true,
    "hardware": true,
    "doc": "https://2fa.app.clemson.edu/"
  },
  "https://clever.com": {
    "name": "Clever",
    "url": "https://clever.com",
    "img": "clever.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://support.clever.com/hc/en-us/articles/202062333-Two-Factor-Authentication"
  },
  "https://www.codeschool.com": {
    "name": "Code School",
    "url": "https://www.codeschool.com/",
    "twitter": "codeschool",
    "facebook": "CodeSchool",
    "img": "codeschool.png",
    "tfa": false
  },
  "https://www.codecademy.com": {
    "name": "Codecademy",
    "url": "https://www.codecademy.com/",
    "twitter": "codecademy",
    "facebook": "codecademy",
    "img": "codecademy.png",
    "tfa": false
  },
  "https://www.cod.edu": {
    "name": "College Of DuPage",
    "url": "https://www.cod.edu/",
    "twitter": "collegedupage",
    "facebook": "collegeofdupage",
    "email_address": "studenthelp@dupage.edu",
    "img": "CoD.png",
    "tfa": false
  },
  "https://certification.comptia.org": {
    "name": "CompTIA",
    "url": "https://certification.comptia.org/",
    "img": "CompTIA.png",
    "tfa": false,
    "twitter": "comptia",
    "facebook": "CompTIA"
  },
  "https://www.coursera.org": {
    "name": "Coursera",
    "url": "https://www.coursera.org/",
    "twitter": "coursera",
    "facebook": "Coursera",
    "img": "coursera.png",
    "tfa": false
  },
  "https://www.csn.se": {
    "name": "CSN",
    "url": "https://www.csn.se",
    "img": "csn.png",
    "tfa": true,
    "hardware": true,
    "software": true,
    "doc": "https://www.csn.se/bas/vanligaFragor.do"
  },
  "https://www.duolingo.com": {
    "name": "Duolingo",
    "url": "https://www.duolingo.com",
    "img": "duolingo.png",
    "twitter": "duolingo",
    "facebook": "duolingo",
    "tfa": false
  },
  "https://www.ecu.edu": {
    "name": "East Carolina University",
    "url": "https://www.ecu.edu",
    "img": "ecu.png",
    "tfa": true,
    "sms": true,
    "phone": true,
    "software": true,
    "doc": "https://www.ecu.edu/cs-itcs/office365/multi-factor-authentication.cfm"
  },
  "https://www.eccouncil.org": {
    "name": "EC-Council",
    "url": "https://www.eccouncil.org",
    "img": "eccouncil.png",
    "tfa": true,
    "sms": true,
    "email": true,
    "doc": "https://aspen.eccouncil.org/aspen/Help/2FactorAuthentication-User_Manual.pdf"
  },
  "https://www.edmodo.com": {
    "name": "Edmodo",
    "url": "https://www.edmodo.com/",
    "twitter": "edmodo",
    "facebook": "edmodo",
    "img": "edmodo.png",
    "tfa": false
  },
  "https://www.edx.org": {
    "name": "edX",
    "url": "https://www.edx.org/",
    "twitter": "edXOnline",
    "facebook": "edX",
    "img": "edx.png",
    "tfa": false
  },
  "https://www.gatech.edu": {
    "name": "Georgia Institute of Technology",
    "url": "https://www.gatech.edu",
    "img": "gatech.png",
    "tfa": true,
    "phone": true,
    "hardware": true,
    "software": true,
    "doc": "https://twofactor.oit.gatech.edu"
  },
  "https://www.giac.org": {
    "name": "Global Information Assurance Certification (GIAC)",
    "url": "https://www.giac.org",
    "img": "giac.png",
    "tfa": false,
    "twitter": "CertifyGIAC",
    "facebook": "GIAC.org",
    "email_address": "info@giac.org"
  },
  "https://www.hackerrank.com": {
    "name": "HackerRank",
    "url": "https://www.hackerrank.com",
    "img": "hackerrank.png",
    "tfa": false,
    "twitter": "hackerrank",
    "facebook": "hackerrank"
  },
  "https://www.harvard.edu": {
    "name": "Harvard University",
    "url": "https://www.harvard.edu",
    "img": "harvard.png",
    "tfa": true,
    "sms": true,
    "phone": true,
    "hardware": true,
    "software": true,
    "doc": "https://huit.harvard.edu/twostep"
  },
  "https://web.iit.edu": {
    "name": "Illinois Institute Of Technology",
    "url": "https://web.iit.edu/",
    "twitter": "illinoistech",
    "facebook": "illinoistech",
    "email_address": "supportdesk@iit.edu",
    "img": "iit.png",
    "tfa": false,
    "exceptions": {
      "text": "Illinois Tech uses Google Apps for Eductation for their email; so they could very easily add tfa to their email, but at the time of this commit, they have it disabled and do not plan to implement it any time soon."
    }
  },
  "https://www.isaca.org": {
    "name": "ISACA",
    "url": "https://www.isaca.org",
    "img": "isaca.png",
    "tfa": false,
    "twitter": "ISACANews",
    "facebook": "ISACAHQ"
  },
  "https://web.mit.edu": {
    "name": "Massachusetts Institute of Technology",
    "url": "https://web.mit.edu/",
    "img": "mit.png",
    "tfa": true,
    "sms": true,
    "phone": true,
    "hardware": true,
    "software": true,
    "doc": "https://kb.mit.edu/confluence/display/istcontrib/Duo+Authentication+Landing+Page"
  },
  "https://www.montclair.edu": {
    "name": "Montclair State University",
    "url": "https://www.montclair.edu/employee-services/",
    "twitter": "montclairstateu",
    "img": "montclair.png",
    "tfa": false
  },
  "https://www.mystudylife.com": {
    "name": "My Study Life",
    "url": "https://www.mystudylife.com/",
    "twitter": "mystudylife",
    "facebook": "mystudylife",
    "img": "mystudylife.png",
    "tfa": false
  },
  "https://pushcoin.com": {
    "name": "PushCoin",
    "url": "https://pushcoin.com",
    "img": "pushcoin.png",
    "tfa": true,
    "hardware": true,
    "exceptions": {
      "text": "U2F support only for school admin accounts. 2FA for parent accounts is in progress."
    },
    "doc": "http://knowhow.pushcoin.com/using-security-key-for-2-step-verification/"
  },
  "https://sentry.rmu.edu": {
    "name": "Robert Morris University",
    "url": "https://sentry.rmu.edu/login",
    "twitter": "rmu",
    "facebook": "RMUpgh",
    "img": "rmu.png",
    "tfa": false
  },
  "http://www.royalroads.ca": {
    "name": "Royal Roads University",
    "url": "http://www.royalroads.ca",
    "twitter": "RoyalRoads",
    "facebook": "royalroadsu",
    "img": "royalroads.png",
    "tfa": false
  },
  "http://schoolsoft.se": {
    "name": "SchoolSoft",
    "url": "http://schoolsoft.se/",
    "img": "schoolsoft.png",
    "email_address": "support@schoolsoft.se",
    "tfa": false
  },
  "https://www.temple.edu": {
    "name": "Temple University",
    "url": "https://www.temple.edu/",
    "img": "templeuniversity.png",
    "tfa": true,
    "sms": true,
    "phone": true,
    "software": true,
    "doc": "https://computerservices.temple.edu/two-step-verification"
  },
  "https://www.udacity.com": {
    "name": "Udacity",
    "url": "https://www.udacity.com/",
    "twitter": "udacity",
    "facebook": "Udacity",
    "img": "udacity.png",
    "tfa": false
  },
  "https://www.udemy.com": {
    "name": "Udemy",
    "url": "https://www.udemy.com/",
    "twitter": "udemy",
    "facebook": "udemy",
    "img": "udemy.png",
    "tfa": false
  },
  "https://www.umich.edu": {
    "name": "University of Michigan",
    "url": "https://www.umich.edu",
    "img": "umich.png",
    "tfa": true,
    "sms": true,
    "phone": true,
    "hardware": true,
    "software": true,
    "doc": "http://its.umich.edu/accounts-access/uniqnames-passwords/two-factor-authentication"
  },
  "https://www.vcu.edu": {
    "name": "Virginia Commonwealth University",
    "url": "https://www.vcu.edu",
    "img": "vcu.png",
    "tfa": true,
    "sms": true,
    "phone": true,
    "software": true,
    "hardware": true,
    "doc": "https://www.ts.vcu.edu/askit/essential-computing/information-security/2factor/"
  },
  "https://www.vt.edu": {
    "name": "Virginia Tech",
    "url": "https://www.vt.edu/",
    "img": "virginiatech.png",
    "tfa": true,
    "sms": true,
    "phone": true,
    "software": true,
    "hardware": true,
    "doc": "http://www.tech.it.vt.edu/2factor/"
  },
  "https://mail.aol.com": {
    "name": "Aol Mail",
    "url": "https://mail.aol.com",
    "img": "aol.png",
    "tfa": true,
    "sms": true,
    "phone": true,
    "software": true,
    "doc": "https://help.aol.com/articles/2-step-verification-stronger-than-your-password-alone"
  },
  "https://www.fastmail.com": {
    "name": "FastMail",
    "url": "https://www.fastmail.com/",
    "img": "fastmail.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "hardware": true,
    "doc": "https://www.fastmail.com/help/account/2fa.html"
  },
  "https://www.freenet.de": {
    "name": "Freenet",
    "url": "https://www.freenet.de/",
    "img": "freenet.png",
    "tfa": false,
    "facebook": "freenet"
  },
  "https://mail.google.com": {
    "name": "Gmail",
    "url": "https://mail.google.com",
    "img": "gmail.png",
    "tfa": true,
    "sms": true,
    "phone": true,
    "software": true,
    "hardware": true,
    "doc": "https://www.google.com/intl/en-US/landing/2step/features.html"
  },
  "https://www.gmx.com": {
    "name": "GMX",
    "url": "https://www.gmx.com/",
    "twitter": "gmxmail",
    "img": "gmx.png",
    "tfa": false
  },
  "https://www.hushmail.com": {
    "name": "Hushmail",
    "url": "https://www.hushmail.com",
    "img": "hushmail.png",
    "tfa": true,
    "sms": true,
    "email": true,
    "software": true,
    "doc": "https://help.hushmail.com/entries/63282756-Two-step-verification"
  },
  "https://www.legalmail.it": {
    "name": "Legalmail",
    "url": "https://www.legalmail.it/",
    "img": "legalmail.png",
    "tfa": false,
    "twitter": "InfoCert_it",
    "facebook": "InfoCertSpa",
    "lang": "it"
  },
  "https://www.mail.com": {
    "name": "Mail.com",
    "url": "https://www.mail.com/",
    "twitter": "maildotcom",
    "facebook": "mail.com",
    "img": "maildotcom.png",
    "tfa": false
  },
  "https://mail.de": {
    "name": "mail.de",
    "url": "https://mail.de/",
    "img": "mailde.png",
    "tfa": true,
    "software": true,
    "hardware": true,
    "doc": "https://mail.de/hilfe/u2f-authenticator"
  },
  "https://mail.ru": {
    "name": "Mail.Ru",
    "url": "https://mail.ru/",
    "img": "mailru.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://help.mail.ru/enmail-help/settings/2auth"
  },
  "https://mailbox.org": {
    "name": "mailbox.org",
    "url": "https://mailbox.org/",
    "img": "mailbox.png",
    "tfa": true,
    "software": true,
    "hardware": true,
    "doc": "https://support-en.mailbox.org/knowledge-base/article/is-there-a-two-factor-authentication"
  },
  "https://mailfence.com": {
    "name": "Mailfence",
    "url": "https://mailfence.com/",
    "img": "mailfence.png",
    "tfa": true,
    "software": true,
    "doc": "https://mailfence.com/c/mailfence/more/totp.jsp"
  },
  "https://www.migadu.com": {
    "name": "Migadu",
    "url": "https://www.migadu.com/",
    "email_address": "contact@migadu.com",
    "img": "migadu.png",
    "tfa": false
  },
  "https://mxroute.com": {
    "name": "MXroute",
    "url": "https://mxroute.com/",
    "img": "mxroute.png",
    "tfa": true,
    "software": true
  },
  "https://outlook.com": {
    "name": "Outlook.com",
    "url": "https://outlook.com",
    "img": "outlook.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "http://windows.microsoft.com/en-us/windows/two-step-verification-faq"
  },
  "https://www.pobox.com": {
    "name": "Pobox",
    "url": "https://www.pobox.com/",
    "img": "pobox.png",
    "tfa": true,
    "software": true,
    "hardware": true,
    "doc": "https://pobox.com/helpspot/index.php?pg=kb.chapter&id=65"
  },
  "https://posteo.de": {
    "name": "Posteo",
    "url": "https://posteo.de/",
    "img": "posteo.png",
    "tfa": true,
    "software": true,
    "doc": "https://posteo.de/en/help/what-is-two-factor-authentication-and-how-do-i-set-it-up"
  },
  "https://protonmail.com": {
    "name": "ProtonMail",
    "url": "https://protonmail.com/",
    "img": "protonmail.png",
    "tfa": true,
    "software": true,
    "doc": "https://protonmail.com/support/knowledge-base/two-factor-authentication/"
  },
  "https://mail.riseup.net": {
    "name": "Riseup Mail",
    "url": "https://mail.riseup.net",
    "twitter": "riseupnet",
    "img": "riseup.png",
    "tfa": false
  },
  "https://runbox.com": {
    "name": "Runbox",
    "url": "https://runbox.com",
    "img": "runbox.png",
    "tfa": true,
    "software": true,
    "doc": "https://help.runbox.com/account-security/"
  },
  "http://www.t-online.de": {
    "name": "T-Online",
    "url": "http://www.t-online.de/",
    "twitter": "Telekom_hilft",
    "facebook": "tonline.de",
    "img": "tonline.png",
    "lang": "de",
    "tfa": false
  },
  "https://www.thexyz.com": {
    "name": "Thexyz",
    "url": "https://www.thexyz.com/",
    "img": "thexyz.png",
    "tfa": true,
    "software": true,
    "hardware": true,
    "doc": "https://www.thexyz.com/account/knowledgebase/15/Enabling-two-factor-authentication.html"
  },
  "https://mail.tim.it": {
    "name": "TIM Mail",
    "url": "https://mail.tim.it/",
    "img": "tim.png",
    "tfa": false,
    "twitter": "TIM_Official",
    "facebook": "TimOfficialPage",
    "lang": "it"
  },
  "https://www.virginmedia.com": {
    "name": "Virgin Media (UK)",
    "url": "https://www.virginmedia.com/",
    "twitter": "virginmedia",
    "facebook": "virginmedia",
    "img": "virginmedia.png",
    "tfa": false
  },
  "https://web.de": {
    "name": "Web.de",
    "url": "https://web.de",
    "twitter": "WEBDE",
    "facebook": "WEB.DE",
    "img": "webde.png",
    "lang": "de",
    "tfa": false
  },
  "https://mail.yahoo.co.jp": {
    "name": "Yahoo Japan Mail",
    "url": "https://mail.yahoo.co.jp/",
    "img": "yahoojapanmail.png",
    "tfa": true,
    "email": true,
    "software": true,
    "doc": "https://id.yahoo.co.jp/security/otp.html"
  },
  "https://mail.yahoo.com": {
    "name": "Yahoo Mail",
    "url": "https://mail.yahoo.com/",
    "img": "yahoomail.png",
    "tfa": true,
    "sms": true,
    "phone": true,
    "doc": "https://help.yahoo.com/kb/SLN5013.html"
  },
  "https://mail.yandex.com": {
    "name": "Yandex.Mail",
    "url": "https://mail.yandex.com/",
    "img": "yandexmail.png",
    "tfa": true,
    "software": true,
    "exceptions": {
      "text": "SMS-capable phone required for initial setup."
    },
    "doc": "https://yandex.com/support/passport/authorization/twofa.xml"
  },
  "https://www.zimbra.com": {
    "name": "Zimbra",
    "url": "https://www.zimbra.com/",
    "img": "zimbra.png",
    "tfa": true,
    "software": true,
    "exceptions": {
      "text": "Available in Zimbra Collaboration 8.7 and above, Network Edition only"
    },
    "doc": "https://blog.zimbra.com/2016/02/zimbra-collaboration-8-7-two-factor-authentication-2fa-technical-preview/"
  },
  "https://www.zoho.com": {
    "name": "Zoho Mail",
    "url": "https://www.zoho.com/mail/",
    "img": "zoho.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://adminconsole.wiki.zoho.com/mail/Two-Factor-Authentication.html"
  },
  "https://bandcamp.com": {
    "name": "Bandcamp",
    "url": "https://bandcamp.com",
    "twitter": "bandcamp",
    "facebook": "Bandcamp",
    "img": "bandcamp.png",
    "tfa": false
  },
  "https://www.cdbaby.com": {
    "name": "CD Baby",
    "url": "https://www.cdbaby.com/",
    "twitter": "cdbaby",
    "facebook": "cdbaby",
    "img": "cdbaby.png",
    "tfa": false
  },
  "http://www.crunchyroll.com": {
    "name": "Crunchyroll",
    "url": "http://www.crunchyroll.com/",
    "img": "crunchyroll.png",
    "tfa": false,
    "twitter": "Crunchyroll",
    "facebook": "Crunchyroll"
  },
  "https://play.google.com": {
    "name": "Google Play",
    "url": "https://play.google.com",
    "img": "googleplay.png",
    "tfa": true,
    "sms": true,
    "phone": true,
    "hardware": true,
    "software": true,
    "doc": "https://www.google.com/intl/en-US/landing/2step/features.html"
  },
  "http://www.hulu.com": {
    "name": "Hulu",
    "url": "http://www.hulu.com/",
    "twitter": "hulu_support",
    "facebook": "hulu",
    "img": "hulu.png",
    "tfa": false
  },
  "http://www.ustream.tv": {
    "name": "IBM Cloud Video (Ustream)",
    "url": "http://www.ustream.tv/",
    "twitter": "ibmcloudvideo",
    "facebook": "ibmcloudvideo",
    "img": "ustream.png",
    "tfa": false
  },
  "https://www.imdb.com": {
    "name": "IMDb",
    "url": "https://www.imdb.com",
    "img": "imdb.png",
    "twitter": "IMDb",
    "facebook": "imdb",
    "tfa": false
  },
  "http://www.last.fm": {
    "name": "Last.fm",
    "url": "http://www.last.fm/",
    "twitter": "lastfmsupport",
    "facebook": "lastfm",
    "img": "lastfm.png",
    "tfa": false
  },
  "https://mixer.com": {
    "name": "Mixer",
    "url": "https://mixer.com/",
    "img": "mixer.png",
    "tfa": true,
    "software": true,
    "doc": "https://watchbeam.zendesk.com/hc/en-us/articles/115000997646-What-is-2FA-two-factor-authentication-and-How-do-I-set-it-up-"
  },
  "https://www.netflix.com": {
    "name": "Netflix",
    "url": "https://www.netflix.com/us/",
    "twitter": "Netflixhelps",
    "facebook": "netflix",
    "img": "netflix.png",
    "tfa": false
  },
  "https://www.pandora.com": {
    "name": "Pandora",
    "url": "https://www.pandora.com",
    "img": "pandora.png",
    "tfa": false,
    "twitter": "pandorasupport",
    "facebook": "pandora"
  },
  "https://picarto.tv": {
    "name": "Picarto.TV",
    "url": "https://picarto.tv/",
    "twitter": "PicartoTV",
    "facebook": "picartotv",
    "email_address": "support@picarto.tv",
    "img": "picartotv.png",
    "tfa": false
  },
  "https://www.plex.tv": {
    "name": "Plex",
    "url": "https://www.plex.tv",
    "twitter": "plexapp",
    "facebook": "plexapp",
    "img": "plex.png",
    "tfa": false
  },
  "http://www.qobuz.com": {
    "name": "Qobuz",
    "url": "http://www.qobuz.com",
    "twitter": "qobuz",
    "facebook": "qobuz",
    "img": "qobuz.png",
    "tfa": false
  },
  "https://www.roku.com": {
    "name": "Roku",
    "url": "https://www.roku.com",
    "img": "roku.png",
    "tfa": false,
    "twitter": "RokuSupport",
    "facebook": "roku"
  },
  "https://www.sling.com": {
    "name": "Sling TV",
    "url": "https://www.sling.com/",
    "twitter": "slinganswers",
    "facebook": "sling",
    "img": "sling.png",
    "tfa": false
  },
  "https://www.smashcast.tv": {
    "name": "smashcast",
    "url": "https://www.smashcast.tv/",
    "img": "smashcast.png",
    "tfa": true,
    "software": true,
    "doc": "https://help.smashcast.tv/customer/en/portal/articles/2779887"
  },
  "https://soundcloud.com": {
    "name": "SoundCloud",
    "url": "https://soundcloud.com/",
    "twitter": "SCsupport",
    "facebook": "SoundCloud",
    "img": "soundcloud.png",
    "tfa": false
  },
  "https://www.spotify.com": {
    "name": "Spotify",
    "url": "https://www.spotify.com/",
    "twitter": "spotifycares",
    "facebook": "spotify",
    "img": "spotify.png",
    "tfa": false
  },
  "https://tidal.com": {
    "name": "TIDAL",
    "url": "https://tidal.com/",
    "twitter": "TIDALHiFi",
    "facebook": "TIDAL",
    "img": "tidal.png",
    "tfa": false
  },
  "https://www.tivo.com": {
    "name": "TiVo",
    "url": "https://www.tivo.com/",
    "twitter": "TiVo",
    "facebook": "TiVo",
    "img": "tivo.png",
    "tfa": false
  },
  "https://www.twitch.tv": {
    "name": "Twitch",
    "url": "https://www.twitch.tv/",
    "img": "twitch.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "http://blog.twitch.tv/2015/11/two-factor-authentication-now-available-on-your-twitch-account/"
  },
  "https://vimeo.com": {
    "name": "Vimeo",
    "url": "https://vimeo.com/",
    "twitter": "vimeo",
    "facebook": "Vimeo",
    "img": "vimeo.png",
    "tfa": false
  },
  "https://www.youtube.com": {
    "name": "YouTube",
    "url": "https://www.youtube.com/",
    "img": "youtube.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "phone": true,
    "hardware": true,
    "doc": "https://www.google.com/intl/en-US/landing/2step/features.html"
  },
  "http://www.aie-ny.com": {
    "name": "Adirondack Insurance Exchange",
    "url": "http://www.aie-ny.com/",
    "img": "adirondackinsurnaceexchange.png",
    "tfa": false
  },
  "https://www.adp.com": {
    "name": "ADP",
    "url": "https://www.adp.com",
    "twitter": "adp",
    "facebook": "AutomaticDataProcessing",
    "img": "adp.png",
    "tfa": false
  },
  "https://www.bw-bank.de": {
    "name": "Baden-Württembergische Bank",
    "url": "https://www.bw-bank.de/de/",
    "tfa": false,
    "img": "bw_bank.png",
    "lang": "de"
  },
  "https://www.bitbond.com": {
    "name": "Bitbond",
    "url": "https://www.bitbond.com",
    "img": "bitbond.png",
    "tfa": true,
    "sms": true,
    "email": true,
    "software": true
  },
  "https://www.clearscore.com": {
    "name": "ClearScore",
    "url": "https://www.clearscore.com",
    "twitter": "ClearScore",
    "facebook": "clearscore",
    "img": "clearscore.png",
    "tfa": false
  },
  "https://www.creditkarma.com": {
    "name": "Credit Karma",
    "url": "https://www.creditkarma.com",
    "img": "creditkarma.png",
    "tfa": true,
    "sms": true
  },
  "https://www.ditech.com": {
    "name": "ditech",
    "url": "https://www.ditech.com",
    "twitter": "ditech",
    "facebook": "ditech",
    "img": "ditech.png",
    "tfa": false
  },
  "https://www.freeagent.com": {
    "name": "FreeAgent",
    "url": "https://www.freeagent.com",
    "img": "freeagent.png",
    "tfa": true,
    "software": true,
    "doc": "https://www.freeagent.com/support/kb/getting-started/two-step-verification"
  },
  "https://www.freshbooks.com": {
    "name": "FreshBooks",
    "url": "https://www.freshbooks.com",
    "img": "freshbooks.png",
    "twitter": "freshbooks",
    "facebook": "FreshBooks",
    "tfa": false
  },
  "https://www.geico.com": {
    "name": "Geico",
    "url": "https://www.geico.com/",
    "img": "geico.png",
    "twitter": "geico_service",
    "facebook": "geico",
    "tfa": false
  },
  "https://www.gusto.com": {
    "name": "Gusto",
    "url": "https://www.gusto.com",
    "img": "gusto.png",
    "tfa": true,
    "sms": true,
    "doc": "https://support.gusto.com/hc/en-us/articles/210838787-Two-Step-Authentication"
  },
  "http://www.hl.co.uk": {
    "name": "Hargreaves Lansdown",
    "url": "http://www.hl.co.uk",
    "twitter": "HLInvest",
    "facebook": "hargreaveslansdowninvest",
    "img": "hargreaveslansdown.png",
    "tfa": false
  },
  "https://www.hellowallet.com": {
    "name": "HelloWallet",
    "url": "https://www.hellowallet.com",
    "twitter": "HelloWallet",
    "facebook": "hellowallet",
    "img": "hellowallet.png",
    "tfa": false
  },
  "https://www.inexfinance.com": {
    "name": "InEx Finance",
    "url": "https://www.inexfinance.com/",
    "twitter": "InexFinance",
    "facebook": "inex.finance",
    "img": "inex.png",
    "tfa": false
  },
  "https://turbotax.intuit.com": {
    "name": "Intuit TurboTax",
    "url": "https://turbotax.intuit.com/",
    "img": "turbotax.png",
    "tfa": true,
    "sms": true,
    "phone": true,
    "email": true,
    "software": true,
    "doc": "https://ttlc.intuit.com/questions/2902682-what-is-two-step-verification"
  },
  "https://invoiced.com": {
    "name": "Invoiced",
    "url": "https://invoiced.com/",
    "img": "invoiced.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://support.invoiced.com/knowledge_base/topics/setting-up-two-factor-authentication"
  },
  "https://justworks.com": {
    "name": "Justworks",
    "url": "https://justworks.com/",
    "img": "justworks.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "http://help.justworks.com/customer/en/portal/articles/2488740-two-factor-authentication"
  },
  "https://www.kiva.org": {
    "name": "Kiva",
    "url": "https://www.kiva.org",
    "twitter": "kiva",
    "facebook": "kiva",
    "img": "kiva.png",
    "tfa": false
  },
  "https://www.kualto.com": {
    "name": "Kualto",
    "url": "https://www.kualto.com",
    "twitter": "kualtoapp",
    "img": "kualto.png",
    "tfa": false
  },
  "https://www.thelevelup.com": {
    "name": "LevelUp",
    "url": "https://www.thelevelup.com",
    "twitter": "TheLevelUp",
    "facebook": "LevelUpApp",
    "img": "levelup.png",
    "tfa": false
  },
  "https://www.mint.com": {
    "name": "Mint",
    "url": "https://www.mint.com",
    "img": "mint.png",
    "tfa": true,
    "sms": true,
    "email": true,
    "software": true
  },
  "https://money.yodlee.com": {
    "name": "money by Envestnet | Yodlee",
    "url": "https://money.yodlee.com/",
    "twitter": "Yodlee",
    "img": "yodlee.png",
    "tfa": false
  },
  "http://www.nexonia.com": {
    "name": "Nexonia",
    "url": "http://www.nexonia.com/",
    "facebook": "nexonia",
    "twitter": "nexonia",
    "img": "nexonia.png",
    "tfa": false
  },
  "https://www.noddle.co.uk": {
    "name": "Noddle",
    "url": "https://www.noddle.co.uk",
    "twitter": "useyournoddle",
    "facebook": "noodleuk",
    "img": "noddle.png",
    "tfa": false
  },
  "https://www.northwesternmutual.com": {
    "name": "Northwestern Mutual",
    "url": "https://www.northwesternmutual.com/",
    "facebook": "northwesternmutual",
    "img": "northwesternmutual.png",
    "tfa": false
  },
  "https://www.paychex.com": {
    "name": "Paychex",
    "url": "https://www.paychex.com",
    "img": "paychex.png",
    "tfa": true,
    "sms": true,
    "phone": true
  },
  "https://www.paycor.com": {
    "name": "Paycor",
    "url": "https://www.paycor.com",
    "img": "paycor.png",
    "tfa": true,
    "sms": true,
    "email": true,
    "phone": true,
    "software": true,
    "doc": "https://www.paycor.com/security/how-to-keep-your-account-safe"
  },
  "http://paytrust.quicken.com": {
    "name": "Paytrust",
    "url": "http://paytrust.quicken.com",
    "img": "paytrust.png",
    "tfa": true,
    "phone": true
  },
  "https://www.pocketsmith.com": {
    "name": "Pocketsmith",
    "url": "https://www.pocketsmith.com",
    "img": "pocketsmith.png",
    "tfa": true,
    "software": true,
    "doc": "https://www.pocketsmith.com/blog/2014/07/18/2fa-orginal-merchant-and-other-updates"
  },
  "https://www.popmoney.com": {
    "name": "Popmoney",
    "url": "https://www.popmoney.com",
    "twitter": "popmoney",
    "facebook": "popmoney",
    "img": "popmoney.png",
    "tfa": false
  },
  "https://www.pcfinancial.ca": {
    "name": "President's Choice Financial",
    "url": "https://www.pcfinancial.ca",
    "twitter": "PCFinancial",
    "facebook": "PCFinancial",
    "img": "presidentschoice.png",
    "tfa": false
  },
  "https://www.progressive.com": {
    "name": "Progressive",
    "url": "https://www.progressive.com",
    "twitter": "progressive",
    "facebook": "progressive",
    "img": "progressive.png",
    "tfa": false
  },
  "http://www.quickbooks.com": {
    "name": "Quickbooks Online",
    "url": "http://www.quickbooks.com",
    "img": "quickbooks.png",
    "tfa": true,
    "sms": true,
    "phone": true,
    "software": true,
    "doc": "https://community.intuit.com/articles/1164912-multi-factor-authentication-faq"
  },
  "http://www.quickfile.co.uk": {
    "name": "QuickFile",
    "url": "http://www.quickfile.co.uk",
    "img": "quickfile.png",
    "tfa": true,
    "software": true,
    "doc": "https://community.quickfile.co.uk/t/2-factor-authentication/8892"
  },
  "https://www.quizzle.com": {
    "name": "Quizzle",
    "url": "https://www.quizzle.com",
    "img": "quizzle.png",
    "tfa": false,
    "twitter": "Quizzle"
  },
  "https://www.shoeboxed.com": {
    "name": "Shoeboxed",
    "url": "https://www.shoeboxed.com/",
    "twitter": "Shoeboxed",
    "facebook": "shoeboxed",
    "img": "shoeboxed.png",
    "tfa": false
  },
  "https://simpletax.ca": {
    "name": "SimpleTax",
    "url": "https://simpletax.ca/",
    "img": "simpletax.png",
    "tfa": true,
    "software": true,
    "doc": "https://help.simpletax.ca/questions/two-factor-authentication"
  },
  "https://www.taxact.com": {
    "name": "Taxact",
    "url": "https://www.taxact.com",
    "img": "taxact.png",
    "tfa": true,
    "email": true,
    "sms": true,
    "doc": "https://www.taxact.com/support/24138/2016/how-is-a-verification-code-used"
  },
  "https://transferwise.com": {
    "name": "TransferWise",
    "url": "https://transferwise.com",
    "img": "transferwise.png",
    "tfa": true,
    "sms": true,
    "phone": true,
    "software": true,
    "doc": "https://transferwise.com/help/article/2811597/borderless-account/how-can-i-setup-2-step-login"
  },
  "https://www.treasurydirect.gov": {
    "name": "Treasury Direct",
    "url": "https://www.treasurydirect.gov",
    "img": "treasurydirect.png",
    "tfa": true,
    "email": true
  },
  "https://www.valic.com": {
    "name": "Valic",
    "url": "https://www.valic.com/",
    "twitter": "VALIC_retire",
    "facebook": "valic",
    "img": "valic.png",
    "tfa": false
  },
  "https://www.vitality.co.uk": {
    "name": "Vitality",
    "url": "https://www.vitality.co.uk",
    "twitter": "Vitality_UK",
    "facebook": "VitalityUK",
    "img": "vitality.png",
    "tfa": false
  },
  "https://www.waveapps.com": {
    "name": "WaveApps",
    "url": "https://www.waveapps.com",
    "img": "wave.png",
    "tfa": false,
    "twitter": "wavehq",
    "facebook": "waveHQ"
  },
  "https://www.xero.com": {
    "name": "Xero",
    "url": "https://www.xero.com/",
    "img": "xero.png",
    "tfa": true,
    "software": true,
    "doc": "https://help.xero.com/nz/MyXero_Two-Step_About"
  },
  "https://www.youneedabudget.com": {
    "name": "You Need A Budget (YNAB)",
    "url": "https://www.youneedabudget.com/",
    "twitter": "ynab",
    "facebook": "iYNAB",
    "img": "ynab.png",
    "tfa": false
  },
  "https://dutchbros.com": {
    "name": "Dutch Bros",
    "url": "https://dutchbros.com/",
    "img": "dutchbros.png",
    "tfa": false,
    "twitter": "DutchBros",
    "facebook": "dutchbros"
  },
  "https://max.se": {
    "name": "Max",
    "url": "https://max.se/",
    "img": "max.png",
    "tfa": false,
    "twitter": "maxhamburgare",
    "facebook": "maxhamburgare",
    "lang": "sv"
  },
  "http://www.starbucks.com": {
    "name": "Starbucks",
    "url": "http://www.starbucks.com/",
    "img": "starbucks.png",
    "tfa": false,
    "twitter": "Starbucks",
    "facebook": "Starbucks"
  },
  "https://www.tacobell.com": {
    "name": "Taco Bell",
    "url": "https://www.tacobell.com",
    "img": "tacobell.png",
    "tfa": false,
    "twitter": "tacobell",
    "facebook": "tacobell"
  },
  "https://www.ankama.com": {
    "name": "Ankama",
    "url": "https://www.ankama.com",
    "img": "ankama.png",
    "tfa": true,
    "email": true,
    "software": true,
    "doc": "https://support.ankama.com/hc/en-us/categories/200093427-DOFUS-Security"
  },
  "https://www.blackdesertonline.com": {
    "name": "Black Desert Online",
    "url": "https://www.blackdesertonline.com/",
    "img": "bdo.png",
    "twitter": "BDO_News",
    "facebook": "BlackDesertOnline",
    "tfa": false
  },
  "http://www.bladeandsoul.com": {
    "name": "Blade & Soul",
    "url": "http://www.bladeandsoul.com/",
    "img": "bladeandsoul.png",
    "tfa": true,
    "software": true,
    "doc": "https://support.bladeandsoul.com/hc/en-us/articles/207578553-Supported-Two-Step-OTP-Authentication-Verification-Methods"
  },
  "http://blizzard.com": {
    "name": "Blizzard",
    "url": "http://blizzard.com",
    "img": "blizzard.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "hardware": true,
    "doc": "https://us.battle.net/support/en/article/Blizzard-Authenticator"
  },
  "https://www.curse.com": {
    "name": "Curse",
    "url": "https://www.curse.com/",
    "img": "curse.png",
    "tfa": false,
    "twitter": "curseapp",
    "facebook": "curseapp"
  },
  "http://www.elderscrollsonline.com": {
    "name": "Elder Scrolls Online",
    "url": "http://www.elderscrollsonline.com/",
    "img": "eso.png",
    "tfa": true,
    "email": true,
    "doc": "https://help.elderscrollsonline.com/app/answers/detail/a_id/8611"
  },
  "https://www.ea.com": {
    "name": "Electronic Arts (Origin)",
    "url": "https://www.ea.com/",
    "img": "ea.png",
    "tfa": true,
    "email": true,
    "sms": true,
    "software": true,
    "doc": "https://help.ea.com/en-us/help/account/origin-login-verification-information/"
  },
  "http://www.enjin.com": {
    "name": "Enjin",
    "url": "http://www.enjin.com/",
    "img": "enjin.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "exceptions": {
      "text": "2FA is only available on paid plans."
    },
    "doc": "https://support.enjin.com/hc/en-us/articles/201090770-2-Factor-Authentication-Authy-"
  },
  "https://www.epicgames.com": {
    "name": "EpicGames",
    "url": "https://www.epicgames.com/",
    "twitter": "EpicGames",
    "facebook": "epicgamesinc",
    "img": "epicgames.png",
    "tfa": false
  },
  "https://www.eveonline.com": {
    "name": "EVE Online",
    "url": "https://www.eveonline.com/",
    "img": "eveonline.png",
    "tfa": true,
    "email": true,
    "software": true,
    "doc": "https://support.eveonline.com/hc/en-us/articles/203465601-Two-Factor-Authentication-and-Authenticator"
  },
  "https://www.faceit.com": {
    "name": "FaceIT",
    "url": "https://www.faceit.com",
    "img": "faceit.png",
    "tfa": true,
    "software": true,
    "doc": "https://support.faceit.com/hc/en-us/articles/115000254670-Enabling-2-Factor-Authentication-"
  },
  "https://gaijin.net": {
    "name": "Gaijin Entertainment",
    "url": "https://gaijin.net",
    "img": "gaijin.png",
    "tfa": true,
    "email": true,
    "sms": true,
    "software": true,
    "doc": "https://support.gaijin.net/hc/en-us/articles/203623622-How-to-set-up-the-Two-Step-Authorization-Google-Authenticator-",
    "exceptions": {
      "text": "A verified phone number is required for the use of two-factor authentication through email or software."
    }
  },
  "https://www.gamefly.com": {
    "name": "GameFly",
    "url": "https://www.gamefly.com/",
    "twitter": "GameFly",
    "facebook": "gamefly",
    "img": "gamefly.png",
    "tfa": false
  },
  "https://intl.garena.com": {
    "name": "Garena Online",
    "url": "https://intl.garena.com",
    "img": "garena.png",
    "tfa": true,
    "software": true,
    "doc": "https://account.garena.com/",
    "exceptions": {
      "text": "A mobile phone and Garena account level 3 or higher is required for 2FA."
    }
  },
  "http://www.geforce.com": {
    "name": "GeForce (Nvidia)",
    "url": "http://www.geforce.com/",
    "twitter": "NVIDIAGeForce",
    "facebook": "NVIDIAGeForce",
    "img": "geforce.png",
    "tfa": false
  },
  "https://www.gog.com": {
    "name": "GOG.com",
    "url": "https://www.gog.com",
    "img": "gog.png",
    "tfa": true,
    "email": true,
    "doc": "https://www.gog.com/support/support_view/twostep_login_faq"
  },
  "http://product.gree.net": {
    "name": "GREE",
    "url": "http://product.gree.net/",
    "img": "gree.png",
    "tfa": true,
    "software": true,
    "doc": "https://twofactorauth.org/notes/gree/"
  },
  "https://www.guildwars2.com": {
    "name": "Guild Wars 2",
    "url": "https://www.guildwars2.com",
    "img": "guildwars2.png",
    "sms": true,
    "tfa": true,
    "email": true,
    "phone": true,
    "software": true,
    "doc": "https://help.guildwars2.com/hc/en-us/articles/230672927-Securing-Your-Account-With-Authentication"
  },
  "https://www.humblebundle.com": {
    "name": "Humble Bundle",
    "url": "https://www.humblebundle.com/",
    "img": "humble.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://support.humblebundle.com/hc/en-us/articles/202421374"
  },
  "https://www.indiegala.com": {
    "name": "IndieGala",
    "url": "https://www.indiegala.com/",
    "img": "indiegala.png",
    "twitter": "IndieGala",
    "facebook": "IndieGala",
    "tfa": false
  },
  "https://itch.io": {
    "name": "itch.io",
    "url": "https://itch.io/",
    "img": "itchio.png",
    "tfa": true,
    "software": true,
    "doc": "http://itch.io/developers/two-factor-authentication"
  },
  "http://leagueoflegends.com": {
    "name": "League of Legends",
    "url": "http://leagueoflegends.com",
    "twitter": "leagueoflegends",
    "facebook": "leagueoflegends",
    "img": "leagueoflegends.png",
    "tfa": false
  },
  "https://mojang.com": {
    "name": "Mojang",
    "url": "https://mojang.com/",
    "twitter": "MojangSupport",
    "img": "mojang.png",
    "tfa": false
  },
  "https://accounts.nintendo.com": {
    "name": "Nintendo Account",
    "url": "https://accounts.nintendo.com/",
    "img": "nintendo-account.png",
    "tfa": true,
    "software": true,
    "doc": "http://en-americas-support.nintendo.com/app/answers/detail/a_id/27496",
    "exceptions": {
      "text": "2FA not available for child accounts (users 12 years of age or younger) or supervised accounts (users 13 years of age or older attached to a parent account)."
    }
  },
  "https://id.nintendo.net": {
    "name": "Nintendo Network",
    "url": "https://id.nintendo.net/",
    "twitter": "NintendoAmerica",
    "facebook": "Nintendo",
    "img": "nintendo-network.png",
    "tfa": false
  },
  "https://www.playstation.com": {
    "name": "Playstation Network",
    "url": "https://www.playstation.com/",
    "img": "psn.png",
    "tfa": true,
    "sms": true,
    "doc": "https://www.playstation.com/en-us/account-security/2-step-verification/"
  },
  "https://robertsspaceindustries.com": {
    "name": "Roberts Space Industries",
    "url": "https://robertsspaceindustries.com/",
    "img": "robertsspaceindustries.png",
    "tfa": true,
    "software": true,
    "email": true,
    "doc": "https://robertsspaceindustries.com/faq/two-step-authentication"
  },
  "https://socialclub.rockstargames.com": {
    "name": "Rockstar Games Social Club",
    "url": "https://socialclub.rockstargames.com",
    "twitter": "RockstarSupport",
    "facebook": "rockstargames",
    "img": "rockstargames.png",
    "tfa": false
  },
  "http://www.runescape.com": {
    "name": "RuneScape",
    "url": "http://www.runescape.com/",
    "img": "runescape.png",
    "tfa": true,
    "software": true,
    "doc": "https://support.runescape.com/hc/en-gb/articles/206811835-Setting-the-Authenticator-Mobile-Device"
  },
  "http://na.square-enix.com": {
    "name": "Square Enix",
    "url": "http://na.square-enix.com/",
    "img": "squarenix.png",
    "tfa": true,
    "software": true,
    "hardware": true,
    "doc": "http://www.square-enix.com/na/account/otp/",
    "exceptions": {
      "text": "Software implementation requires you to have purchased either Final Fantasy XI or Final Fantasy XIV and registered the game."
    }
  },
  "http://www.swtor.com": {
    "name": "Star Wars: The Old Republic",
    "url": "http://www.swtor.com/",
    "img": "swtor.png",
    "tfa": true,
    "software": true,
    "hardware": true,
    "doc": "http://www.swtor.com/info/security-key"
  },
  "https://www.stardock.com": {
    "name": "Stardock Corporation",
    "url": "https://www.stardock.com/",
    "twitter": "Stardock",
    "facebook": "official.stardock",
    "img": "stardock.png",
    "tfa": false
  },
  "http://store.steampowered.com": {
    "name": "Steam",
    "url": "http://store.steampowered.com/",
    "img": "steam.png",
    "tfa": true,
    "email": true,
    "software": true,
    "doc": "https://support.steampowered.com/kb_article.php?ref=8625-WRAH-9030",
    "exceptions": {
      "text": "Software implementation requires use of the Steam Mobile app. Authentication on non-phone devices is not officially supported. SMS support is limited to receiving account recovery codes for password resets."
    }
  },
  "http://www.tibia.com": {
    "name": "Tibia",
    "url": "http://www.tibia.com/",
    "img": "tibia.png",
    "tfa": true,
    "software": true,
    "doc": "http://www.tibia.com/support/?subtopic=faq&question=authenticator"
  },
  "http://www.trionworlds.com": {
    "name": "Trion Worlds",
    "url": "http://www.trionworlds.com/en/",
    "img": "trionworlds.png",
    "tfa": true,
    "email": true,
    "software": true,
    "doc": "https://support.trionworlds.com/hc/en-us/articles/204183357-Adding-a-Mobile-Authenticator"
  },
  "https://uplay.ubi.com": {
    "name": "Ubisoft/Uplay",
    "url": "https://uplay.ubi.com/",
    "img": "uplay.png",
    "tfa": true,
    "software": true,
    "doc": "http://forums.ubi.com/showthread.php/1463703-Secure-your-account-with-2-Step-Verification"
  },
  "http://wargaming.net": {
    "name": "Wargaming",
    "url": "http://wargaming.net/",
    "tfa": true,
    "software": true,
    "img": "wargaming.png",
    "doc": "https://wargaming.net/support/kb/articles/792"
  },
  "https://www.wildstar-online.com": {
    "name": "WildStar",
    "url": "https://www.wildstar-online.com/",
    "img": "wildstar.png",
    "tfa": true,
    "software": true,
    "doc": "https://support.wildstar-online.com/hc/en-us/articles/203982369-Two-Step-Verification-FAQ"
  },
  "https://www.xbox.com": {
    "name": "Xbox Live",
    "url": "https://www.xbox.com/live",
    "img": "xbox.png",
    "tfa": true,
    "sms": true,
    "email": true,
    "software": true,
    "doc": "http://windows.microsoft.com/en-us/windows/two-step-verification-faq"
  },
  "https://www.yoyogames.com": {
    "name": "YoYo Games",
    "url": "https://www.yoyogames.com/",
    "img": "yoyogames.png",
    "tfa": true,
    "email": true,
    "software": true,
    "doc": "http://help.yoyogames.com/hc/en-us/articles/216757288-Creating-a-YoYo-Account"
  },
  "http://www.agenziaentrate.gov.it": {
    "name": "Agenzia delle Entrate",
    "url": "http://www.agenziaentrate.gov.it/",
    "img": "agenziaentrate.png",
    "tfa": false,
    "twitter": "Agenzia_Entrate",
    "facebook": "agenziadelleentrate",
    "lang": "it"
  },
  "http://www.cra-arc.gc.ca": {
    "name": "Canada Revenue Agency",
    "url": "http://www.cra-arc.gc.ca",
    "img": "canadarevenueagency.png",
    "tfa": false,
    "twitter": "canrevagency"
  },
  "https://www.digid.nl": {
    "name": "DigiD",
    "url": "https://www.digid.nl/",
    "img": "digid.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "phone": true,
    "doc": "https://www.digid.nl/nl/vraag-en-antwoord/hoe-kan-ik-de-sms-controle-toevoegen/",
    "exceptions": {
      "text": "Software 2FA requires DigiD app and SMS or phone call. One account per device."
    }
  },
  "https://studentaid.ed.gov": {
    "name": "Federal Student Aid",
    "url": "https://studentaid.ed.gov",
    "img": "federalstudentaid.png",
    "tfa": false,
    "twitter": "FAFSA",
    "facebook": "FederalStudentAid"
  },
  "https://healthcare.gov": {
    "name": "Healthcare.gov",
    "url": "https://healthcare.gov",
    "twitter": "HealthCareGov",
    "img": "healthcaregov.png",
    "tfa": false
  },
  "https://hmrc.gov.uk": {
    "name": "HMRC",
    "url": "https://hmrc.gov.uk",
    "img": "hmrc.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://www.gov.uk/government/publications/genuine-hmrc-contact-and-recognising-phishing-emails/genuine-hmrc-contact-and-recognising-phishing-emails#hmrc-short-message-service-text-messages"
  },
  "https://my.gov.au": {
    "name": "myGov",
    "url": "https://my.gov.au",
    "img": "mygov.png",
    "tfa": true,
    "sms": true,
    "doc": "https://my.gov.au/mygov/content/html/help.html#sec-features"
  },
  "https://www.realme.govt.nz": {
    "name": "RealMe",
    "url": "https://www.realme.govt.nz/",
    "img": "realme.png",
    "tfa": true,
    "sms": true,
    "hardware": true,
    "software": true,
    "doc": "https://www.realme.govt.nz/help/#second-factor-authentication"
  },
  "https://www.skatteverket.se": {
    "name": "Skatteverket",
    "url": "https://www.skatteverket.se",
    "img": "skatteverket.png",
    "tfa": true,
    "hardware": true,
    "software": true,
    "doc": "https://www.skatteverket.se/privat/sjalvservice/allaetjanster/omelegitimation.4.18e1b10334ebe8bc80004811.html"
  },
  "https://www.gov.uk": {
    "name": "UK Companies House",
    "url": "https://www.gov.uk/companieshouse",
    "img": "companieshouse.png",
    "tfa": false,
    "twitter": "CompaniesHouse",
    "facebook": "CompaniesHouse"
  },
  "http://www.irs.gov": {
    "name": "US Internal Revenue Service",
    "url": "http://www.irs.gov/Individuals/Get-Transcript",
    "twitter": "IRSnews",
    "img": "usirs.png",
    "tfa": false
  },
  "https://www.ssa.gov": {
    "name": "US Social Security Administration",
    "url": "https://www.ssa.gov",
    "img": "usssa.png",
    "tfa": true,
    "sms": true,
    "doc": "https://secure.ssa.gov/RIL/HpsView.do#question3"
  },
  "https://www.23andme.com": {
    "name": "23andMe",
    "url": "https://www.23andme.com/",
    "twitter": "23andMe",
    "facebook": "23andMe",
    "img": "23andme.png",
    "tfa": false
  },
  "https://www.carilionclinic.org": {
    "name": "Carilion Clinic",
    "url": "https://www.carilionclinic.org",
    "img": "carilionclinic.png",
    "tfa": false,
    "twitter": "CarilionClinic",
    "facebook": "carilionclinic",
    "email_address": "direct@carilionclinic.org"
  },
  "https://www.caremark.com": {
    "name": "CVS Caremark",
    "url": "https://www.caremark.com",
    "twitter": "CVSHealth",
    "facebook": "CVS",
    "img": "cvscaremark.png",
    "tfa": false
  },
  "https://www.drchrono.com": {
    "name": "drchrono",
    "url": "https://www.drchrono.com",
    "img": "drchrono.png",
    "tfa": true,
    "software": true,
    "doc": "https://www.drchrono.com/blog/two-factor-authentication-extra-security-for-your-health-records/"
  },
  "https://www.drugs.com": {
    "name": "Drugs.com",
    "url": "https://www.drugs.com/",
    "twitter": "DrugsCom",
    "facebook": "Drugscom",
    "img": "drugscom.png",
    "tfa": false,
    "status": "https://twitter.com/Drugscom/status/493856207572975620"
  },
  "https://www.elationhealth.com": {
    "name": "Elation Health",
    "url": "https://www.elationhealth.com/",
    "twitter": "ElationHealth",
    "facebook": "ElationHealth",
    "img": "elationhealth.png",
    "tfa": false
  },
  "https://www.fitbit.com": {
    "name": "FitBit",
    "url": "https://www.fitbit.com/",
    "twitter": "fitbit",
    "facebook": "fitbit",
    "img": "fitbit.png",
    "tfa": false
  },
  "https://www.followmyhealth.com": {
    "name": "FollowMyHealth",
    "url": "https://www.followmyhealth.com/",
    "img": "followmyhealth.png",
    "tfa": true,
    "sms": true,
    "email": true,
    "software": true,
    "doc": "http://support.followmyhealth.com/customer/portal/articles/1309938-fmh-secure-login-2-step-verification---break-down"
  },
  "https://fit.google.com": {
    "name": "Google Fit",
    "url": "https://fit.google.com",
    "img": "googlefit.png",
    "tfa": true,
    "sms": true,
    "phone": true,
    "hardware": true,
    "software": true,
    "doc": "https://www.google.com/intl/en-US/landing/2step/features.html"
  },
  "https://www.healthvault.com": {
    "name": "HealthVault (w/Microsoft Account)",
    "url": "https://www.healthvault.com",
    "img": "healthvault.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "http://windows.microsoft.com/en-au/windows/two-step-verification-faq"
  },
  "https://www.hint.com": {
    "name": "Hint Health",
    "url": "https://www.hint.com",
    "img": "hint.png",
    "tfa": false,
    "twitter": "HintHealth",
    "facebook": "hinthealth"
  },
  "https://www.medicalert.ca": {
    "name": "MedicAlert",
    "url": "https://www.medicalert.ca",
    "img": "medicalert.png",
    "twitter": "MedicAlertCA",
    "tfa": false
  },
  "https://misfit.com": {
    "name": "Misfit",
    "url": "https://misfit.com/",
    "twitter": "Misfit",
    "img": "misfit.png",
    "tfa": false
  },
  "https://www.myfitnesspal.com": {
    "name": "myfitnesspal",
    "url": "https://www.myfitnesspal.com",
    "twitter": "myfitnesspal",
    "facebook": "myfitnesspal",
    "img": "myfitnesspal.png",
    "tfa": false
  },
  "https://health.nokia.com": {
    "name": "Nokia Health (Withings)",
    "url": "https://health.nokia.com/",
    "twitter": "NokiaHealth",
    "facebook": "NokiaHealth",
    "img": "nokiahealth.png",
    "tfa": false
  },
  "https://www.runtastic.com": {
    "name": "Runtastic",
    "url": "https://www.runtastic.com",
    "twitter": "Runtastic",
    "facebook": "runtastic",
    "img": "runtastic.png",
    "tfa": false
  },
  "https://thriva.co": {
    "name": "Thriva",
    "url": "https://thriva.co",
    "twitter": "thrivahealth",
    "facebook": "thriva",
    "img": "thriva.png",
    "tfa": false
  },
  "http://www.webmd.com": {
    "name": "WebMD",
    "url": "http://www.webmd.com",
    "twitter": "WebMD",
    "facebook": "WebMD",
    "img": "webmd.png",
    "tfa": false
  },
  "https://www.34sp.com": {
    "name": "34SP.com",
    "url": "https://www.34SP.com",
    "img": "34sp.png",
    "tfa": true,
    "software": true,
    "doc": "https://www.34sp.com/kb/142/how-to-enable-two-factor-authentication-on-your-account"
  },
  "https://arpnetworks.com": {
    "name": "ARP Networks",
    "url": "https://arpnetworks.com/",
    "img": "arpnetworks.png",
    "tfa": false,
    "twitter": "arpnetworks"
  },
  "https://www.binarylane.com.au": {
    "name": "Binary Lane",
    "url": "https://www.binarylane.com.au/",
    "img": "binarylane.png",
    "tfa": true,
    "software": true,
    "doc": "https://www.binarylane.com.au/support/solutions/articles/1000199372-two-factor-authentication"
  },
  "https://www.binero.se": {
    "name": "Binero",
    "url": "https://www.binero.se",
    "img": "binero.png",
    "tfa": true,
    "software": true,
    "doc": "https://blogg.binero.se/2017/10/tvafaktorsautentisering/"
  },
  "https://www.bluehost.com": {
    "name": "Bluehost",
    "url": "https://www.bluehost.com/",
    "img": "bluehost.png",
    "tfa": true,
    "software": true,
    "email": true,
    "doc": "https://my.bluehost.com/cgi/help/two-factor-authentication"
  },
  "https://cdnsun.com": {
    "name": "CDNsun",
    "url": "https://cdnsun.com",
    "img": "cdnsun.png",
    "tfa": true,
    "software": true,
    "doc": "https://cdnsun.com/knowledgebase/billing/two-factor-authentication"
  },
  "https://chunkhost.com": {
    "name": "ChunkHost",
    "url": "https://chunkhost.com",
    "img": "chunkhost.png",
    "tfa": true,
    "software": true
  },
  "http://cloudatcost.com": {
    "name": "CloudAtCost",
    "url": "http://cloudatcost.com",
    "img": "cloudatcost.png",
    "twitter": "cloudatcost",
    "tfa": false
  },
  "https://www.cloudways.com": {
    "name": "Cloudways",
    "url": "https://www.cloudways.com/",
    "img": "cloudways.png",
    "tfa": true,
    "software": true,
    "doc": "https://support.cloudways.com/enabling-two-factor-authentication-for-your-cloudways-account/"
  },
  "https://contabo.de": {
    "name": "Contabo",
    "url": "https://contabo.de/",
    "img": "contabo.png",
    "tfa": false,
    "twitter": "ContaboCom",
    "facebook": "ContaboDe",
    "email_address": "support@contabo.de",
    "lang": "de"
  },
  "https://www.cyon.ch": {
    "name": "cyon",
    "url": "https://www.cyon.ch",
    "img": "cyon.png",
    "tfa": true,
    "software": true,
    "doc": "https://www.cyon.ch/support/a/225/wie-aktiviere-ich-die-zwei-schritt-verifizierung"
  },
  "https://www.dediserve.com": {
    "name": "DediServe",
    "url": "https://www.dediserve.com",
    "img": "dediserve.png",
    "tfa": true,
    "software": true,
    "doc": "https://www.dediserve.com/blog/2016/12/01/2-factor-authentication-now-launched"
  },
  "https://dreamhost.com": {
    "name": "Dreamhost",
    "url": "https://dreamhost.com",
    "img": "dreamhost.png",
    "tfa": true,
    "software": true,
    "doc": "http://wiki.dreamhost.com/Enabling_Multifactor_Authentication"
  },
  "https://easy.gr": {
    "name": "Easy",
    "url": "https://easy.gr/",
    "img": "easy.png",
    "tfa": true,
    "software": true,
    "doc": "https://easy.gr/el/faq"
  },
  "https://www.fastly.com": {
    "name": "Fastly",
    "url": "https://www.fastly.com",
    "img": "fastly.png",
    "tfa": true,
    "software": true,
    "doc": "https://docs.fastly.com/guides/account-management-and-security/enabling-and-disabling-two-factor-authentication"
  },
  "https://fsdata.se": {
    "name": "FS Data",
    "url": "https://fsdata.se/",
    "img": "fsdata.png",
    "tfa": false,
    "twitter": "fsdata",
    "facebook": "fsdata",
    "email_address": "info@fsdata.se",
    "lang": "sv"
  },
  "http://glesys.com": {
    "name": "Glesys",
    "url": "http://glesys.com/",
    "img": "glesys.png",
    "tfa": true,
    "software": true,
    "hardware": true
  },
  "https://www.globat.com": {
    "name": "Globat",
    "url": "https://www.globat.com/",
    "img": "globat.png",
    "tfa": false,
    "twitter": "globat"
  },
  "https://www.hetzner.de": {
    "name": "Hetzner Online",
    "url": "https://www.hetzner.de/",
    "img": "hetzner.png",
    "tfa": true,
    "software": true,
    "hardware": true
  },
  "https://www.hostens.com": {
    "name": "Hostens",
    "url": "https://www.hostens.com/",
    "img": "hostens.png",
    "tfa": true,
    "software": true,
    "doc": "https://billing.hostens.com/knowledgebase/article/29/how-to-enhance-account-security-/"
  },
  "https://hosthatch.com": {
    "name": "HostHatch",
    "url": "https://hosthatch.com/",
    "img": "hosthatch.png",
    "tfa": true,
    "software": true
  },
  "https://www.icuk.net": {
    "name": "ICUK",
    "url": "https://www.icuk.net",
    "img": "icuk.png",
    "tfa": true,
    "software": true,
    "doc": "https://www.icuk.net/reseller/security.asp"
  },
  "https://www.infomaniak.com": {
    "name": "Infomaniak",
    "url": "https://www.infomaniak.com/",
    "img": "infomaniak.png",
    "tfa": true,
    "software": true,
    "doc": "https://www.infomaniak.ch/en/support/faq/1940"
  },
  "https://iniz.com": {
    "name": "INIZ",
    "url": "https://iniz.com",
    "img": "iniz.png",
    "tfa": true,
    "software": true,
    "doc": "https://my.iniz.com/knowledgebase/24/Securing-Your-Account-2FA.html"
  },
  "https://www.inleed.se": {
    "name": "Inleed",
    "url": "https://www.inleed.se",
    "img": "inleed.png",
    "twitter": "Inleed",
    "facebook": "Inleed",
    "email_address": "support@inleed.se",
    "tfa": false,
    "lang": "sv"
  },
  "https://www.inmotionhosting.com": {
    "name": "InMotion Hosting",
    "url": "https://www.inmotionhosting.com/",
    "twitter": "inmotionhosting",
    "img": "inmotion.png",
    "tfa": false
  },
  "https://www.iozoom.com": {
    "name": "IO Zoom",
    "url": "https://www.iozoom.com",
    "img": "iozoom.png",
    "tfa": true,
    "software": true,
    "doc": "https://www.iozoom.com/client/announcements.php?id=6"
  },
  "https://www.ipage.com": {
    "name": "iPage",
    "url": "https://www.ipage.com/ipage/index.html",
    "twitter": "iPage",
    "img": "ipage.png",
    "tfa": false
  },
  "https://kinsta.com": {
    "name": "Kinsta",
    "url": "https://kinsta.com",
    "img": "kinsta.png",
    "tfa": true,
    "software": true,
    "doc": "https://kinsta.com/blog/wordpress-two-factor-authentication/"
  },
  "https://www.lcn.com": {
    "name": "LCN.com",
    "url": "https://www.lcn.com",
    "twitter": "lcndotcom",
    "facebook": "lcndotcom",
    "img": "lcn.png",
    "tfa": false
  },
  "https://www.liquidweb.com": {
    "name": "Liquid Web",
    "url": "https://www.liquidweb.com",
    "img": "liquidweb.png",
    "tfa": true,
    "software": true,
    "doc": "https://www.liquidweb.com/kb/how-to-enable-two-factor-authentication-2fa/"
  },
  "https://www.mammoth.net.au": {
    "name": "Mammoth Networks",
    "url": "https://www.mammoth.net.au/",
    "img": "mammothnetworks.png",
    "tfa": true,
    "software": true,
    "doc": "https://www.mammoth.net.au/news/2012/10/22/two-factor-authentication-now-available"
  },
  "https://www.maxcdn.com": {
    "name": "MaxCDN",
    "url": "https://www.maxcdn.com",
    "img": "maxcdn.png",
    "tfa": true,
    "software": true,
    "doc": "https://www.maxcdn.com/one/tutorial/enable-two-step-verification/"
  },
  "https://mediatemple.net": {
    "name": "Media Temple",
    "url": "https://mediatemple.net/",
    "twitter": "mediatemple",
    "img": "mediatemple.png",
    "tfa": false
  },
  "https://misshosting.com": {
    "name": "Miss Hosting",
    "url": "https://misshosting.com/",
    "twitter": "misshostingcom",
    "facebook": "misshostingcom",
    "img": "misshosting.png",
    "tfa": false,
    "lang": "sv"
  },
  "https://www.mittwald.de": {
    "name": "Mittwald",
    "url": "https://www.mittwald.de/",
    "twitter": "mittwald",
    "img": "mittwald.png",
    "tfa": false,
    "lang": "de"
  },
  "https://netcup.eu": {
    "name": "Netcup",
    "url": "https://netcup.eu/",
    "img": "netcup.png",
    "tfa": true,
    "software": true,
    "doc": "http://www.netcup-wiki.de/wiki/Stammdaten_CCP#Zwei-Faktor-Authentifizierung_.282FA.29"
  },
  "https://server.nitrado.net": {
    "name": "Nitrado",
    "url": "https://server.nitrado.net/",
    "img": "nitrado.png",
    "tfa": true,
    "software": true,
    "hardware": true,
    "doc": "https://server.nitrado.net/deu/news2/view/nitrado-bietet-zweifaktorauthentifizierung/?f=index/mode:0/page:2"
  },
  "https://noez.de": {
    "name": "Noez",
    "url": "https://noez.de/",
    "img": "noez.png",
    "tfa": true,
    "software": true
  },
  "https://www.oderland.se": {
    "name": "Oderland",
    "url": "https://www.oderland.se/",
    "twitter": "oderlandab",
    "facebook": "oderland",
    "email_address": "support@oderland.se",
    "img": "oderland.png",
    "tfa": false,
    "lang": "sv"
  },
  "https://www.one.com": {
    "name": "One.com",
    "url": "https://www.one.com/",
    "twitter": "onecom",
    "img": "onecom.png",
    "tfa": false
  },
  "https://www.online.net": {
    "name": "Online",
    "url": "https://www.online.net/",
    "img": "online.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "exceptions": {
      "text": "SMS available only to customers in France."
    }
  },
  "https://www.ovh.com": {
    "name": "OVH",
    "url": "https://www.ovh.com/",
    "img": "ovh.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "hardware": true
  },
  "https://planethoster.net": {
    "name": "PlanetHoster",
    "url": "https://planethoster.net",
    "img": "PlanetHoster.png",
    "tfa": true,
    "software": true,
    "doc": "http://blog.planethoster.net/securite-espace-client-planethoster/"
  },
  "http://www.ramnode.com": {
    "name": "RamNode",
    "url": "http://www.ramnode.com",
    "img": "ramnode.png",
    "tfa": true,
    "software": true,
    "doc": "https://clientarea.ramnode.com/knowledgebase.php?action=displayarticle&id=70"
  },
  "https://www.section.io": {
    "name": "section.io",
    "url": "https://www.section.io",
    "img": "sectionio.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://www.section.io/docs/how-to/user-management/enable-two-factor-authentication-on-your-account/"
  },
  "https://www.site5.com": {
    "name": "Site5",
    "url": "https://www.site5.com/",
    "twitter": "site5",
    "img": "site5.png",
    "tfa": false
  },
  "https://www.softlayer.com": {
    "name": "Softlayer",
    "url": "https://www.softlayer.com",
    "img": "softlayer.png",
    "tfa": true,
    "software": true,
    "doc": "https://knowledgelayer.softlayer.com/procedure/configure-portal-account-one-time-password-access-manage"
  },
  "https://www.speedit.org": {
    "name": "SpeedIT Solutions",
    "url": "https://www.speedit.org/",
    "img": "speedit.png",
    "tfa": true,
    "software": true
  },
  "https://squarespace.com": {
    "name": "Squarespace",
    "url": "https://squarespace.com/",
    "twitter": "squarespace",
    "img": "squarespace.png",
    "tfa": false
  },
  "https://www.time4vps.eu": {
    "name": "Time4VPS",
    "url": "https://www.time4vps.eu/",
    "img": "time4vps.png",
    "tfa": true,
    "software": true,
    "doc": "https://billing.time4vps.eu/knowledgebase/article/100/2-factor-authentication/"
  },
  "https://www.transip.nl": {
    "name": "TransIP",
    "url": "https://www.transip.nl/",
    "img": "transip.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "hardware": true,
    "doc": "https://www.transip.nl/vragen/574-hoe-stel-two-factor-authentication/"
  },
  "https://www.ukfast.co.uk": {
    "name": "UKFast",
    "url": "https://www.ukfast.co.uk/",
    "img": "ukfast.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "hardware": true
  },
  "https://www.ukraine.com.ua": {
    "name": "Ukraine",
    "url": "https://www.ukraine.com.ua/",
    "img": "ukraine.png",
    "tfa": true,
    "sms": true,
    "phone": true,
    "software": true,
    "hardware": true,
    "doc": "https://www.ukraine.com.ua/faq/rekomendatsii-po-zashchite-ot-vzloma-uchetnoj-zapisi.html"
  },
  "https://www.upcloud.com": {
    "name": "UpCloud",
    "url": "https://www.upcloud.com",
    "img": "upcloud.png",
    "tfa": true,
    "software": true,
    "exceptions": {
      "text": "SMS is required for password recovery."
    },
    "doc": "https://www.upcloud.com/support/two-factor-authentication/"
  },
  "https://ventraip.com.au": {
    "name": "VentraIP",
    "url": "https://ventraip.com.au",
    "img": "ventraip.png",
    "tfa": true,
    "sms": true,
    "email": true,
    "doc": "https://ventraip.com.au/blog/products-and-services/vipcontrol-2-1/"
  },
  "https://www.versio.nl": {
    "name": "Versio",
    "url": "https://www.versio.nl",
    "img": "versio.png",
    "tfa": true,
    "software": true,
    "doc": "https://www.versio.nl/nieuws/twofactor-authenticatie-nu-beschikbaar-voor-uw-klantenaccount-205"
  },
  "https://www.vpsserver.com": {
    "name": "VPS Server",
    "url": "https://www.vpsserver.com/",
    "img": "vpsserver.png",
    "tfa": true,
    "software": true,
    "doc": "https://github.com/2factorauth/twofactorauth/pull/2311#issuecomment-273424695"
  },
  "https://www.webfaction.com": {
    "name": "WebFaction",
    "url": "https://www.webfaction.com",
    "img": "webfaction.png",
    "tfa": true,
    "software": true,
    "doc": "https://docs.webfaction.com/user-guide/control_panel.html#two-step-login"
  },
  "https://hosting.wedos.com": {
    "name": "Wedos",
    "url": "https://hosting.wedos.com",
    "img": "wedos.png",
    "tfa": true,
    "software": true,
    "doc": "https://kb.wedos.com/cs/zakaznik/otp.html"
  },
  "https://www.weebly.com": {
    "name": "Weebly",
    "url": "https://www.weebly.com",
    "img": "weebly.png",
    "tfa": false,
    "twitter": "weebly",
    "facebook": "weebly"
  },
  "https://wpengine.com": {
    "name": "WP Engine",
    "url": "https://wpengine.com/",
    "img": "wpengine.png",
    "tfa": true,
    "software": true,
    "doc": "https://wpengine.com/support/2-factor-authentication/"
  },
  "https://1password.com": {
    "name": "1Password",
    "url": "https://1password.com/",
    "img": "1password.png",
    "tfa": false,
    "email_address": "support@1password.com",
    "facebook": "1Password",
    "twitter": "1Password",
    "status": "https://twitter.com/1Password/status/809091553381777409"
  },
  "https://www.bitium.com": {
    "name": "Bitium",
    "url": "https://www.bitium.com",
    "img": "bitium.png",
    "tfa": true,
    "hardware": true,
    "software": true,
    "doc": "https://support.bitium.com/customer/portal/articles/1417358-enabling-two-factor-authentication-2fa-"
  },
  "https://bitwarden.com": {
    "name": "bitwarden",
    "url": "https://bitwarden.com",
    "img": "bitwarden.png",
    "tfa": true,
    "sms": true,
    "email": true,
    "phone": true,
    "software": true,
    "hardware": true,
    "exceptions": {
      "text": "Premium account required for Duo, YubiKey and FIDO U2F."
    },
    "doc": "https://help.bitwarden.com/article/setup-two-step-login/"
  },
  "https://www.centrify.com": {
    "name": "Centrify",
    "url": "https://www.centrify.com",
    "img": "centrify.png",
    "tfa": true,
    "sms": true,
    "email": true,
    "phone": true,
    "software": true,
    "doc": "https://www.centrify.com/solutions/why-multi-factor-authentication/"
  },
  "https://www.dashlane.com": {
    "name": "Dashlane",
    "url": "https://www.dashlane.com",
    "img": "dashlane.png",
    "tfa": true,
    "software": true,
    "hardware": true,
    "doc": "https://support.dashlane.com/hc/en-us/articles/202625042-Protect-your-account-using-Two-Factor-Authentication#title3"
  },
  "https://www.id.me": {
    "name": "ID.me",
    "url": "https://www.id.me/",
    "img": "idme.png",
    "tfa": false,
    "twitter": "IDme",
    "facebook": "IDmeInc",
    "email_address": "help@id.me"
  },
  "https://keepersecurity.com": {
    "name": "Keeper",
    "url": "https://keepersecurity.com/",
    "img": "keeper.png",
    "tfa": true,
    "software": true,
    "phone": true,
    "sms": true,
    "doc": "https://www.keepersecurity.com/security#twoFactor"
  },
  "https://keybase.io": {
    "name": "Keybase",
    "url": "https://keybase.io",
    "twitter": "KeybaseIO",
    "img": "keybase.png",
    "tfa": false
  },
  "https://lastpass.com": {
    "name": "LastPass",
    "url": "https://lastpass.com/",
    "img": "lastpass.png",
    "tfa": true,
    "software": true,
    "hardware": true,
    "doc": "https://helpdesk.lastpass.com/security-options/multifactor-authentication-options/"
  },
  "https://mydigipass.com": {
    "name": "MyDigipass.com",
    "url": "https://mydigipass.com/",
    "img": "mydigipass.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "hardware": true,
    "doc": "https://www.mydigipass.com/en/fp/signup"
  },
  "https://www.okta.com": {
    "name": "Okta",
    "url": "https://www.okta.com/",
    "img": "okta.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "phone": true,
    "email": true,
    "hardware": true,
    "doc": "https://help.okta.com/en/prod/Content/Topics/Security/MFA.htm"
  },
  "https://www.onelogin.com": {
    "name": "OneLogin",
    "url": "https://www.onelogin.com",
    "img": "onelogin.png",
    "tfa": true,
    "sms": true,
    "hardware": true,
    "software": true,
    "doc": "http://www.onelogin.com/product/strong-authentication/two-factor-authentication/"
  },
  "https://www.passpack.com": {
    "name": "Passpack",
    "url": "https://www.passpack.com/",
    "img": "passpack.png",
    "tfa": true,
    "email": true,
    "hardware": true,
    "doc": "https://help.passpack.com/knowledgebase/idx.php/44/0/"
  },
  "https://www.roboform.com": {
    "name": "RoboForm",
    "url": "https://www.roboform.com/",
    "img": "roboform.png",
    "tfa": true,
    "email": true,
    "sms": true,
    "software": true,
    "doc": "https://help.roboform.com/hc/en-us/articles/115002729512-Setting-up-Google-Authenticator-for-your-account"
  },
  "https://www.saaspass.com": {
    "name": "SAASPASS",
    "url": "https://www.saaspass.com",
    "img": "saaspass.png",
    "tfa": true,
    "sms": true,
    "software": true
  },
  "http://www.securesafe.com": {
    "name": "SecureSafe",
    "url": "http://www.securesafe.com",
    "img": "securesafe.png",
    "tfa": true,
    "sms": true,
    "exceptions": {
      "text": "2FA is only available on paid plans."
    },
    "doc": "http://www.securesafe.com/en/faq/security.html"
  },
  "https://www.truekey.com": {
    "name": "True Key",
    "url": "https://www.truekey.com",
    "img": "truekey.png",
    "tfa": true,
    "sms": true,
    "email": true,
    "software": true,
    "hardware": true,
    "doc": "https://help.truekey.com/hc/en-us/articles/218580447-How-can-I-add-additional-factors-"
  },
  "https://www.acorns.com": {
    "name": "Acorns",
    "url": "https://www.acorns.com/",
    "twitter": "acorns",
    "img": "acorns.png",
    "tfa": false
  },
  "https://www.americanfunds.com": {
    "name": "American Funds",
    "url": "https://www.americanfunds.com",
    "img": "americanfunds.png",
    "tfa": false,
    "twitter": "AmericanFunds",
    "facebook": "americanfunds"
  },
  "https://www.betterment.com": {
    "name": "Betterment",
    "url": "https://www.betterment.com/",
    "img": "betterment.png",
    "tfa": true,
    "software": true,
    "sms": true,
    "doc": "https://support.betterment.com/customer/en/portal/topics/1026376-two-factor-authentication-2fa-?b_id=9042"
  },
  "https://www.schwab.com": {
    "name": "Charles Schwab",
    "url": "https://www.schwab.com/",
    "img": "charlesschwab.png",
    "tfa": true,
    "software": true,
    "hardware": true,
    "doc": "https://twofactorauth.org/notes/schwab/"
  },
  "https://www.colfinancial.com": {
    "name": "COL Financial",
    "url": "https://www.colfinancial.com",
    "twitter": "COLfinancial",
    "img": "colfinancial.png",
    "tfa": false
  },
  "https://www.etrade.com": {
    "name": "E*Trade",
    "url": "https://www.etrade.com/",
    "img": "etrade.png",
    "tfa": true,
    "software": true,
    "hardware": true,
    "doc": "https://us.etrade.com/e/t/jumppage/viewjumppage?PageName=secureid_enter#"
  },
  "https://www.fidelity.com": {
    "name": "Fidelity Investments",
    "url": "https://www.fidelity.com",
    "img": "fidelity.png",
    "tfa": true,
    "software": true,
    "hardware": true,
    "exceptions": {
      "text": "Only available for some account types"
    },
    "doc": "https://twofactorauth.org/notes/fidelity/"
  },
  "https://www.flatex.de": {
    "name": "Flatex",
    "url": "https://www.flatex.de/",
    "email_address": "info@flatex.de",
    "twitter": "flatex",
    "facebook": "onlinebroker",
    "img": "flatex.png",
    "tfa": false,
    "lang": "de"
  },
  "http://www.healthequity.com": {
    "name": "HealthEquity",
    "url": "http://www.healthequity.com/",
    "twitter": "healthequity",
    "img": "healthequity.png",
    "tfa": false
  },
  "https://www.interactivebrokers.com": {
    "name": "Interactive Brokers",
    "url": "https://www.interactivebrokers.com",
    "img": "interactivebrokers.png",
    "tfa": true,
    "hardware": true,
    "software": true,
    "doc": "https://www.interactivebrokers.com/en/index.php?f=ibgStrength&p=log"
  },
  "https://www.jhancockpensions.com": {
    "name": "John Hancock Pensions",
    "url": "https://www.jhancockpensions.com",
    "twitter": "johnhancockusa",
    "facebook": "johnhancock",
    "email_address": "My401K@jhancock.com",
    "img": "johnhancock.png",
    "tfa": false
  },
  "http://www.manulife.ca": {
    "name": "Manulife",
    "url": "http://www.manulife.ca",
    "twitter": "Manulife",
    "img": "manulife.png",
    "tfa": false
  },
  "https://www.merrilledge.com": {
    "name": "Merrill Edge",
    "url": "https://www.merrilledge.com/",
    "img": "merrilledge.png",
    "tfa": true,
    "sms": true,
    "doc": "https://github.com/2factorauth/twofactorauth/issues/2275"
  },
  "https://www.motifinvesting.com": {
    "name": "MotifInvesting",
    "url": "https://www.motifinvesting.com/",
    "img": "motif.png",
    "tfa": true,
    "sms": true,
    "phone": true,
    "doc": "https://www.motifinvesting.com/security"
  },
  "https://www.nutmeg.com": {
    "name": "Nutmeg",
    "url": "https://www.nutmeg.com/",
    "img": "nutmeg.png",
    "tfa": true,
    "software": true,
    "doc": "https://support.nutmeg.com/hc/en-us/articles/115000495111-How-to-set-up-and-manage-2-step-verification"
  },
  "https://www.optionshouse.com": {
    "name": "OptionsHouse",
    "img": "optionshouse.png",
    "url": "https://www.optionshouse.com",
    "tfa": false,
    "twitter": "OptionsHouse"
  },
  "http://www.optionsxpress.com": {
    "name": "OptionsXpress",
    "url": "http://www.optionsxpress.com/",
    "twitter": "optionsXpress",
    "img": "optionsxpress.png",
    "tfa": false
  },
  "https://www.personalcapital.com": {
    "name": "Personal Capital",
    "url": "https://www.personalcapital.com",
    "img": "personalcapital.png",
    "tfa": true,
    "email": true,
    "phone": true,
    "doc": "https://www.personalcapital.com/safety-and-security"
  },
  "https://www.questrade.com": {
    "name": "Questrade",
    "url": "https://www.questrade.com",
    "img": "questrade.png",
    "tfa": false,
    "twitter": "Questrade",
    "status": "https://twitter.com/Questrade/status/864214855078866977"
  },
  "https://www.raizers.com": {
    "name": "Raizers",
    "url": "https://www.raizers.com",
    "img": "raizers.png",
    "tfa": false,
    "twitter": "Raizers"
  },
  "http://www.rbcdirectinvesting.com": {
    "name": "RBC Direct Investing",
    "url": "http://www.rbcdirectinvesting.com",
    "twitter": "RBC",
    "img": "rbc.png",
    "tfa": false
  },
  "https://www.robinhood.com": {
    "name": "Robinhood",
    "url": "https://www.robinhood.com/",
    "img": "robinhood.png",
    "tfa": true,
    "sms": true,
    "doc": "https://support.robinhood.com/hc/en-us/articles/211546986-Two-Factor-Authentication"
  },
  "https://www.scottrade.com": {
    "name": "Scottrade",
    "url": "https://www.scottrade.com/",
    "twitter": "scottrade",
    "img": "scottrade.png",
    "tfa": false
  },
  "https://www.sharebuilder.com": {
    "name": "Sharebuilder",
    "url": "https://www.sharebuilder.com/",
    "twitter": "sharebuilder",
    "img": "sharebuilder.png",
    "tfa": false
  },
  "https://www.sigfig.com": {
    "name": "SigFig",
    "url": "https://www.sigfig.com/",
    "twitter": "sigfiginsights",
    "img": "sigfig.png",
    "tfa": false
  },
  "https://www.tdameritrade.com": {
    "name": "TD Ameritrade",
    "url": "https://www.tdameritrade.com",
    "twitter": "TDAmeritrade",
    "img": "tdameritrade.png",
    "tfa": false
  },
  "https://www.tdwaterhouse.ca": {
    "name": "TD Waterhouse",
    "url": "https://www.tdwaterhouse.ca",
    "twitter": "TD_Canada",
    "img": "tdameritrade.png",
    "tfa": false
  },
  "https://www.tiaa-cref.org": {
    "name": "TIAA-CREF",
    "url": "https://www.tiaa-cref.org",
    "img": "tiaacref.png",
    "tfa": true,
    "sms": true,
    "phone": true
  },
  "https://www.tradeking.com": {
    "name": "TradeKing",
    "url": "https://www.tradeking.com",
    "twitter": "tradeking",
    "img": "tradeking.png",
    "tfa": false
  },
  "https://www.vanguard.com": {
    "name": "Vanguard",
    "url": "https://www.vanguard.com/",
    "img": "vanguard.png",
    "tfa": true,
    "sms": true,
    "phone": true,
    "hardware": true,
    "doc": "https://investornews.vanguard/sign-up-for-these-3-security-features/"
  },
  "https://www.wealthfront.com": {
    "name": "Wealthfront",
    "url": "https://www.wealthfront.com/",
    "img": "wealthfront.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://support.wealthfront.com/hc/en-us/articles/211004563-How-do-I-enable-two-step-authentication-for-my-account-"
  },
  "https://www.wealthsimple.com": {
    "name": "Wealthsimple",
    "url": "https://www.wealthsimple.com",
    "img": "wealthsimple.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://www.wealthsimple.com/magazine/2-step-verification"
  },
  "https://www.wisebanyan.com": {
    "name": "WiseBanyan",
    "url": "https://www.wisebanyan.com/",
    "twitter": "WiseBanyan",
    "img": "wisebanyan.png",
    "tfa": false
  },
  "https://ecobee.com": {
    "name": "ecobee",
    "url": "https://ecobee.com",
    "twitter": "ecobee",
    "facebook": "ecobee",
    "img": "ecobee.png",
    "tfa": false
  },
  "https://nest.com": {
    "name": "Nest",
    "url": "https://nest.com",
    "img": "nest.png",
    "tfa": true,
    "sms": true,
    "doc": "https://nest.com/support/article/How-to-use-2-step-verification-to-add-stronger-security-to-your-Nest-Account"
  },
  "https://noke.com": {
    "name": "Noke",
    "url": "https://noke.com",
    "img": "noke.png",
    "tfa": false,
    "twitter": "NokeLocks",
    "facebook": "nokelocks",
    "email_address": "support@noke.com"
  },
  "https://www.smartthings.com": {
    "name": "Samsung SmartThings",
    "url": "https://www.smartthings.com/",
    "img": "smartthings.png",
    "tfa": false,
    "twitter": "smartthings",
    "facebook": "smartthings"
  },
  "https://www.solarweb.com": {
    "name": "Solar.web",
    "url": "https://www.solarweb.com",
    "img": "solarweb.png",
    "tfa": false,
    "twitter": "FroniusUSASolar",
    "facebook": "FroniusUSASolarEnergy"
  },
  "https://www.tesla.com": {
    "name": "Tesla",
    "url": "https://www.tesla.com",
    "img": "tesla.png",
    "tfa": false,
    "twitter": "TeslaMotors",
    "facebook": "tesla"
  },
  "https://www.mytotalconnectcomfort.com": {
    "name": "Total Connect Comfort",
    "url": "https://www.mytotalconnectcomfort.com",
    "twitter": "Honeywell_Home",
    "facebook": "honeywellhome",
    "img": "totalconnect.png",
    "tfa": false
  },
  "https://www.clio.com": {
    "name": "Clio",
    "url": "https://www.clio.com",
    "img": "clio.png",
    "tfa": true,
    "software": true,
    "doc": "https://support.goclio.com/hc/en-us/articles/203184210-Two-Factor-Authentication"
  },
  "https://www.docusign.com": {
    "name": "Docusign",
    "url": "https://www.docusign.com",
    "img": "docusign.png",
    "tfa": true,
    "sms": true,
    "email": true,
    "phone": true,
    "doc": "https://support.docusign.com/en/guides/ndse-user-guide-two-step-verification"
  },
  "https://www.hellosign.com": {
    "name": "HelloSign",
    "url": "https://www.hellosign.com/",
    "img": "hellosign.png",
    "tfa": true,
    "sms": true,
    "exceptions": {
      "text": "Two-factor authentication is only available to paid Business plan senders and above."
    },
    "doc": "https://faq.hellosign.com/hc/en-us/articles/205714548-How-do-I-set-up-two-factor-authentication-"
  },
  "https://accounts.adobe.com": {
    "name": "Adobe ID",
    "url": "https://accounts.adobe.com/",
    "img": "adobe.png",
    "tfa": true,
    "sms": true,
    "email": true,
    "doc": "https://helpx.adobe.com/x-productkb/global/adobe-id-account-change.html#2-step-verification"
  },
  "https://www.aerohive.com": {
    "name": "Aerohive Networks",
    "url": "https://www.aerohive.com/",
    "img": "aerohive.png",
    "tfa": false,
    "twitter": "aerohive"
  },
  "https://www.airbnb.com": {
    "name": "Airbnb",
    "url": "https://www.airbnb.com/",
    "img": "airbnb.png",
    "tfa": false,
    "twitter": "airbnb"
  },
  "https://airtable.com": {
    "name": "Airtable",
    "url": "https://airtable.com",
    "img": "airtable.png",
    "tfa": true,
    "software": true,
    "sms": true,
    "doc": "https://support.airtable.com/hc/en-us/articles/219409917-Setting-up-two-factor-authentication"
  },
  "https://angel.co": {
    "name": "AngelList",
    "url": "https://angel.co",
    "img": "angellist.png",
    "tfa": true,
    "sms": true,
    "software": true
  },
  "https://auspost.com.au": {
    "name": "Australia Post",
    "url": "https://auspost.com.au/",
    "img": "auspost.png",
    "tfa": false,
    "twitter": "auspost"
  },
  "http://www.autodesk.com": {
    "name": "Autodesk",
    "url": "http://www.autodesk.com",
    "img": "autodesk.png",
    "tfa": true,
    "sms": true,
    "email": true,
    "phone": true,
    "software": true,
    "doc": "https://knowledge.autodesk.com/search-result/caas/sfdcarticles/sfdcarticles/Autodesk-Two-Factor-Authentication-FAQ.html"
  },
  "https://automater.pl": {
    "name": "Automater",
    "url": "https://automater.pl/en/",
    "img": "automater.png",
    "tfa": true,
    "software": true,
    "doc": "https://www.youtube.com/watch?v=5OLcvjVhhuI"
  },
  "https://awardwallet.com": {
    "name": "AwardWallet",
    "url": "https://awardwallet.com",
    "img": "awardwallet.png",
    "tfa": true,
    "software": true,
    "doc": "https://awardwallet.com/faqs#44"
  },
  "https://www.bananatag.com": {
    "name": "Bananatag",
    "url": "https://www.bananatag.com/",
    "img": "bananatag.png",
    "tfa": false,
    "twitter": "bananatag",
    "facebook": "trackemail"
  },
  "http://basiscode.com": {
    "name": "BasisCode Compliance",
    "url": "http://basiscode.com",
    "img": "basiscode.png",
    "tfa": true,
    "sms": true,
    "email": true,
    "phone": true,
    "doc": "http://basiscode.com/blog/two-factor-authentication-compliance-software/"
  },
  "http://www.ca.com": {
    "name": "CA Technologies",
    "url": "http://www.ca.com/",
    "img": "ca-technologies.png",
    "tfa": false,
    "twitter": "CAinc",
    "facebook": "CATechnologies"
  },
  "https://chartbeat.com": {
    "name": "Chartbeat",
    "url": "https://chartbeat.com/",
    "img": "chartbeat.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://chartbeat.zendesk.com/hc/en-us/articles/209531888-Two-Factor-Authentication",
    "exceptions": {
      "text": "SMS required for 2FA."
    }
  },
  "https://meraki.cisco.com": {
    "name": "Cisco Meraki",
    "url": "https://meraki.cisco.com/",
    "img": "meraki.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://documentation.meraki.com/zGeneral_Administration/Managing_Dashboard_Access/Using_Google_Authenticator_for_Two-factor_Authentication_in_Dashboard"
  },
  "https://www.clickworker.com": {
    "name": "Clickworker",
    "url": "https://www.clickworker.com/",
    "img": "clickworker.png",
    "tfa": false,
    "twitter": "clickworker_com"
  },
  "http://cloudinary.com": {
    "name": "Cloudinary",
    "url": "http://cloudinary.com",
    "img": "cloudinary.png",
    "tfa": true,
    "software": true
  },
  "http://commuterbenefits.com": {
    "name": "CommuterBenefits",
    "url": "http://commuterbenefits.com/",
    "img": "commuterbenefits.png",
    "tfa": false,
    "twitter": "CommuterBenefit"
  },
  "https://www.cosmolex.com": {
    "name": "Cosmolex",
    "url": "https://www.cosmolex.com/",
    "img": "cosmolex.png",
    "tfa": true,
    "sms": true,
    "doc": "http://kb.cosmolex.com/support/solutions/articles/19000028547-how-to-enable-two-factor-authentication-"
  },
  "https://www.crowdsupply.com": {
    "name": "Crowd Supply",
    "url": "https://www.crowdsupply.com",
    "img": "crowdsupply.png",
    "tfa": false,
    "twitter": "crowd_supply",
    "facebook": "CrowdSupply",
    "email_address": "support@crowdsupply.com"
  },
  "https://www.crowdflower.com": {
    "name": "CrowdFlower",
    "url": "https://www.crowdflower.com/",
    "img": "crowdflower.png",
    "tfa": false,
    "twitter": "CrowdFlower"
  },
  "http://del.icio.us": {
    "name": "Delicious",
    "url": "http://del.icio.us/",
    "img": "delicious.png",
    "twitter": "Delicious",
    "tfa": false
  },
  "https://delightedapp.com": {
    "name": "Delighted",
    "url": "https://delightedapp.com/",
    "img": "delighted.png",
    "tfa": true,
    "sms": true
  },
  "https://www.directadmin.com": {
    "name": "DirectAdmin",
    "url": "https://www.directadmin.com",
    "img": "directadmin.png",
    "tfa": true,
    "software": true,
    "doc": "https://directadmin.com/features.php?id=1754"
  },
  "https://www.doordash.com": {
    "name": "DoorDash",
    "url": "https://www.doordash.com",
    "img": "doordash.png",
    "twitter": "doordash",
    "tfa": false
  },
  "https://www.dreamstime.com": {
    "name": "Dreamstime",
    "url": "https://www.dreamstime.com/",
    "img": "dreamstime.png",
    "twitter": "Dreamstime",
    "tfa": false
  },
  "https://envato.com": {
    "name": "Envato",
    "url": "https://envato.com",
    "img": "envato.png",
    "tfa": true,
    "software": true,
    "doc": "https://help.market.envato.com/hc/en-us/articles/115005592963-Two-factor-authentication-for-your-Envato-Market-account"
  },
  "https://everlaw.com": {
    "name": "Everlaw",
    "url": "https://everlaw.com",
    "img": "everlaw.png",
    "tfa": true,
    "software": true,
    "email": true,
    "doc": "https://everlaw.zendesk.com/hc/en-us/articles/206312165-Two-Factor-Authentication"
  },
  "https://www.figma.com": {
    "name": "Figma",
    "url": "https://www.figma.com/",
    "img": "figma.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://help.figma.com/#_two-factor-authentication"
  },
  "https://www.findmyshift.com": {
    "name": "Findmyshift",
    "url": "https://www.findmyshift.com/",
    "img": "findmyshift.png",
    "tfa": true,
    "software": true,
    "doc": "https://www.findmyshift.com/help/what-is-two-factor-authentication"
  },
  "https://www.fiverr.com": {
    "name": "Fiverr",
    "url": "https://www.fiverr.com/",
    "img": "fiverr.png",
    "tfa": false,
    "twitter": "FiverrSupport",
    "facebook": "Fiverr"
  },
  "https://www.formstack.com": {
    "name": "Formstack",
    "url": "https://www.formstack.com/",
    "img": "formstack.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://support.formstack.com/customer/portal/articles/1833071-two-factor-authentication"
  },
  "https://www.freelancer.com": {
    "name": "Freelancer",
    "url": "https://www.freelancer.com/",
    "img": "freelancer.png",
    "tfa": false,
    "twitter": "freelancer",
    "facebook": "fansoffreelancer"
  },
  "https://www.gofundme.com": {
    "name": "GoFundMe",
    "url": "https://www.gofundme.com/",
    "img": "gofundme.png",
    "tfa": true,
    "sms": true,
    "phone": true,
    "doc": "https://support.gofundme.com/hc/en-us/sections/200611108-Phone-Verification-",
    "exceptions": {
      "text": "2FA only for North American customers that create Personal campaigns."
    }
  },
  "https://www.ieee.org": {
    "name": "IEEE",
    "url": "https://www.ieee.org",
    "img": "ieee.png",
    "tfa": false,
    "twitter": "IEEEorg",
    "facebook": "IEEE.org"
  },
  "https://ifttt.com": {
    "name": "IFTTT",
    "url": "https://ifttt.com",
    "img": "ifttt.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://ifttt.com/settings#two-step-verification"
  },
  "https://www.immobilienscout24.de": {
    "name": "ImmobilienScout24",
    "url": "https://www.immobilienscout24.de",
    "img": "immobilienscout24.png",
    "tfa": true,
    "software": true
  },
  "https://www.indeed.com": {
    "name": "Indeed",
    "url": "https://www.indeed.com/",
    "img": "indeed.png",
    "tfa": false,
    "twitter": "indeed",
    "facebook": "Indeed"
  },
  "https://www.indiegogo.com": {
    "name": "Indiegogo",
    "url": "https://www.indiegogo.com/",
    "twitter": "indiegogoUK",
    "facebook": "Indiegogo",
    "img": "indiegogo.png",
    "tfa": false
  },
  "https://www.instapaper.com": {
    "name": "Instapaper",
    "url": "https://www.instapaper.com",
    "twitter": "InstapaperHelp",
    "facebook": "instapaperholdings",
    "email_address": "support@help.instapaper.com",
    "img": "instapaper.png",
    "tfa": false
  },
  "http://www.karriere.at": {
    "name": "karriere.at",
    "url": "http://www.karriere.at",
    "img": "karriereat.png",
    "tfa": false,
    "twitter": "karriere_at",
    "facebook": "karriere.at",
    "lang": "de"
  },
  "https://www.kayako.com": {
    "name": "Kayako",
    "url": "https://www.kayako.com",
    "img": "kayako.png",
    "tfa": true,
    "software": true,
    "doc": "https://support.kayako.com/article/1198-securing-your-user-account-with-two-factor-authentication-2fa"
  },
  "https://www.kickstarter.com": {
    "name": "Kickstarter",
    "url": "https://www.kickstarter.com",
    "img": "kickstarter.png",
    "tfa": true,
    "sms": true,
    "phone": true,
    "software": true,
    "doc": "https://www.kickstarter.com/help/faq/backer+questions#faq_63004"
  },
  "https://www.liftopia.com": {
    "name": "Liftopia",
    "url": "https://www.liftopia.com",
    "img": "liftopia.png",
    "tfa": false,
    "twitter": "Liftopia",
    "facebook": "liftopia"
  },
  "https://www.mathworks.com": {
    "name": "MathWorks",
    "url": "https://www.mathworks.com/",
    "img": "mathworks.png",
    "tfa": true,
    "sms": true,
    "email": true,
    "software": true,
    "doc": "https://www.mathworks.com/mw_account/two_step_verification/frequently-asked-questions.html"
  },
  "https://mixpanel.com": {
    "name": "Mixpanel",
    "url": "https://mixpanel.com/",
    "img": "mixpanel.png",
    "tfa": true,
    "sms": true,
    "software": true
  },
  "https://www.monster.com": {
    "name": "Monster",
    "url": "https://www.monster.com",
    "img": "monster.png",
    "tfa": false,
    "twitter": "Monster",
    "facebook": "monster"
  },
  "http://office.microsoft.com": {
    "name": "Office 365",
    "url": "http://office.microsoft.com/en-us/business/",
    "img": "office365.png",
    "tfa": true,
    "software": true,
    "sms": true,
    "phone": true,
    "doc": "https://support.office.com/en-US/article/Set-up-multi-factor-authentication-for-Office-365-8f0454b2-f51a-4d9c-bcde-2c48e41621c6"
  },
  "https://www.onshape.com": {
    "name": "Onshape",
    "url": "https://www.onshape.com/",
    "img": "onshape.png",
    "tfa": true,
    "software": true,
    "doc": "https://cad.onshape.com/help/Content/twofactorauthentication.htm"
  },
  "https://pastebin.com": {
    "name": "Pastebin",
    "url": "https://pastebin.com",
    "img": "pastebin.png",
    "tfa": false,
    "twitter": "pastebin",
    "facebook": "pastebin",
    "email_address": "admin@pastebin.com"
  },
  "https://www.patreon.com": {
    "name": "Patreon",
    "url": "https://www.patreon.com/",
    "img": "patreon.png",
    "tfa": true,
    "sms": true,
    "doc": "https://patreon.zendesk.com/hc/en-us/articles/206538086-How-Do-I-Set-Up-2-Factor-Authorization"
  },
  "https://phraseapp.com": {
    "name": "PhraseApp",
    "url": "https://phraseapp.com",
    "img": "phraseapp.png",
    "software": true,
    "tfa": true,
    "doc": "https://phraseapp.com/blog/posts/multi-factor-how-to-secure-your-account-using-multi-factor/"
  },
  "https://pinboard.in": {
    "name": "Pinboard",
    "url": "https://pinboard.in/",
    "twitter": "Pinboard",
    "img": "pinboard.png",
    "tfa": false
  },
  "https://planning.center": {
    "name": "Planning Center Online",
    "url": "https://planning.center/",
    "twitter": "planningcenter",
    "facebook": "PlanningCenter",
    "img": "planningcenter.png",
    "tfa": false
  },
  "https://www.getpocket.com": {
    "name": "Pocket",
    "url": "https://www.getpocket.com",
    "twitter": "Pocket",
    "img": "pocket.png",
    "tfa": false
  },
  "https://www.pozible.com": {
    "name": "Pozible",
    "url": "https://www.pozible.com",
    "img": "pozible.png",
    "twitter": "pozible",
    "tfa": false
  },
  "https://promoter.io": {
    "name": "Promoter.io",
    "url": "https://promoter.io/",
    "img": "promoter.png",
    "tfa": false,
    "twitter": "Promoter_io"
  },
  "https://www.repairshopr.com": {
    "name": "Repairshopr",
    "url": "https://www.repairshopr.com/",
    "img": "repairshopr.png",
    "tfa": true,
    "doc": "https://feedback.repairshopr.com/knowledgebase/articles/928266-two-factor-authentication-google-authenticator",
    "sms": true,
    "software": true,
    "exceptions": {
      "text": "SMS only available as a backup to Google Authenticator."
    }
  },
  "https://www.sanebox.com": {
    "name": "SaneBox",
    "url": "https://www.sanebox.com/",
    "img": "sanebox.png",
    "tfa": true,
    "software": true,
    "doc": "https://support.sanebox.com/hc/en-us/articles/203837226-Two-Factor-Authentication-2FA-for-your-account-dashboard-on-sanebox-com"
  },
  "https://www.signnow.com": {
    "name": "SignNow",
    "url": "https://www.signnow.com/",
    "img": "signnow.png",
    "tfa": false,
    "twitter": "signnow",
    "facebook": "esignaturesignnow"
  },
  "https://www.smartsimple.com": {
    "name": "SmartSimple",
    "url": "https://www.smartsimple.com",
    "img": "smartsimple.png",
    "tfa": true,
    "software": true,
    "hardware": true,
    "doc": "https://wiki.smartsimple.com/wiki/Two-Factor_Authentication"
  },
  "https://app.spare5.com": {
    "name": "Spare5",
    "url": "https://app.spare5.com/fives",
    "img": "spare5.png",
    "tfa": false,
    "twitter": "spare5",
    "facebook": "spare5app",
    "email_address": "feedback@spare5.com"
  },
  "https://www.startjoin.com": {
    "name": "StartJOIN",
    "url": "https://www.startjoin.com/",
    "img": "startjoin.png",
    "tfa": true,
    "software": true
  },
  "https://www.ulule.com": {
    "name": "Ulule",
    "url": "https://www.ulule.com/",
    "twitter": "ulule",
    "facebook": "ululeEN",
    "img": "ulule.png",
    "tfa": false
  },
  "https://www.upwork.com": {
    "name": "Upwork",
    "url": "https://www.upwork.com",
    "img": "upwork.png",
    "tfa": false,
    "twitter": "UpworkHelp",
    "facebook": "upwork"
  },
  "https://usabilla.com": {
    "name": "Usabilla",
    "url": "https://usabilla.com",
    "img": "usabilla.png",
    "tfa": true,
    "software": true,
    "doc": "https://support.usabilla.com/hc/en-us/articles/207976889-Setting-up-2-step-authentication"
  },
  "https://www.wageworks.com": {
    "name": "WageWorks",
    "url": "https://www.wageworks.com",
    "img": "wageworks.png",
    "tfa": false,
    "twitter": "WageWorksCares"
  },
  "https://www.watchmanmonitoring.com": {
    "name": "Watchman Monitoring",
    "url": "https://www.watchmanmonitoring.com",
    "img": "watchmanmonitoring.png",
    "tfa": true,
    "hardware": true,
    "sms": true,
    "software": true,
    "doc": "https://www.watchmanmonitoring.com/two-factor-authentication",
    "exceptions": {
      "text": "Two factor authentication unavailable for 'End User' access, which is read-only."
    }
  },
  "https://www.wikia.com": {
    "name": "Wikia",
    "url": "https://www.wikia.com/",
    "twitter": "wikia",
    "img": "wikia.png",
    "tfa": false
  },
  "https://www.wikipedia.org": {
    "name": "Wikipedia",
    "url": "https://www.wikipedia.org/",
    "twitter": "Wikipedia",
    "img": "wikipedia.png",
    "tfa": false
  },
  "https://yclas.com": {
    "name": "Yclas",
    "url": "https://yclas.com/",
    "img": "yclas.png",
    "tfa": true,
    "software": true,
    "doc": "https://docs.yclas.com/2-step-authentication/"
  },
  "http://www.zendesk.com": {
    "name": "Zendesk",
    "url": "http://www.zendesk.com",
    "img": "zendesk.png",
    "tfa": true,
    "software": true,
    "sms": true,
    "doc": "https://support.zendesk.com/hc/en-us/articles/203824246"
  },
  "https://pay.amazon.com": {
    "name": "Amazon Pay",
    "url": "https://pay.amazon.com",
    "img": "amazonpay.png",
    "tfa": true,
    "software": true,
    "sms": true,
    "exceptions": {
      "text": "SMS or phone call required to enable 2FA. Enabling on Amazon.com activates 2FA on other regional Amazon sites, such as UK and DE."
    },
    "doc": "https://www.amazon.com/gp/help/customer/display.html?nodeId=201962420"
  },
  "https://www.braintreepayments.com": {
    "name": "Braintree",
    "img": "braintree.png",
    "url": "https://www.braintreepayments.com/",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://articles.braintreepayments.com/reference/security/two-factor-authentication"
  },
  "http://buycraft.net": {
    "name": "Buycraft",
    "url": "http://buycraft.net",
    "img": "buycraft.png",
    "tfa": true,
    "software": true,
    "sms": true,
    "exceptions": {
      "text": "SMS-capable phone required."
    },
    "doc": "http://help.buycraft.net/article/83-two-factor-authentication"
  },
  "https://www.dwolla.com": {
    "name": "Dwolla",
    "url": "https://www.dwolla.com",
    "img": "dwolla.png",
    "tfa": true,
    "software": true,
    "doc": "http://help.dwolla.com/customer/portal/articles/2068158-two-factor-authentication-faq?b_id=5438"
  },
  "https://flattr.com": {
    "name": "Flattr",
    "img": "flattr.png",
    "url": "https://flattr.com",
    "twitter": "flattr",
    "tfa": false
  },
  "https://gocardless.com": {
    "name": "GoCardless",
    "img": "gocardless.png",
    "url": "https://gocardless.com/",
    "twitter": "GoCardless",
    "tfa": false
  },
  "http://www.google.se": {
    "name": "Google Wallet",
    "url": "http://www.google.se/wallet/",
    "img": "googlewallet.png",
    "tfa": true,
    "sms": true,
    "phone": true,
    "software": true,
    "hardware": true,
    "doc": "https://www.google.com/intl/en-US/landing/2step/features.html"
  },
  "https://www.klarna.com": {
    "name": "Klarna",
    "url": "https://www.klarna.com",
    "img": "klarna.png",
    "tfa": true,
    "email": true,
    "software": true,
    "exceptions": {
      "text": "Software 2FA is only available for Swedish citizens with BankID."
    }
  },
  "https://www.neteller.com": {
    "name": "NETELLER",
    "img": "neteller.png",
    "url": "https://www.neteller.com/",
    "tfa": true,
    "software": true,
    "doc": "https://support.neteller.com/ACCOUNT/Two-Factor-Authentication/85238429/What-is-two-step-authentication.htm"
  },
  "https://payeer.com": {
    "name": "PAYEER",
    "url": "https://payeer.com/en/",
    "img": "payeer.png",
    "tfa": true,
    "sms": true,
    "email": true,
    "software": true,
    "exceptions": {
      "text": "Receiving codes via SMS cost 0.05$ each message. 2FA is personalizable in account settings."
    },
    "doc": "https://payeer.com/en/faq/"
  },
  "http://www.payoneer.com": {
    "name": "Payoneer",
    "url": "http://www.payoneer.com/",
    "twitter": "Payoneer",
    "img": "payoneer.png",
    "tfa": false
  },
  "https://www.paypal.com": {
    "name": "PayPal",
    "url": "https://www.paypal.com/",
    "img": "paypal.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "hardware": true,
    "exceptions": {
      "text": "2FA is only available in a few countries. Contact PayPal on twitter for an up to date list of available countries."
    },
    "doc": "https://www.paypal.com/us/cgi-bin?cmd=xpt/Marketing_CommandDriven/securitycenter/PayPalSecurityKey-outside&bn_r=o"
  },
  "https://www.paysafecard.com": {
    "name": "Paysafecard",
    "url": "https://www.paysafecard.com/",
    "img": "paysafecard.png",
    "tfa": true,
    "software": true,
    "doc": "https://www.paysafecard.com/en-au/lp-products/2-step-login/"
  },
  "https://paytm.com": {
    "name": "Paytm",
    "url": "https://paytm.com/",
    "img": "paytm.png",
    "tfa": true,
    "sms": true,
    "doc": "https://blog.paytm.com/secure-2-step-authentication-login-on-paytms-website-6dd5a20ae1b2"
  },
  "https://www.payza.com": {
    "name": "Payza",
    "url": "https://www.payza.com/",
    "img": "payza.png",
    "tfa": true,
    "software": true,
    "doc": "https://docs.payza.com/docs/personal-manual-advanced-security#section-how-do-i-set-up-2-factor-authentication"
  },
  "https://privacy.com": {
    "name": "Privacy",
    "url": "https://privacy.com/",
    "img": "privacy.png",
    "tfa": true,
    "software": true,
    "doc": "https://privacy.com/faq"
  },
  "https://www.ravelin.com": {
    "name": "Ravelin",
    "url": "https://www.ravelin.com/",
    "img": "ravelin.png",
    "tfa": true,
    "software": true,
    "doc": "https://ravelin.zendesk.com/hc/en-us/articles/115001071665-Two-Factor-Authentication"
  },
  "https://skrill.com": {
    "name": "Skrill",
    "url": "https://skrill.com/",
    "img": "skrill.png",
    "tfa": true,
    "hardware": true,
    "software": true,
    "doc": "https://www.skrill.com/en/support#/path/ACCOUNT/Two-Factor-Authentication/905761532/Two-Factor-Authentication-2FA.htm"
  },
  "https://squareup.com": {
    "name": "Square",
    "url": "https://squareup.com",
    "img": "squareup.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "exceptions": {
      "text": "SMS only supported in US and Canada"
    },
    "doc": "https://squareup.com/help/us/en/article/5593-2-step-verification"
  },
  "https://cash.me": {
    "name": "Square Cash",
    "url": "https://cash.me",
    "img": "square-cash.png",
    "tfa": false,
    "twitter": "SquareCash"
  },
  "https://www.stripe.com": {
    "name": "Stripe",
    "img": "stripe.png",
    "url": "https://www.stripe.com/",
    "tfa": true,
    "sms": true,
    "software": true,
    "hardware": true,
    "doc": "https://support.stripe.com/questions/how-do-i-enable-two-step-verification"
  },
  "https://www.vantiv.com": {
    "name": "Vantiv",
    "url": "https://www.vantiv.com/",
    "twitter": "Vantiv",
    "facebook": "Vantiv",
    "img": "vantiv.png",
    "tfa": false
  },
  "https://venmo.com": {
    "name": "Venmo",
    "url": "https://venmo.com",
    "img": "venmo.png",
    "tfa": true,
    "sms": true,
    "doc": "https://help.venmo.com/hc/en-us/articles/217532397--Confirm-my-identity-on-sign-in-Why"
  },
  "https://secure.checkout.visa.com": {
    "name": "Visa Checkout",
    "url": "https://secure.checkout.visa.com/",
    "img": "visa-checkout.png",
    "tfa": false,
    "twitter": "VisaCheckout"
  },
  "https://money.yandex.ru": {
    "name": "Yandex.Money",
    "url": "https://money.yandex.ru",
    "img": "yandexmoney.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "hardware": true,
    "doc": "https://money.yandex.ru/doc.xml?id=524852"
  },
  "https://www.connectwise.com": {
    "name": "ConnectWise Control (ScreenConnect)",
    "url": "https://www.connectwise.com/software/control",
    "img": "connectwisecontrol.png",
    "tfa": true,
    "sms": true,
    "email": true,
    "software": true,
    "hardware": true,
    "doc": "https://docs.connectwise.com/ConnectWise_Control_Documentation/Get_started/Administration_page/Security_page/Enable_two-factor_authentication_for_host_accounts"
  },
  "https://join.me": {
    "name": "join.me (w/ LogMeIn account)",
    "url": "https://join.me/",
    "img": "joinme.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://secure.logmein.com/welcome/webhelp/EN/Pro/LogMeIn/c_common_Security_TwoStep.html"
  },
  "https://www.linksyssmartwifi.com": {
    "name": "Linksys Smart Wi-Fi",
    "url": "https://www.linksyssmartwifi.com",
    "twitter": "linksyscares",
    "facebook": "linksys",
    "img": "linksyssmartwifi.png",
    "tfa": false
  },
  "https://secure.logmein.com": {
    "name": "LogMeIn",
    "url": "https://secure.logmein.com/",
    "img": "logmein.png",
    "tfa": true,
    "sms": true,
    "email": true,
    "software": true,
    "hardware": true,
    "doc": "https://secure.logmein.com/welcome/webhelp/EN/Pro/LogMeIn/c_Common_Account_Security.html"
  },
  "https://www.mbconnectline.com": {
    "name": "MB Connect Line",
    "url": "https://www.mbconnectline.com",
    "img": "mbconnectline.png",
    "tfa": true,
    "sms": true,
    "phone": true,
    "email": true,
    "software": true,
    "doc": "http://www.cc-onlinehelp.com/en/#index/administrati/users/authenticati/authenticati.html"
  },
  "https://www.syspectr.com": {
    "name": "O&amp;O Syspectr",
    "url": "https://www.syspectr.com",
    "img": "oosyspectr.png",
    "tfa": true,
    "software": true,
    "doc": "https://www.syspectr.com/en/faq/how-do-i-activate-deactivate-two-factor-authentication-for-my-account"
  },
  "https://www.realvnc.com": {
    "name": "RealVNC",
    "url": "https://www.realvnc.com",
    "img": "realvnc.png",
    "tfa": true,
    "software": true,
    "doc": "https://www.realvnc.com/en/connect/docs/multi-factor-auth.html#protecting-your-realvnc-account"
  },
  "https://www.teamviewer.com": {
    "name": "TeamViewer",
    "url": "https://www.teamviewer.com",
    "img": "teamviewer.png",
    "tfa": true,
    "software": true,
    "doc": "https://www.teamviewer.com/en/help/402-How-do-I-activate-deactivate-two-factor-authentication-for-my-TeamViewer-account.aspx"
  },
  "https://www.adafruit.com": {
    "name": "Adafruit",
    "url": "https://www.adafruit.com",
    "img": "adafruit.png",
    "tfa": false,
    "twitter": "adafruit",
    "facebook": "adafruitindustries"
  },
  "http://www.adoramapix.com": {
    "name": "AdoramaPix",
    "url": "http://www.adoramapix.com",
    "img": "adoramapix.png",
    "tfa": false,
    "twitter": "AdoramaPix",
    "facebook": "AdoramaPix"
  },
  "https://www.aliexpress.com": {
    "name": "AliExpress",
    "url": "https://www.aliexpress.com/",
    "img": "aliexpress.png",
    "tfa": false,
    "twitter": "AliExpress_EN"
  },
  "https://www.amazon.com": {
    "name": "Amazon",
    "url": "https://www.amazon.com",
    "img": "amazon.png",
    "tfa": true,
    "software": true,
    "sms": true,
    "exceptions": {
      "text": "SMS or phone call required to enable 2FA. Enabling on Amazon.com activates 2FA on other regional Amazon sites, such as UK and DE."
    },
    "doc": "https://www.amazon.com/gp/help/customer/display.html?nodeId=201596330"
  },
  "https://appleid.apple.com": {
    "name": "Apple",
    "url": "https://appleid.apple.com",
    "img": "apple.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "exceptions": {
      "text": "See http://support.apple.com/kb/HT5593 for a list of supported SMS carriers."
    },
    "doc": "http://support.apple.com/kb/ht5570"
  },
  "https://www.arcaplanet.it": {
    "name": "Arcaplanet",
    "url": "https://www.arcaplanet.it/",
    "img": "arcaplanet.png",
    "tfa": false,
    "twitter": "Arcaplanet",
    "facebook": "Arcaplanet",
    "lang": "it"
  },
  "https://www.bigw.com.au": {
    "name": "Big W",
    "url": "https://www.bigw.com.au/",
    "img": "bigw.png",
    "tfa": false,
    "facebook": "BIGWaustralia"
  },
  "https://combatgent.com": {
    "name": "Combatant Gentlemen",
    "url": "https://combatgent.com",
    "img": "combatgent.png",
    "tfa": false,
    "twitter": "CombatGent",
    "facebook": "combatgent"
  },
  "https://www.comet.it": {
    "name": "Comet",
    "url": "https://www.comet.it/",
    "img": "comet.png",
    "tfa": false,
    "twitter": "gruppocomet",
    "facebook": "facecomet",
    "lang": "it"
  },
  "https://www.comixology.com": {
    "name": "Comixology",
    "url": "https://www.comixology.com/",
    "img": "comixology.png",
    "tfa": false,
    "twitter": "comixology"
  },
  "https://www.costco.com": {
    "name": "Costco",
    "url": "https://www.costco.com",
    "img": "costco.png",
    "tfa": false,
    "facebook": "Costco"
  },
  "http://www.dell.com": {
    "name": "Dell",
    "url": "http://www.dell.com",
    "img": "dell.png",
    "tfa": false,
    "twitter": "DellCares"
  },
  "http://www.dwidigitalcameras.com.au": {
    "name": "Digital World International",
    "url": "http://www.dwidigitalcameras.com.au/",
    "img": "dwi.png",
    "tfa": false,
    "facebook": "DWIAUS"
  },
  "https://ebgames.com.au": {
    "name": "EB Games Australia",
    "url": "https://ebgames.com.au/",
    "img": "ebgamesaustralia.png",
    "tfa": false,
    "twitter": "EBGamesAus"
  },
  "https://www.ebay.com": {
    "name": "eBay",
    "url": "https://www.ebay.com",
    "img": "ebay.png",
    "tfa": true,
    "sms": true
  },
  "https://www.eprice.it": {
    "name": "ePRICE",
    "url": "https://www.eprice.it/",
    "img": "eprice.png",
    "tfa": false,
    "twitter": "EPRICEIT",
    "facebook": "ePRICE.it",
    "lang": "it"
  },
  "http://www.etsy.com": {
    "name": "Etsy",
    "url": "http://www.etsy.com/",
    "img": "etsy.png",
    "sms": true,
    "tfa": true,
    "doc": "http://www.etsy.com/help/article/3335"
  },
  "https://www.everlane.com": {
    "name": "Everlane",
    "url": "https://www.everlane.com/",
    "twitter": "everlane",
    "img": "everlane.png",
    "tfa": false
  },
  "https://www.fasttech.com": {
    "name": "FastTech",
    "url": "https://www.fasttech.com",
    "img": "fasttech.png",
    "tfa": false,
    "facebook": "fasttech.net"
  },
  "https://www.flipkart.com": {
    "name": "Flipkart",
    "url": "https://www.flipkart.com",
    "img": "flipkart.png",
    "tfa": false,
    "twitter": "flipkartsupport",
    "facebook": "flipkart"
  },
  "https://www.gamersgate.com": {
    "name": "GamersGate",
    "url": "https://www.gamersgate.com/",
    "twitter": "GamersGate",
    "facebook": "GamersGate",
    "img": "gamersgate.png",
    "tfa": false
  },
  "https://www.gilt.com": {
    "name": "Gilt",
    "url": "https://www.gilt.com",
    "twitter": "gilt",
    "img": "gilt.png",
    "tfa": false
  },
  "https://www.groupon.com": {
    "name": "Groupon",
    "url": "https://www.groupon.com",
    "twitter": "Groupon",
    "img": "groupon.png",
    "tfa": false
  },
  "http://www.homedepot.com": {
    "name": "Home Depot",
    "url": "http://www.homedepot.com",
    "img": "homedepot.png",
    "tfa": false,
    "twitter": "HomeDepot",
    "facebook": "homedepot"
  },
  "http://www.thebay.com": {
    "name": "Hudson's Bay",
    "url": "http://www.thebay.com",
    "img": "bay.png",
    "twitter": "hudsonsbay",
    "tfa": false
  },
  "https://www.hypop.com.au": {
    "name": "Hypop",
    "url": "https://www.hypop.com.au/",
    "img": "hypop.png",
    "twitter": "hypop",
    "tfa": false
  },
  "http://www.ikea.com": {
    "name": "IKEA",
    "url": "http://www.ikea.com",
    "img": "ikea.png",
    "tfa": false,
    "twitter": "IKEAUSA",
    "facebook": "IKEAUSA"
  },
  "https://www.jbhifi.com.au": {
    "name": "JB Hi-Fi",
    "url": "https://www.jbhifi.com.au/",
    "twitter": "JBHiFi",
    "img": "jbhifi.png",
    "tfa": false
  },
  "https://jet.com": {
    "name": "Jet",
    "url": "https://jet.com",
    "twitter": "JetHeads",
    "img": "jet.png",
    "tfa": false
  },
  "http://www.kohls.com": {
    "name": "Kohl's",
    "url": "http://www.kohls.com",
    "img": "kohls.png",
    "tfa": false,
    "twitter": "Kohls",
    "facebook": "kohls"
  },
  "http://www.lazada.com": {
    "name": "Lazada",
    "url": "http://www.lazada.com/",
    "twitter": "asklazadasg",
    "img": "lazada.png",
    "tfa": false
  },
  "https://www.lowes.com": {
    "name": "Lowes",
    "url": "https://www.lowes.com",
    "img": "lowes.png",
    "tfa": false,
    "twitter": "Lowes",
    "facebook": "lowes"
  },
  "http://www.macys.com": {
    "name": "Macy's",
    "url": "http://www.macys.com/",
    "twitter": "macys",
    "img": "macys.png",
    "tfa": false
  },
  "https://www.massdrop.com": {
    "name": "Massdrop",
    "url": "https://www.massdrop.com",
    "twitter": "Massdrop",
    "img": "massdrop.png",
    "tfa": false
  },
  "https://www.mercadolibre.com": {
    "name": "Mercado Libre",
    "url": "https://www.mercadolibre.com",
    "img": "mercado-libre.png",
    "tfa": true,
    "software": true,
    "sms": true,
    "doc": "https://ayuda.mercadolibre.com.ar/ayuda/Consejos-para-fortalecer-la-se_961"
  },
  "https://www.newegg.com": {
    "name": "Newegg",
    "url": "https://www.newegg.com",
    "img": "newegg.png",
    "tfa": true,
    "software": true,
    "email": true,
    "sms": true
  },
  "http://shop.nordstrom.com": {
    "name": "Nordstrom",
    "url": "http://shop.nordstrom.com",
    "img": "nordstrom.png",
    "tfa": false,
    "twitter": "Nordstrom",
    "facebook": "Nordstrom"
  },
  "http://www.northerntool.com": {
    "name": "Northern Tool + Equipment",
    "url": "http://www.northerntool.com/",
    "img": "northerntool.png",
    "tfa": false,
    "twitter": "NorthernTool",
    "facebook": "northerntool"
  },
  "https://www.overstock.com": {
    "name": "Overstock",
    "url": "https://www.overstock.com",
    "img": "overstock.png",
    "tfa": false,
    "twitter": "Overstock",
    "facebook": "overstock",
    "email_address": "international@overstock.com"
  },
  "https://www.pccasegear.com": {
    "name": "PC Case Gear",
    "url": "https://www.pccasegear.com/",
    "twitter": "pccasegear",
    "img": "pccasegear.png",
    "tfa": false
  },
  "https://purse.io": {
    "name": "Purse",
    "url": "https://purse.io/",
    "img": "purse.png",
    "tfa": true,
    "software": true,
    "doc": "https://support.purse.io/profile/2fa/"
  },
  "https://www.rakuten.com": {
    "name": "Rakuten",
    "url": "https://www.rakuten.com/",
    "twitter": "AskRakutenUS",
    "img": "rakuten.png",
    "tfa": false
  },
  "http://www.samsung.com": {
    "name": "Samsung",
    "url": "http://www.samsung.com/",
    "img": "samsung.png",
    "tfa": true,
    "sms": true,
    "doc": "https://help.content.samsung.com/csweb/faq/searchFaq.do?category1_id=sacb-01-003&serviceCd=saccount"
  },
  "http://www.sierratradingpost.com": {
    "name": "Sierra Trading Post",
    "url": "http://www.sierratradingpost.com",
    "img": "sierratradingpost.png",
    "tfa": false,
    "twitter": "Sierratp",
    "facebook": "sierratradingpost"
  },
  "https://stacksocial.com": {
    "name": "Stack Social",
    "url": "https://stacksocial.com",
    "twitter": "StackSocial",
    "img": "stacksocial.png",
    "tfa": false
  },
  "http://www.target.com": {
    "name": "Target",
    "url": "http://www.target.com/",
    "twitter": "target",
    "img": "target.png",
    "tfa": false
  },
  "http://www.walgreens.com": {
    "name": "Walgreens",
    "url": "http://www.walgreens.com",
    "twitter": "walgreens",
    "img": "walgreens.png",
    "tfa": false
  },
  "https://www.walmart.com": {
    "name": "Walmart",
    "url": "https://www.walmart.com/",
    "twitter": "walmartlabs",
    "img": "walmart.png",
    "tfa": false
  },
  "https://www.warbyparker.com": {
    "name": "Warby Parker",
    "url": "https://www.warbyparker.com",
    "twitter": "WarbyParkerHelp",
    "img": "warbyparker.png",
    "tfa": false
  },
  "http://www.wayfair.com": {
    "name": "Wayfair",
    "url": "http://www.wayfair.com",
    "img": "wayfair.png",
    "tfa": false,
    "twitter": "Wayfair",
    "facebook": "wayfair"
  },
  "https://www.zalando.co.uk": {
    "name": "Zalando (UK)",
    "url": "https://www.zalando.co.uk/",
    "img": "zalando.png",
    "tfa": false,
    "twitter": "zalando_uk",
    "facebook": "Zalando.co.uk",
    "email_address": "service@zalando.co.uk"
  },
  "http://www.zappos.com": {
    "name": "Zappos",
    "url": "http://www.zappos.com/",
    "twitter": "Zappos",
    "img": "zappos.png",
    "tfa": false
  },
  "http://www.zazzle.com": {
    "name": "Zazzle",
    "url": "http://www.zazzle.com",
    "img": "zazzle.png",
    "tfa": false,
    "twitter": "zazzle",
    "facebook": "zazzle"
  },
  "http://www.zooplus.com": {
    "name": "Zooplus",
    "url": "http://www.zooplus.com/",
    "img": "zooplus.png",
    "tfa": false,
    "twitter": "zooplusDE",
    "facebook": "zooplusde"
  },
  "https://airvpn.org": {
    "name": "Air VPN",
    "url": "https://airvpn.org/",
    "img": "airvpn.png",
    "tfa": false,
    "twitter": "airvpn",
    "facebook": "airvpn.org"
  },
  "https://www.abine.com": {
    "name": "Blur",
    "url": "https://www.abine.com/",
    "img": "blur.png",
    "tfa": true,
    "software": true,
    "doc": "https://dnt.abine.com/#help/faq/faq-enabletwoFactor"
  },
  "https://www.bolehvpn.net": {
    "name": "BolehVPN",
    "url": "https://www.bolehvpn.net/",
    "img": "bolehvpn.png",
    "tfa": false,
    "twitter": "bolehvpn"
  },
  "https://www.boxcryptor.com": {
    "name": "Boxcryptor",
    "url": "https://www.boxcryptor.com",
    "img": "boxcryptor.png",
    "tfa": true,
    "software": true,
    "doc": "https://www.boxcryptor.com/help/boxcryptor-account/#two-factor-authentication"
  },
  "https://bugcrowd.com": {
    "name": "bugcrowd",
    "url": "https://bugcrowd.com",
    "img": "bugcrowd.png",
    "tfa": true,
    "software": true,
    "doc": "https://docs.bugcrowd.com/v1.0/docs/two-factor-authentication-1"
  },
  "http://www.cacert.org": {
    "name": "CAcert",
    "url": "http://www.cacert.org/",
    "img": "cacert.png",
    "tfa": true,
    "hardware": true,
    "exceptions": {
      "text": "Requires X.509-capable cryptotoken or smartcard."
    }
  },
  "https://cobalt.io": {
    "name": "Cobalt",
    "url": "https://cobalt.io/",
    "img": "cobalt.png",
    "tfa": true,
    "software": true,
    "doc": "https://cobalt.io/blog/new-feature-two-factor-auth/"
  },
  "https://www.cyberghostvpn.com": {
    "name": "CyberGhost",
    "url": "https://www.cyberghostvpn.com",
    "img": "cyberghost.png",
    "twitter": "cyberghost_EN",
    "facebook": "cyberghostEN",
    "tfa": false
  },
  "https://detectify.com": {
    "name": "Detectify",
    "url": "https://detectify.com/",
    "img": "detectify.png",
    "twitter": "detectify",
    "facebook": "detectify",
    "email_address": "hello@detectify.com",
    "tfa": false
  },
  "https://www.digicert.com": {
    "name": "DigiCert",
    "url": "https://www.digicert.com/",
    "img": "digicert.png",
    "tfa": true,
    "software": true,
    "doc": "https://www.digicert.com/two-factor-authentication.htm"
  },
  "https://dome9.com": {
    "name": "Dome9 Security",
    "url": "https://dome9.com/",
    "img": "dome9.png",
    "tfa": true,
    "software": true,
    "hardware": true,
    "doc": "https://dome9.com/overview/strong-2-factor-authentication"
  },
  "https://www.entrust.net": {
    "name": "Entrust",
    "img": "entrust.png",
    "url": "https://www.entrust.net",
    "tfa": true,
    "software": true,
    "hardware": true,
    "doc": "http://www.entrust.net/certificate-services/cms-authentication.htm"
  },
  "https://www.geotrust.com": {
    "name": "GeoTrust",
    "url": "https://www.geotrust.com/",
    "img": "geotrust.png",
    "tfa": true,
    "email": true
  },
  "https://gogetssl.com": {
    "name": "GoGetSSL",
    "url": "https://gogetssl.com/",
    "img": "gogetssl.png",
    "tfa": false,
    "twitter": "gogetssl"
  },
  "https://hide.me": {
    "name": "hide.me VPN",
    "url": "https://hide.me/",
    "twitter": "thevpncompany",
    "facebook": "www.hide.me",
    "img": "hidemevpn.png",
    "tfa": false
  },
  "http://us.norton.com": {
    "name": "Norton",
    "url": "http://us.norton.com",
    "img": "norton.png",
    "tfa": true,
    "software": true,
    "hardware": true,
    "sms": true,
    "phone": true,
    "doc": "https://support.norton.com/sp/en/us/home/current/solutions/v100023155_NortonM_Retail_1_en_us"
  },
  "https://www.opendns.com": {
    "name": "OpenDNS",
    "url": "https://www.opendns.com/",
    "img": "opendns.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "exceptions": {
      "text": "Only available for enterprise accounts."
    },
    "doc": "https://engineering.opendns.com/2014/05/22/launching-two-step-verification/"
  },
  "https://www.perfect-privacy.com": {
    "name": "Perfect Privacy VPN",
    "url": "https://www.perfect-privacy.com/",
    "img": "perfectprivacyvpn.png",
    "tfa": false,
    "twitter": "perfectprivacy",
    "facebook": "perfect.privacy"
  },
  "https://www.preyproject.com": {
    "name": "Prey",
    "url": "https://www.preyproject.com",
    "img": "prey.png",
    "tfa": true,
    "software": true,
    "doc": "http://help.preyproject.com/article/248-how-to-enable-the-two-step-authenticator-for-prey"
  },
  "https://www.privateinternetaccess.com": {
    "name": "Private Internet Access",
    "url": "https://www.privateinternetaccess.com",
    "img": "privateinternetaccess.png",
    "tfa": false,
    "twitter": "piacsm"
  },
  "https://www.pwnieexpress.com": {
    "name": "Pwnie Express Pwn Pulse",
    "url": "https://www.pwnieexpress.com/products/pulse-device-detection",
    "img": "pwnieexpress.png",
    "tfa": true,
    "software": true,
    "exceptions": {
      "text": "TFA can be enabled on Pwn Pulse Accounts upon customer request."
    },
    "doc": "http://support.pwnieexpress.com/customer/en/portal/articles/2858909-chapter-5-pulse-administration-user-management"
  },
  "https://rbltracker.com": {
    "name": "RBLTracker",
    "url": "https://rbltracker.com/",
    "img": "rbltracker.png",
    "tfa": true,
    "software": true,
    "doc": "https://rbltracker.com/docs/setting-up-two-factor-authentication/"
  },
  "https://www.ssltrust.com.au": {
    "name": "SSLTrust",
    "url": "https://www.ssltrust.com.au/",
    "img": "ssltrust.png",
    "tfa": true,
    "software": true,
    "doc": "http://www.ssltrust.com.au/enable-two-factor-authentication.html"
  },
  "https://threat-x.com": {
    "name": "Threat X",
    "url": "https://threat-x.com/",
    "img": "threatx.png",
    "tfa": true,
    "software": true
  },
  "https://threatconnect.com": {
    "name": "ThreatConnect",
    "url": "https://threatconnect.com/",
    "img": "threatconnect.png",
    "tfa": true,
    "software": true,
    "doc": "http://kb.threatconnect.com/customer/en/portal/articles/2214975-configuring-user-settings-and-two-factor-authentication"
  },
  "https://www.threatmetrix.com": {
    "name": "ThreatMetrix",
    "url": "https://www.threatmetrix.com/",
    "img": "threatmetrix.png",
    "tfa": false,
    "twitter": "ThreatMetrix"
  },
  "https://login.threatsim.com": {
    "name": "ThreatSim",
    "url": "https://login.threatsim.com",
    "img": "threatsim.png",
    "tfa": true,
    "sms": true
  },
  "https://www.tinfoilsecurity.com": {
    "name": "Tinfoil Security",
    "url": "https://www.tinfoilsecurity.com",
    "img": "tinfoil.png",
    "tfa": true,
    "software": true,
    "doc": "http://support.tinfoilsecurity.com/customer/portal/articles/1559364-do-you-support-two-factor-authentication-how-do-i-set-it-up-"
  },
  "https://torguard.net": {
    "name": "TorGuard",
    "url": "https://torguard.net",
    "img": "torguard.png",
    "tfa": true,
    "software": true
  },
  "https://tunnelbear.com": {
    "name": "TunnelBear",
    "url": "https://tunnelbear.com/",
    "img": "tunnelbear.png",
    "tfa": false,
    "twitter": "theTunnelBear",
    "facebook": "tunnelbear"
  },
  "https://vpnunlimitedapp.com": {
    "name": "VPN Unlimited",
    "url": "https://vpnunlimitedapp.com/",
    "img": "vpnunlimited.png",
    "twitter": "vpnunlimited",
    "tfa": false
  },
  "http://www.webroot.com": {
    "name": "Webroot",
    "url": "http://www.webroot.com",
    "img": "webroot.png",
    "twitter": "Webroot",
    "tfa": false
  },
  "https://windscribe.com": {
    "name": "Windscribe",
    "url": "https://windscribe.com",
    "img": "windscribe.png",
    "tfa": false,
    "twitter": "windscribecom",
    "facebook": "windscribe"
  },
  "https://about.me": {
    "name": "about.me",
    "url": "https://about.me",
    "twitter": "aboutdotme",
    "img": "aboutme.png",
    "tfa": false
  },
  "https://badoo.com": {
    "name": "Badoo",
    "url": "https://badoo.com",
    "img": "badoo.png",
    "tfa": false,
    "twitter": "Badoo"
  },
  "https://bitly.com": {
    "name": "Bitly",
    "url": "https://bitly.com/",
    "img": "bitly.png",
    "tfa": true,
    "sms": true,
    "doc": "https://support.bitly.com/hc/en-us/articles/230650187-What-is-2-step-verification-"
  },
  "https://bufferapp.com": {
    "name": "Buffer",
    "url": "https://bufferapp.com",
    "img": "bufferapp.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://blog.bufferapp.com/introducing-the-safest-social-media-publishing-on-the-web"
  },
  "https://www.deviantart.com": {
    "name": "DeviantArt",
    "url": "https://www.deviantart.com",
    "twitter": "deviantart",
    "img": "deviantart.png",
    "tfa": false
  },
  "https://ello.co": {
    "name": "Ello",
    "url": "https://ello.co",
    "twitter": "ellohype",
    "facebook": "ellohype",
    "email_address": "suggestions@ello.co",
    "img": "ello.png",
    "tfa": false
  },
  "https://www.facebook.com": {
    "name": "Facebook",
    "url": "https://www.facebook.com",
    "img": "facebook.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "hardware": true,
    "exceptions": {
      "text": "SMS required for 2FA. 1 account per phone number."
    },
    "doc": "https://www.facebook.com/help/148233965247823"
  },
  "https://flipboard.com": {
    "name": "Flipboard",
    "url": "https://flipboard.com",
    "img": "flipboard.png",
    "twitter": "FlipboardCS",
    "tfa": false
  },
  "https://foursquare.com": {
    "name": "Foursquare",
    "url": "https://foursquare.com",
    "twitter": "foursquare",
    "img": "foursquare.png",
    "tfa": false
  },
  "https://www.goodreads.com": {
    "name": "Goodreads",
    "url": "https://www.goodreads.com",
    "twitter": "goodreads",
    "img": "goodreads.png",
    "tfa": false
  },
  "https://plus.google.com": {
    "name": "Google+",
    "url": "https://plus.google.com",
    "img": "g+.png",
    "tfa": true,
    "sms": true,
    "phone": true,
    "software": true,
    "hardware": true,
    "doc": "https://www.google.com/intl/en-US/landing/2step/features.html"
  },
  "https://hootsuite.com": {
    "name": "HootSuite",
    "url": "https://hootsuite.com",
    "img": "hootsuite.png",
    "tfa": true,
    "software": true,
    "doc": "https://help.hootsuite.com/entries/22527304-Managing-Google-Authenticator"
  },
  "https://icq.com": {
    "name": "ICQ",
    "url": "https://icq.com/",
    "twitter": "ICQ",
    "facebook": "ICQ",
    "img": "icq.png",
    "tfa": false
  },
  "https://imgur.com": {
    "name": "Imgur",
    "url": "https://imgur.com",
    "twitter": "imgur",
    "img": "imgur.png",
    "tfa": false
  },
  "https://www.instagram.com": {
    "name": "Instagram",
    "url": "https://www.instagram.com",
    "img": "instagram.png",
    "tfa": true,
    "sms": true,
    "doc": "https://help.instagram.com/566810106808145"
  },
  "https://www.linkedin.com": {
    "name": "LinkedIn",
    "url": "https://www.linkedin.com",
    "img": "linkedin.png",
    "tfa": true,
    "sms": true,
    "doc": "https://help.linkedin.com/app/answers/detail/a_id/531/related/1"
  },
  "http://www.livejournal.com": {
    "name": "LiveJournal",
    "url": "http://www.livejournal.com",
    "twitter": "LiveJournal",
    "img": "livejournal.png",
    "tfa": false
  },
  "https://lobste.rs": {
    "name": "Lobsters",
    "url": "https://lobste.rs/",
    "img": "lobsters.png",
    "tfa": true,
    "software": true,
    "doc": "https://lobste.rs/s/1cyltz/two_factor_authentication_now_available"
  },
  "https://joinmastodon.org": {
    "name": "Mastodon",
    "url": "https://joinmastodon.org/",
    "img": "mastodon.png",
    "tfa": true,
    "software": true,
    "doc": "https://github.com/tootsuite/documentation/blob/master/Using-Mastodon/2FA.md"
  },
  "https://medium.com": {
    "name": "Medium",
    "url": "https://medium.com",
    "img": "medium.png",
    "tfa": true,
    "email": true,
    "exceptions": {
      "text": "Medium doesn't use passwords, instead emails a link to user to login"
    }
  },
  "https://www.meetup.com": {
    "name": "Meetup",
    "url": "https://www.meetup.com",
    "twitter": "meetup_support",
    "img": "meetup.png",
    "tfa": false
  },
  "https://www.minds.com": {
    "name": "Minds",
    "url": "https://www.minds.com/",
    "img": "minds.png",
    "tfa": true,
    "sms": true
  },
  "https://www.newgrounds.com": {
    "name": "Newgrounds",
    "url": "https://www.newgrounds.com/",
    "twitter": "Newgrounds",
    "email_address": "support@newgrounds.com",
    "facebook": "newgrounds",
    "img": "newgrounds.png",
    "tfa": false
  },
  "https://nextdoor.com": {
    "name": "Nextdoor",
    "url": "https://nextdoor.com",
    "twitter": "Nextdoor",
    "img": "nextdoor.png",
    "tfa": false
  },
  "https://www.okcupid.com": {
    "name": "OkCupid",
    "url": "https://www.okcupid.com/",
    "twitter": "okcupid",
    "facebook": "okcupid",
    "img": "okcupid.png",
    "tfa": false
  },
  "https://pinterest.com": {
    "name": "Pinterest",
    "url": "https://pinterest.com",
    "img": "pinterest.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://help.pinterest.com/en/articles/two-factor-authentication"
  },
  "https://www.quora.com": {
    "name": "Quora",
    "url": "https://www.quora.com",
    "img": "quora.png",
    "tfa": false,
    "twitter": "quora"
  },
  "https://www.reddit.com": {
    "name": "Reddit",
    "url": "https://www.reddit.com/",
    "img": "reddit.png",
    "tfa": true,
    "software": true,
    "doc": "https://www.reddithelp.com/en/categories/using-reddit/your-reddit-account/how-set-two-factor-authentication"
  },
  "https://www.snapchat.com": {
    "name": "Snapchat",
    "url": "https://www.snapchat.com/",
    "img": "snapchat.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://support.snapchat.com/ca/login-verification"
  },
  "https://stackexchange.com": {
    "name": "Stack Exchange",
    "url": "https://stackexchange.com/",
    "twitter": "StackExchange",
    "img": "stack_exchange.png",
    "tfa": false
  },
  "https://www.tumblr.com": {
    "name": "Tumblr",
    "url": "https://www.tumblr.com/",
    "img": "tumblr.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://www.tumblr.com/docs/en/two_factor_auth"
  },
  "https://twitter.com": {
    "name": "Twitter",
    "url": "https://twitter.com",
    "img": "twitter.png",
    "tfa": true,
    "sms": true,
    "exceptions": {
      "text": "SMS only available on select providers. SMS required for 2FA. 10 accounts per phone number, 1 phone number per account."
    },
    "software": true,
    "doc": "https://support.twitter.com/articles/20170388"
  },
  "https://vanillaforums.com": {
    "name": "VanillaForums.com",
    "url": "https://vanillaforums.com",
    "img": "vanilla.png",
    "tfa": false,
    "twitter": "vanilla"
  },
  "http://www.viadeo.com": {
    "name": "Viadeo",
    "url": "http://www.viadeo.com",
    "img": "viadeo.png",
    "tfa": false,
    "twitter": "Viadeo"
  },
  "https://vk.com": {
    "name": "VK",
    "url": "https://vk.com",
    "img": "vk.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://vk.com/page-59800369_47885415"
  },
  "http://www.weibo.com": {
    "name": "Weibo",
    "url": "http://www.weibo.com",
    "img": "weibo.png",
    "tfa": false
  },
  "https://wordpress.com": {
    "name": "WordPress.com",
    "url": "https://wordpress.com",
    "img": "wordpress.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "exceptions": {
      "text": "SMS-capable phone required."
    },
    "doc": "https://en.support.wordpress.com/security/two-step-authentication/"
  },
  "https://www.xing.com": {
    "name": "XING",
    "url": "https://www.xing.com",
    "img": "xing.png",
    "tfa": false,
    "twitter": "XING_com"
  },
  "https://zocle.com": {
    "name": "Zocle",
    "url": "https://zocle.com/",
    "img": "zocle.png",
    "tfa": true,
    "sms": true,
    "doc": "https://zocle.com/knowledgebase/enabling-two-step-verification/"
  },
  "https://www.activecollab.com": {
    "name": "ActiveCollab",
    "url": "https://www.activecollab.com/",
    "twitter": "activecollab",
    "img": "activecollab.png",
    "tfa": false
  },
  "https://web.any.do": {
    "name": "Any.do",
    "url": "https://web.any.do/",
    "img": "anydo.png",
    "tfa": false,
    "twitter": "AnyDO",
    "facebook": "Any.do"
  },
  "https://www.asana.com": {
    "name": "Asana",
    "url": "https://www.asana.com",
    "img": "asana.png",
    "tfa": false,
    "twitter": "asana"
  },
  "https://app.azendoo.com": {
    "name": "Azendoo",
    "url": "https://app.azendoo.com",
    "img": "azendoo.png",
    "tfa": false,
    "twitter": "Azendoo"
  },
  "https://www.breeze.pm": {
    "name": "Breeze",
    "url": "https://www.breeze.pm",
    "img": "breeze.png",
    "tfa": false,
    "twitter": "BreezeTeam",
    "facebook": "breeze.pm"
  },
  "https://fruux.com": {
    "name": "fruux",
    "url": "https://fruux.com",
    "img": "fruux.png",
    "twitter": "fruux",
    "tfa": false
  },
  "https://todo.microsoft.com": {
    "name": "Microsoft To-Do",
    "url": "https://todo.microsoft.com/",
    "img": "microsofttodo.png",
    "tfa": true,
    "email": true,
    "sms": true,
    "software": true,
    "doc": "https://support.microsoft.com/en-us/help/12408/microsoft-account-about-two-step-verification"
  },
  "https://plan.io": {
    "name": "Planio",
    "url": "https://plan.io",
    "img": "planio.png",
    "tfa": true,
    "software": true,
    "doc": "https://support.plan.io/news/133"
  },
  "https://todoist.com": {
    "name": "Todoist",
    "url": "https://todoist.com",
    "twitter": "todoist",
    "img": "todoist.png",
    "tfa": false
  },
  "https://www.toodledo.com": {
    "name": "Toodledo",
    "url": "https://www.toodledo.com",
    "img": "toodledo.png",
    "tfa": true,
    "software": true,
    "doc": "https://www.toodledo.com/info/help.php#168"
  },
  "https://trello.com": {
    "name": "Trello",
    "url": "https://trello.com",
    "img": "trello.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "http://help.trello.com/article/993-enabling-two-factor-authentication-for-your-trello-account"
  },
  "https://www.wunderlist.com": {
    "name": "Wunderlist",
    "url": "https://www.wunderlist.com",
    "twitter": "Wunderlist",
    "img": "wunderlist.png",
    "tfa": false
  },
  "https://www.aircanada.com": {
    "name": "Air Canada",
    "url": "https://www.aircanada.com/",
    "twitter": "AirCanada",
    "facebook": "aircanada",
    "img": "aircanada.png",
    "tfa": false
  },
  "http://www.airfrance.com": {
    "name": "Air France",
    "url": "http://www.airfrance.com",
    "twitter": "airfrance",
    "facebook": "airfrance",
    "img": "airfrance.png",
    "tfa": false
  },
  "https://www.alaskaair.com": {
    "name": "Alaska Airlines",
    "url": "https://www.alaskaair.com",
    "twitter": "AlaskaAir",
    "facebook": "alaskaairlines",
    "img": "alaska.png",
    "tfa": false
  },
  "https://www.aa.com": {
    "name": "American Airlines",
    "url": "https://www.aa.com/",
    "twitter": "AmericanAir",
    "facebook": "AmericanAirlines",
    "img": "aa.png",
    "tfa": false
  },
  "https://www.amtrak.com": {
    "name": "Amtrak",
    "url": "https://www.amtrak.com/",
    "twitter": "Amtrak",
    "facebook": "Amtrak",
    "img": "amtrak.png",
    "tfa": false
  },
  "https://www.britishairways.com": {
    "name": "British Airways",
    "url": "https://www.britishairways.com/",
    "twitter": "British_Airways",
    "facebook": "britishairways",
    "img": "ba.png",
    "tfa": false
  },
  "https://www.captaintrain.com": {
    "name": "Captain Train",
    "url": "https://www.captaintrain.com",
    "twitter": "captaintrain",
    "img": "captain_train.png",
    "tfa": false
  },
  "https://www.clippercard.com": {
    "name": "Clipper",
    "url": "https://www.clippercard.com",
    "twitter": "BayAreaClipper",
    "facebook": "BayAreaClipper",
    "img": "clipper.png",
    "tfa": false
  },
  "https://www.delta.com": {
    "name": "Delta",
    "url": "https://www.delta.com/",
    "twitter": "Delta",
    "facebook": "delta",
    "img": "delta.png",
    "tfa": false
  },
  "https://www.bahn.com": {
    "name": "Deutsche Bahn (DB)",
    "url": "https://www.bahn.com",
    "twitter": "DB_Bahn",
    "facebook": "DBPersonenverkehr",
    "img": "db.png",
    "tfa": false
  },
  "https://www.easyjet.com": {
    "name": "easyJet",
    "url": "https://www.easyjet.com",
    "twitter": "easyJet",
    "facebook": "easyJet",
    "img": "easyjet.png",
    "tfa": false
  },
  "https://www.flyfrontier.com": {
    "name": "Frontier",
    "url": "https://www.flyfrontier.com",
    "twitter": "FrontierCare",
    "facebook": "flyfrontier",
    "img": "frontier.png",
    "tfa": false
  },
  "https://www.greyhound.com": {
    "name": "Greyhound",
    "url": "https://www.greyhound.com",
    "twitter": "GHoundBusHelp",
    "facebook": "GreyhoundBus",
    "img": "greyhound.png",
    "tfa": false
  },
  "https://www.hawaiianairlines.com": {
    "name": "Hawaiian Airlines",
    "url": "https://www.hawaiianairlines.com",
    "twitter": "HawaiianAir",
    "facebook": "HawaiianAirlines",
    "img": "hawaiian.png",
    "tfa": false
  },
  "https://www.jetblue.com": {
    "name": "JetBlue",
    "url": "https://www.jetblue.com",
    "twitter": "JetBlue",
    "facebook": "JetBlue",
    "img": "jetblue.png",
    "tfa": false
  },
  "https://jetsmarter.com": {
    "name": "JetSmarter",
    "url": "https://jetsmarter.com/",
    "twitter": "JetSmarter",
    "facebook": "JetSmarter",
    "img": "jetsmarter.png",
    "tfa": false
  },
  "https://www.lufthansa.com": {
    "name": "Lufthansa",
    "url": "https://www.lufthansa.com",
    "twitter": "lufthansa",
    "facebook": "lufthansa",
    "img": "lufthansa.png",
    "tfa": false
  },
  "https://www.lyft.com": {
    "name": "Lyft",
    "url": "https://www.lyft.com/",
    "twitter": "AskLyft",
    "facebook": "lyft",
    "img": "lyft.png",
    "tfa": false
  },
  "https://us.mytaxi.com": {
    "name": "mytaxi",
    "url": "https://us.mytaxi.com",
    "img": "mytaxi.png",
    "tfa": false,
    "twitter": "mytaxius",
    "facebook": "myTaxi.us"
  },
  "https://www.norwegian.com": {
    "name": "Norwegian",
    "url": "https://www.norwegian.com/",
    "twitter": "Fly_Norwegian",
    "facebook": "norwegianairlines",
    "img": "norwegian.png",
    "tfa": false
  },
  "https://www.nsb.no": {
    "name": "NSB",
    "url": "https://www.nsb.no",
    "twitter": "nsb_no",
    "facebook": "nsb.no",
    "img": "nsb.png",
    "tfa": false
  },
  "https://www.oui.sncf": {
    "name": "Oui.sncf",
    "url": "https://www.oui.sncf",
    "twitter": "ouisncf",
    "facebook": "oui.sncf",
    "img": "sncf.png",
    "tfa": false
  },
  "https://www.ov-chipkaart.nl": {
    "name": "OV-chipkaart",
    "url": "https://www.ov-chipkaart.nl/",
    "twitter": "OVchipkaart",
    "img": "ov-chipkaart.png",
    "tfa": false
  },
  "https://www.redbus.in": {
    "name": "redBus",
    "url": "https://www.redbus.in/",
    "twitter": "redBus_in",
    "facebook": "redBus.in",
    "email_address": "support@redbus.in",
    "img": "redbus.png",
    "tfa": false
  },
  "https://www.ryanair.com": {
    "name": "Ryanair",
    "url": "https://www.ryanair.com",
    "twitter": "Ryanair",
    "facebook": "ryanair",
    "img": "ryanair.png",
    "tfa": false
  },
  "https://www.flysas.com": {
    "name": "SAS",
    "url": "https://www.flysas.com/",
    "twitter": "SAS",
    "facebook": "SAS",
    "img": "sas.png",
    "tfa": false
  },
  "https://www.scotrail.co.uk": {
    "name": "ScotRail",
    "url": "https://www.scotrail.co.uk",
    "twitter": "ScotRail",
    "facebook": "ScotRail",
    "img": "scotrail.png",
    "tfa": false
  },
  "https://www.sj.se": {
    "name": "SJ",
    "url": "https://www.sj.se/",
    "twitter": "SJ_AB",
    "facebook": "sj",
    "img": "sj.png",
    "tfa": false
  },
  "https://sl.se": {
    "name": "SL",
    "url": "https://sl.se/",
    "twitter": "SL_AB",
    "facebook": "KanalSL",
    "img": "sl.png",
    "tfa": false
  },
  "https://smartrip.wmata.com": {
    "name": "SmarTrip",
    "url": "https://smartrip.wmata.com",
    "twitter": "wmata",
    "facebook": "MetroForward",
    "img": "wmata.png",
    "tfa": false
  },
  "https://www.southwest.com": {
    "name": "Southwest",
    "url": "https://www.southwest.com/",
    "twitter": "SouthwestAir",
    "facebook": "SouthwestAir",
    "img": "southwest.png",
    "tfa": false
  },
  "https://www.spirit.com": {
    "name": "Spirit",
    "url": "https://www.spirit.com",
    "twitter": "SpiritAirlines",
    "img": "spirit.png",
    "tfa": false
  },
  "https://tfl.gov.uk": {
    "name": "Transport for London",
    "url": "https://tfl.gov.uk/",
    "twitter": "tflwaystopay",
    "facebook": "transportforlondon",
    "img": "tfl.png",
    "tfa": false
  },
  "https://www.uber.com": {
    "name": "Uber",
    "url": "https://www.uber.com/",
    "twitter": "uber_support",
    "facebook": "uber",
    "img": "uber.png",
    "tfa": false
  },
  "https://www.united.com": {
    "name": "United",
    "url": "https://www.united.com/",
    "twitter": "united",
    "facebook": "United",
    "img": "united.png",
    "tfa": false
  },
  "https://www.westjet.com": {
    "name": "WestJet",
    "url": "https://www.westjet.com/",
    "twitter": "WestJet",
    "facebook": "westjet",
    "img": "westjet.png",
    "tfa": false
  },
  "https://www.aep.com": {
    "name": "American Electric Power",
    "url": "https://www.aep.com/",
    "twitter": "AEPnews",
    "facebook": "americanelectricpower",
    "img": "aep.png",
    "tfa": false
  },
  "https://aa.net.uk": {
    "name": "Andrews &amp; Arnold",
    "url": "https://aa.net.uk",
    "img": "aaisp.png",
    "tfa": true,
    "software": true,
    "doc": "https://aa.net.uk/kb-broadband-2fa.html",
    "exceptions": {
      "text": "While both the accounts and control web pages support 2FA, each system is separate and requires its own setup."
    }
  },
  "https://www.att.com": {
    "name": "AT&amp;T",
    "url": "https://www.att.com/",
    "twitter": "ATTCares",
    "facebook": "ATT",
    "img": "att.png",
    "tfa": false
  },
  "https://www.callcentric.com": {
    "name": "CallCentric",
    "url": "https://www.callcentric.com/",
    "img": "callcentric.png",
    "tfa": true,
    "email": true,
    "doc": "https://www.callcentric.com/features/two_point_authentication"
  },
  "https://www.centurylink.com": {
    "name": "CenturyLink",
    "url": "https://www.centurylink.com/",
    "twitter": "CenturyLink",
    "facebook": "CenturyLink",
    "img": "centurylink.png",
    "tfa": false
  },
  "https://www.spectrum.com": {
    "name": "Charter Spectrum",
    "url": "https://www.spectrum.com/",
    "twitter": "GetSpectrum",
    "facebook": "Spectrum",
    "img": "charter.png",
    "tfa": false
  },
  "https://www.xfinity.com": {
    "name": "Comcast",
    "url": "https://www.xfinity.com/",
    "img": "comcast.png",
    "tfa": true,
    "sms": true,
    "email": true,
    "exceptions": {
      "text": "SMS-capable phone and a non-Comcast.net email required for 2FA."
    },
    "doc": "https://www.xfinity.com/support/account/enroll-2-step-verification/"
  },
  "https://www.comed.com": {
    "name": "ComEd",
    "url": "https://www.comed.com/",
    "twitter": "ComEd",
    "facebook": "ComEd",
    "img": "comed.png",
    "tfa": false
  },
  "https://www.coned.com": {
    "name": "Con Edison",
    "url": "https://www.coned.com/",
    "twitter": "ConEdison",
    "facebook": "ConEdison",
    "img": "coned.png",
    "tfa": false
  },
  "https://www.cox.com": {
    "name": "Cox",
    "url": "https://www.cox.com/",
    "twitter": "CoxHelp",
    "facebook": "coxcommunications",
    "img": "cox.png",
    "tfa": false
  },
  "http://www.directv.com": {
    "name": "DIRECTV",
    "url": "http://www.directv.com/",
    "twitter": "DIRECTVService",
    "facebook": "directv",
    "img": "directv.png",
    "tfa": false
  },
  "https://www.dish.com": {
    "name": "DISH Network",
    "url": "https://www.dish.com/",
    "twitter": "dish_answers",
    "facebook": "DISH",
    "img": "dish.png",
    "tfa": false
  },
  "https://www.dominionenergy.com": {
    "name": "Dominion Energy",
    "url": "https://www.dominionenergy.com/",
    "twitter": "dominionenergy",
    "img": "dominion.png",
    "tfa": false
  },
  "https://www.dteenergy.com": {
    "name": "DTE Energy",
    "url": "https://www.dteenergy.com/",
    "twitter": "DTE_Energy",
    "facebook": "dteenergy",
    "img": "dteenergy.png",
    "tfa": false
  },
  "https://www.duke-energy.com": {
    "name": "Duke Energy",
    "url": "https://www.duke-energy.com/",
    "twitter": "DukeEnergy",
    "facebook": "duke.energy",
    "img": "duke.png",
    "tfa": false
  },
  "https://ee.co.uk": {
    "name": "EE",
    "url": "https://ee.co.uk/",
    "twitter": "EE",
    "facebook": "ee",
    "img": "ee.png",
    "tfa": false
  },
  "https://www.eversource.com": {
    "name": "Eversource",
    "url": "https://www.eversource.com/",
    "twitter": "EversourceCorp",
    "facebook": "EversourceEnergy",
    "img": "eversource.png",
    "tfa": false
  },
  "https://www.fpl.com": {
    "name": "Florida Power and Light",
    "url": "https://www.fpl.com/",
    "twitter": "insideFPL",
    "facebook": "fplconnect",
    "img": "fpl.png",
    "tfa": false
  },
  "https://frontier.com": {
    "name": "Frontier",
    "url": "https://frontier.com/",
    "twitter": "AskFrontier",
    "facebook": "FrontierCorp",
    "img": "frontier.png",
    "tfa": false
  },
  "https://www.georgiapower.com": {
    "name": "Georgia Power",
    "url": "https://www.georgiapower.com/",
    "twitter": "GeorgiaPower",
    "facebook": "GeorgiaPower",
    "img": "georgiapower.png",
    "tfa": false
  },
  "https://fiber.google.com": {
    "name": "Google Fiber",
    "url": "https://fiber.google.com/",
    "img": "googlefiber.png",
    "tfa": true,
    "sms": true,
    "phone": true,
    "software": true,
    "hardware": true,
    "doc": "https://www.google.com/intl/en-US/landing/2step/features.html"
  },
  "https://www.halebop.se": {
    "name": "Halebop",
    "url": "https://www.halebop.se/",
    "img": "halebop.png",
    "tfa": true,
    "software": true,
    "exceptions": {
      "text": "2FA is only available for Swedish citizens with BankID."
    },
    "doc": "https://github.com/2factorauth/twofactorauth/pull/2304#issue-200730083"
  },
  "https://moj.tele2.hr": {
    "name": "Moj Tele2",
    "url": "https://moj.tele2.hr/",
    "twitter": "Tele2Croatia",
    "facebook": "tele2.hr",
    "img": "mojtele2.png",
    "tfa": false,
    "lang": "hr"
  },
  "https://www.nicorgas.com": {
    "name": "Nicor Gas",
    "url": "https://www.nicorgas.com/",
    "twitter": "Nicor_Gas",
    "facebook": "NicorGas",
    "img": "nicorgas.png",
    "tfa": false
  },
  "http://www.optus.com.au": {
    "name": "Optus",
    "url": "http://www.optus.com.au/",
    "twitter": "Optus",
    "facebook": "optus",
    "img": "optus.png",
    "tfa": false
  },
  "https://www.orange.fr": {
    "name": "Orange",
    "url": "https://www.orange.fr/portail",
    "twitter": "Orange_France",
    "facebook": "Orange.France",
    "img": "orange.png",
    "tfa": false,
    "lang": "fr"
  },
  "https://www.pge.com": {
    "name": "Pacific Gas and Electric Company PG&amp;E",
    "url": "https://www.pge.com/",
    "twitter": "PGE4Me",
    "facebook": "pacificgasandelectric",
    "img": "pge.png",
    "tfa": false
  },
  "https://www.powerstream.ca": {
    "name": "PowerStream",
    "url": "https://www.powerstream.ca/",
    "twitter": "PowerStreamNews",
    "facebook": "PowerStreamPage",
    "img": "powerstream.png",
    "tfa": false
  },
  "https://fi.google.com": {
    "name": "Project Fi",
    "url": "https://fi.google.com/",
    "img": "projectfi.png",
    "tfa": true,
    "sms": true,
    "phone": true,
    "hardware": true,
    "software": true,
    "doc": "https://www.google.com/intl/en-US/landing/2step/features.html"
  },
  "https://www.rcn.com": {
    "name": "RCN",
    "url": "https://www.rcn.com/",
    "twitter": "RCNconnects",
    "facebook": "RCN",
    "img": "rcn.png",
    "tfa": false
  },
  "https://www.rge.com": {
    "name": "Rochester Gas & Electric",
    "url": "https://www.rge.com/",
    "twitter": "RGandE",
    "facebook": "RochGandE",
    "img": "rge.png",
    "tfa": false
  },
  "https://www.rogers.com": {
    "name": "Rogers",
    "url": "https://www.rogers.com/",
    "twitter": "RogersHelps",
    "facebook": "Rogers",
    "img": "rogers.png",
    "tfa": false
  },
  "https://www.sdge.com": {
    "name": "San Diego Gas & Electric",
    "url": "https://www.sdge.com/",
    "twitter": "SDGE",
    "facebook": "SanDiegoGasandElectric",
    "img": "sdge.png",
    "tfa": false
  },
  "https://www.sipgate.de": {
    "name": "sipgate",
    "url": "https://www.sipgate.de/",
    "twitter": "sipgateDE",
    "facebook": "sipgate",
    "img": "sipgate.png",
    "tfa": false,
    "lang": "de"
  },
  "https://www.sonic.com": {
    "name": "Sonic",
    "url": "https://www.sonic.com/",
    "img": "sonic.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "phone": true,
    "doc": "https://wiki.sonic.net/wiki/2-Step_Verification"
  },
  "https://www.sce.com": {
    "name": "Southern California Edison",
    "url": "https://www.sce.com/",
    "twitter": "SCE",
    "facebook": "sce",
    "img": "sce.png",
    "tfa": false
  },
  "https://www.sprint.com": {
    "name": "Sprint",
    "url": "https://www.sprint.com/",
    "twitter": "sprint",
    "facebook": "sprint",
    "img": "sprint.png",
    "tfa": false
  },
  "https://www.t-mobile.com": {
    "name": "T-Mobile",
    "url": "https://www.t-mobile.com/",
    "twitter": "TMobileHelp",
    "facebook": "TMobile",
    "img": "tmobile.png",
    "tfa": false
  },
  "https://www.telia.se": {
    "name": "Telia (Sweden)",
    "url": "https://www.telia.se/",
    "img": "telia.png",
    "tfa": true,
    "software": true,
    "exceptions": {
      "text": "2FA is only available for Swedish citizens with BankID."
    },
    "doc": "https://www.telia.se/privat/support/info/logga-in-med-bankid-och-eleg-pa-mitt-telia"
  },
  "https://www.telstra.com.au": {
    "name": "Telstra",
    "url": "https://www.telstra.com.au/",
    "twitter": "Telstra",
    "facebook": "Telstra24x7",
    "img": "telstra.png",
    "tfa": false
  },
  "https://www.telzio.com": {
    "name": "Telzio",
    "url": "https://www.telzio.com/",
    "img": "telzio.png",
    "tfa": true,
    "software": true,
    "doc": "https://telzio.com/support/two-factor-authentication"
  },
  "http://www.three.co.uk": {
    "name": "Three UK",
    "url": "http://www.three.co.uk/",
    "twitter": "ThreeUK",
    "facebook": "ThreeUK",
    "img": "three.png",
    "tfa": false
  },
  "https://www.tim.it": {
    "name": "TIM",
    "url": "https://www.tim.it/",
    "twitter": "tim_official",
    "facebook": "TimOfficialPage",
    "img": "tim.png",
    "tfa": false,
    "lang": "it"
  },
  "https://www.timewarnercable.com": {
    "name": "Time Warner Cable",
    "url": "https://www.timewarnercable.com/",
    "twitter": "TWC_Help",
    "facebook": "twc",
    "img": "timewarner.png",
    "tfa": false
  },
  "https://ting.com": {
    "name": "Ting",
    "url": "https://ting.com/",
    "img": "ting.png",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://help.ting.com/hc/en-us/articles/209351258-Two-Factor-Authentication"
  },
  "http://www.verizon.com": {
    "name": "Verizon",
    "url": "http://www.verizon.com/",
    "twitter": "VerizonSupport",
    "facebook": "verizon",
    "img": "verizon.png",
    "tfa": false
  },
  "https://www.verizonwireless.com": {
    "name": "Verizon Wireless",
    "url": "https://www.verizonwireless.com/",
    "twitter": "VZWSupport",
    "img": "verizon.png",
    "tfa": false
  },
  "https://vimla.se": {
    "name": "Vimla",
    "url": "https://vimla.se/",
    "twitter": "Vimla_se",
    "facebook": "vimla.se",
    "img": "vimla.png",
    "tfa": false,
    "lang": "sv"
  },
  "https://www.virginmedia.ie": {
    "name": "Virgin Media (IE)",
    "url": "https://www.virginmedia.ie/",
    "twitter": "VirginMediaIE",
    "facebook": "VirginMediaIreland",
    "img": "virginmedia.png",
    "tfa": false
  },
  "https://www.virgin.com": {
    "name": "Virgin Mobile",
    "url": "https://www.virgin.com/gateways/mobile",
    "twitter": "Virgin",
    "facebook": "virgin",
    "img": "virginmobile.png",
    "tfa": false
  },
  "https://www.vodafone.ie": {
    "name": "Vodafone (IE)",
    "url": "https://www.vodafone.ie/",
    "twitter": "VodafoneIreland",
    "facebook": "vodafoneireland",
    "img": "vodafone.png",
    "tfa": false
  },
  "http://www.vodafone.it": {
    "name": "Vodafone (IT)",
    "url": "http://www.vodafone.it/",
    "twitter": "VodafoneIT",
    "facebook": "vodafoneit",
    "img": "vodafone.png",
    "tfa": false
  },
  "https://www.vodafone.co.uk": {
    "name": "Vodafone (UK)",
    "url": "https://www.vodafone.co.uk/",
    "img": "vodafone.png",
    "tfa": true,
    "sms": true
  },
  "https://voip.ms": {
    "name": "VoIP.ms",
    "url": "https://voip.ms/",
    "twitter": "voipms",
    "img": "voipms.png",
    "tfa": false
  }
}
