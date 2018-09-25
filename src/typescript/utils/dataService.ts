export async function loadOriginConfig(url: URL) {
  return TWOFACTORAUTHORG_DATA[url.origin];
}

/**
 * The configuration for a single origin.
 * 
 * @export
 * @interface OriginConfig
 */
export interface OriginConfig {
  name: string;
  url?: string;
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

export interface OriginMap {
  [origin: string] : OriginConfig;
}

const TWOFACTORAUTHORG_DATA: OriginMap = {
  "https://10dollar.ca": {
    "name": "10Dollar",
    "twitter": "10dollar_ca",
    "facebook": "10dollar.ca",
    "tfa": false
  },
  "https://1password.com": {
    "name": "1Password",
    "tfa": true,
    "software": true,
    "doc": "https://support.1password.com/two-factor-authentication/"
  },
  "https://500px.com": {
    "name": "500px",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://support.500px.com/hc/en-us/articles/205115877-How-do-I-setup-Two-Factor-Authentication"
  },
  "https://aa.net.uk": {
    "name": "Andrews &amp; Arnold",
    "tfa": true,
    "software": true,
    "doc": "https://aa.net.uk/kb-broadband-2fa.html",
    "exceptions": {
      "text": "While both the accounts and control web pages support 2FA, each system is separate and requires its own setup."
    }
  },
  "https://about.holvi.com": {
    "name": "Holvi",
    "twitter": "Holvi",
    "facebook": "HolviCom",
    "tfa": false
  },
  "https://about.me": {
    "name": "about.me",
    "twitter": "aboutdotme",
    "tfa": false
  },
  "https://academicearth.org": {
    "name": "Academic Earth",
    "twitter": "academicearth",
    "facebook": "academicearth",
    "tfa": false
  },
  "https://accounts.adobe.com": {
    "name": "Adobe ID",
    "tfa": true,
    "sms": true,
    "software": true,
    "email": true,
    "doc": "https://helpx.adobe.com/x-productkb/global/adobe-id-account-change.html#2-step-verification",
    "exceptions": {
      "text": "To activate 2-Step Verification, you must provide a mobile phone number."
    }
  },
  "https://accounts.firefox.com": {
    "name": "Firefox",
    "tfa": true,
    "software": true,
    "doc": "https://support.mozilla.org/en-US/kb/secure-firefox-account-two-step-authentication"
  },
  "https://accounts.nintendo.com": {
    "name": "Nintendo Account",
    "tfa": true,
    "software": true,
    "doc": "http://en-americas-support.nintendo.com/app/answers/detail/a_id/27496",
    "exceptions": {
      "text": "2FA not available for child accounts (users 12 years of age or younger) or supervised accounts (users 13 years of age or older attached to a parent account)."
    }
  },
  "https://actionnetwork.org": {
    "name": "Action Network",
    "tfa": true,
    "software": true,
    "doc": "https://help.actionnetwork.org/hc/en-us/articles/217206826"
  },
  "https://activecollab.com": {
    "name": "ActiveCollab",
    "twitter": "activecollab",
    "tfa": false
  },
  "https://airbrake.io": {
    "name": "Airbrake",
    "tfa": true,
    "software": true,
    "doc": "https://airbrake.io/docs/features/two-factor-authentication/"
  },
  "https://airtable.com": {
    "name": "Airtable",
    "tfa": true,
    "software": true,
    "sms": true,
    "doc": "https://support.airtable.com/hc/en-us/articles/219409917-Setting-up-two-factor-authentication"
  },
  "https://airvpn.org": {
    "name": "Air VPN",
    "tfa": false,
    "twitter": "airvpn",
    "facebook": "airvpn.org"
  },
  "https://angel.co": {
    "name": "AngelList",
    "tfa": true,
    "sms": true,
    "software": true
  },
  "https://anxpro.com": {
    "name": "ANXPRO Bitcoin Exchange",
    "tfa": true,
    "software": true,
    "doc": "https://anxpro.com/pages/security"
  },
  "https://app.azendoo.com": {
    "name": "Azendoo",
    "tfa": false,
    "twitter": "Azendoo"
  },
  "https://app.sendloop.com": {
    "name": "Sendloop",
    "tfa": true,
    "software": true,
    "doc": "https://help.sendloop.com/docs/securing-your-account"
  },
  "https://app.spare5.com": {
    "name": "Spare5",
    "tfa": false,
    "twitter": "spare5",
    "facebook": "spare5app",
    "email_address": "feedback@spare5.com"
  },
  "https://appleid.apple.com": {
    "name": "Apple",
    "tfa": true,
    "sms": true,
    "software": true,
    "exceptions": {
      "text": "See http://support.apple.com/kb/HT5593 for a list of supported SMS carriers."
    },
    "doc": "http://support.apple.com/kb/ht5570"
  },
  "https://arpnetworks.com": {
    "name": "ARP Networks",
    "tfa": false,
    "twitter": "arpnetworks"
  },
  "https://asana.com": {
    "name": "Asana",
    "tfa": false,
    "twitter": "asana"
  },
  "https://ask.fm": {
    "name": "ASKfm",
    "tfa": false,
    "twitter": "askfm",
    "facebook": "askfmpage"
  },
  "https://atech.media": {
    "name": "aTech Media",
    "tfa": true,
    "software": true,
    "hardware": true,
    "doc": "https://atechmedia.com/blog/general/launches/two-factor-authentication"
  },
  "https://aternos.org": {
    "name": "Aternos",
    "tfa": true,
    "software": true
  },
  "https://atlas.hashicorp.com": {
    "name": "Hashicorp Atlas",
    "tfa": true,
    "software": true,
    "sms": true,
    "doc": "https://atlas.hashicorp.com/help/user-accounts/authentication#two-factor-authentication"
  },
  "https://auspost.com.au": {
    "name": "Australia Post",
    "tfa": false,
    "twitter": "auspost"
  },
  "https://automater.pl": {
    "name": "Automater",
    "tfa": true,
    "software": true,
    "doc": "https://www.youtube.com/watch?v=5OLcvjVhhuI"
  },
  "https://awardwallet.com": {
    "name": "AwardWallet",
    "tfa": true,
    "software": true,
    "doc": "https://awardwallet.com/faqs#44"
  },
  "https://aws.amazon.com": {
    "name": "Amazon AWS WorkSpaces",
    "doc": "https://aws.amazon.com/blogs/aws/multi-factor-auth-for-workspaces/",
    "tfa": true,
    "hardware": true,
    "software": true
  },
  "https://azure.microsoft.com": {
    "name": "Microsoft Azure",
    "tfa": true,
    "sms": true,
    "phone": true,
    "software": true,
    "doc": "https://azure.microsoft.com/en-us/documentation/articles/multi-factor-authentication/"
  },
  "https://badoo.com": {
    "name": "Badoo",
    "tfa": false,
    "twitter": "Badoo"
  },
  "https://balsamiq.com": {
    "name": "Balsamiq",
    "twitter": "balsamiq",
    "facebook": "balsamiq",
    "tfa": false
  },
  "https://bandcamp.com": {
    "name": "Bandcamp",
    "twitter": "bandcamp",
    "facebook": "Bandcamp",
    "tfa": false
  },
  "https://basecamp.com": {
    "name": "Basecamp",
    "tfa": true,
    "sms": true,
    "doc": "https://basecamp.com/help/guides/you/phone-verification"
  },
  "https://basiscode.com": {
    "name": "BasisCode Compliance",
    "tfa": true,
    "sms": true,
    "email": true,
    "phone": true,
    "doc": "https://basiscode.com/blog/two-factor-authentication-compliance-software/"
  },
  "https://bintray.com": {
    "name": "Bintray",
    "tfa": false,
    "twitter": "bintray"
  },
  "https://bitbay.net": {
    "name": "BitBay",
    "tfa": true,
    "email": true,
    "software": true,
    "doc": "https://bitbay.net/en/safety"
  },
  "https://bitbucket.org": {
    "name": "Bitbucket",
    "tfa": true,
    "software": true,
    "hardware": true,
    "doc": "https://confluence.atlassian.com/x/425QLg"
  },
  "https://bitcoin.de": {
    "name": "Bitcoin.de",
    "tfa": true,
    "software": true,
    "hardware": true,
    "doc": "https://www.bitcoin.de/de/faq/was-ist-die-2-step-verification-2-faktor-authentifizierung/46.html"
  },
  "https://bitcoinsnorway.com": {
    "name": "Bitcoins Norway",
    "tfa": true,
    "software": true
  },
  "https://bitflyer.com": {
    "name": "Bitflyer",
    "tfa": true,
    "email": true,
    "sms": true,
    "software": true,
    "doc": "https://bitflyer.jp/en/faq/2-10"
  },
  "https://bitlish.com": {
    "name": "Bitlish",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://bitlish.com/how#mfa"
  },
  "https://bitly.com": {
    "name": "Bitly",
    "tfa": true,
    "sms": true,
    "doc": "https://support.bitly.com/hc/en-us/articles/230650187-What-is-2-step-verification-"
  },
  "https://bitpay.com": {
    "name": "Bitpay",
    "tfa": true,
    "software": true,
    "doc": "https://bitpay.com/two-factor"
  },
  "https://bittrex.com": {
    "name": "Bittrex",
    "tfa": true,
    "software": true,
    "doc": "https://support.bittrex.com/hc/en-us/articles/115000198612-How-do-I-troubleshoot-backup-remove-disable-enable-Two-Factor-Authentication-2FA-"
  },
  "https://bitwarden.com": {
    "name": "bitwarden",
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
  "https://blizzard.com": {
    "name": "Blizzard",
    "tfa": true,
    "sms": true,
    "software": true,
    "hardware": true,
    "exceptions": {
      "text": "Software authentication requires the Blizzard Authenticator app."
    },
    "doc": "https://us.battle.net/support/en/article/Blizzard-Authenticator"
  },
  "https://bonobos.com": {
    "name": "Bonobos",
    "tfa": false,
    "twitter": "Bonobos",
    "facebook": "bonobos"
  },
  "https://braziliex.com": {
    "name": "Braziliex",
    "tfa": true,
    "software": true,
    "doc": "https://braziliex.com/faq/index.php?id=288"
  },
  "https://btcpop.co": {
    "name": "BTCPOP",
    "tfa": true,
    "software": true,
    "doc": "https://blog.btcpop.co/2017/04/27/signing-security-btcpop-co-account/"
  },
  "https://buffer.com": {
    "name": "Buffer",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://blog.bufferapp.com/introducing-the-safest-social-media-publishing-on-the-web"
  },
  "https://bugzilla.mozilla.org": {
    "name": "Bugzilla@Mozilla",
    "tfa": true,
    "software": true
  },
  "https://builtwith.com": {
    "name": "BuiltWith",
    "tfa": true,
    "software": true
  },
  "https://bulb.co.uk": {
    "name": "Bulb",
    "twitter": "bulbenergy",
    "facebook": "bulb",
    "tfa": false
  },
  "https://bx.in.th": {
    "name": "BX Thailand",
    "tfa": true,
    "software": true,
    "doc": "https://bx.in.th/info/faq/"
  },
  "https://c9.io": {
    "name": "Cloud9",
    "twitter": "Cloud9IDE",
    "tfa": false,
    "exceptions": {
      "text": "TFA available by signing up using GitHub"
    }
  },
  "https://cacoo.com": {
    "name": "Cacoo",
    "tfa": false,
    "facebook": "Cacoocom",
    "twitter": "cacoocom"
  },
  "https://campfirenow.com": {
    "name": "Campfire",
    "tfa": true,
    "sms": true,
    "doc": "https://help.37signals.com/sign-in/questions/460-how-do-i-set-up-and-use-phone-verification-for-logging-in"
  },
  "https://capsulecrm.com": {
    "name": "Capsule",
    "tfa": true,
    "software": true,
    "doc": "https://capsulecrm.com/support/user-preferences/#enabling-two-factor-authentication"
  },
  "https://carta.com": {
    "name": "Carta",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://support.carta.com/article/388-2-factor-authentication"
  },
  "https://cash.me": {
    "name": "Square Cash",
    "tfa": false,
    "twitter": "SquareCash"
  },
  "https://cdbaby.com": {
    "name": "CD Baby",
    "twitter": "cdbaby",
    "facebook": "cdbaby",
    "tfa": false
  },
  "https://cdnsun.com": {
    "name": "CDNsun",
    "tfa": true,
    "software": true,
    "doc": "https://cdnsun.com/knowledgebase/billing/two-factor-authentication"
  },
  "https://certification.comptia.org": {
    "name": "CompTIA",
    "tfa": false,
    "twitter": "comptia",
    "facebook": "CompTIA"
  },
  "https://cex.io": {
    "name": "CEX.IO",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://cex.io/guide#4"
  },
  "https://changelly.com": {
    "name": "Changelly",
    "tfa": true,
    "software": true,
    "doc": "https://changelly.com/faq#what-is-2fa-authentication"
  },
  "https://chartbeat.com": {
    "name": "Chartbeat",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://chartbeat.zendesk.com/hc/en-us/articles/209531888-Two-Factor-Authentication",
    "exceptions": {
      "text": "SMS required for 2FA."
    }
  },
  "https://chatgrape.com": {
    "name": "Grape",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://chatgrape.com/doc/deployment/2fa.html"
  },
  "https://chocolatey.org": {
    "name": "Chocolatey",
    "tfa": false,
    "twitter": "chocolateynuget",
    "facebook": "ChocolateySoftware"
  },
  "https://chunkhost.com": {
    "name": "ChunkHost",
    "tfa": true,
    "software": true
  },
  "https://circle.com": {
    "name": "Circle",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://support.circle.com/hc/en-us/articles/213560483--What-is-two-factor-authentication-2FA-"
  },
  "https://clever.com": {
    "name": "Clever",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://support.clever.com/hc/en-us/articles/202062333-Two-Factor-Authentication"
  },
  "https://cloud.ca": {
    "name": "cloud.ca",
    "tfa": true,
    "software": true,
    "doc": "https://cloud.ca/two-factor-authentication-is-now-available-on-cloud-ca/"
  },
  "https://cloud.google.com": {
    "name": "Google Cloud Platform",
    "tfa": true,
    "sms": true,
    "software": true,
    "phone": true,
    "hardware": true,
    "doc": "https://www.google.com/intl/en-US/landing/2step/features.html"
  },
  "https://cloud.mongodb.com": {
    "name": "MongoDB Cloud Manager",
    "tfa": true,
    "sms": true,
    "software": true,
    "phone": true,
    "doc": "https://docs.cloudmanager.mongodb.com/core/two-factor-authentication/"
  },
  "http://cloudatcost.com": {
    "name": "CloudAtCost",
    "twitter": "cloudatcost",
    "tfa": false
  },
  "https://cloudinary.com": {
    "name": "Cloudinary",
    "tfa": true,
    "software": true
  },
  "https://cobalt.io": {
    "name": "Cobalt",
    "tfa": true,
    "software": true,
    "doc": "https://cobalt.io/blog/new-feature-two-factor-auth/"
  },
  "https://codeanywhere.com": {
    "name": "Codeanywhere",
    "tfa": true,
    "sms": true,
    "doc": "https://docs.codeanywhere.com/features/twofactorauth.html",
    "exceptions": {
      "text": "Only available on paid accounts at $7/10 per month (annual/monthly) or more."
    }
  },
  "https://codeclimate.com": {
    "name": "Code Climate",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://docs.codeclimate.com/docs/enabling-two-factor-authentication"
  },
  "https://codeship.com": {
    "name": "Codeship",
    "tfa": true,
    "software": true,
    "doc": "https://documentation.codeship.com/general/about/2fa/"
  },
  "https://coinapult.com": {
    "name": "Coinapult",
    "tfa": true,
    "software": true,
    "doc": "https://coinapult.com/faq"
  },
  "https://coincafe.com": {
    "name": "Coin Cafe",
    "tfa": true,
    "software": true,
    "email": true,
    "doc": "https://blog.coincafe.com/2016/01/08/2fa/"
  },
  "https://coindeal.com": {
    "name": "CoinDeal",
    "tfa": true,
    "software": true,
    "sms": true,
    "doc": "https://coindeal.com/security"
  },
  "https://coinfalcon.com": {
    "name": "CoinFalcon",
    "tfa": true,
    "software": true,
    "doc": "https://support.coinfalcon.com/en-us/article/how-to-setup-two-factor-authentication-2fa-nkjppd/"
  },
  "https://coingate.com": {
    "name": "CoinGate",
    "tfa": true,
    "software": true,
    "doc": "https://support.coingate.com/en/65/how-do-i-set-up-2-factor-authentication-2fa-on-my-account"
  },
  "https://coinify.com": {
    "name": "Coinify (Merchants)",
    "tfa": true,
    "software": true,
    "hardware": true,
    "exceptions": {
      "text": "While Coinify has aquired BIPS to allow for trading, only merchant accounts support TFA at this time. Trading is done through a separate account. Hardware support is limited to a print-out character matrix."
    }
  },
  "https://coinone.co.kr": {
    "name": "CoinOne",
    "tfa": true,
    "software": true,
    "doc": "https://coinone.co.kr/static/download/coinone_guide.pdf"
  },
  "https://coins.ph": {
    "name": "Coins.ph",
    "tfa": true,
    "software": true,
    "doc": "https://support.coins.ph/hc/en-us/articles/202604924-What-is-two-factor-authentication-"
  },
  "https://combatgent.com": {
    "name": "Combatant Gentlemen",
    "tfa": false,
    "twitter": "CombatGent",
    "facebook": "combatgent"
  },
  "https://community.carbonblack.com": {
    "name": "Carbon Black Community Exchange",
    "tfa": false,
    "twitter": "CarbonBlack_Inc",
    "facebook": "carbonblackinc"
  },
  "https://commuterbenefits.com": {
    "name": "CommuterBenefits",
    "tfa": false,
    "twitter": "CommuterBenefit"
  },
  "https://console.bluemix.net": {
    "name": "IBM BlueMix",
    "tfa": false,
    "twitter": "IBMcloud",
    "facebook": "IBMCloud"
  },
  "https://contabo.de": {
    "name": "Contabo",
    "tfa": false,
    "twitter": "ContaboCom",
    "facebook": "ContaboDe",
    "email_address": "support@contabo.de",
    "lang": "de"
  },
  "https://context.io": {
    "name": "Context.IO",
    "tfa": true,
    "software": true,
    "doc": "https://context.io/security-faq"
  },
  "https://corp.gree.net": {
    "name": "GREE",
    "tfa": true,
    "software": true,
    "doc": "https://twofactorauth.org/notes/gree/"
  },
  "https://crowdin.com": {
    "name": "Crowdin",
    "tfa": true,
    "software": true
  },
  "https://customer.io": {
    "name": "Customer.io",
    "tfa": true,
    "software": true,
    "doc": "https://customer.io/docs/two-factor-auth.html"
  },
  "https://degoo.com": {
    "name": "Degoo",
    "tfa": false,
    "twitter": "DegooBackup",
    "facebook": "DegooBackup",
    "email_address": "support@degoo.com"
  },
  "https://del.icio.us": {
    "name": "Delicious",
    "twitter": "Delicious",
    "tfa": false
  },
  "https://delighted.com": {
    "name": "Delighted",
    "tfa": true,
    "sms": true
  },
  "https://deploybot.com": {
    "name": "Deploybot",
    "twitter": "deploybothq",
    "tfa": false
  },
  "https://detectify.com": {
    "name": "Detectify",
    "twitter": "detectify",
    "facebook": "detectify",
    "email_address": "hello@detectify.com",
    "tfa": false
  },
  "https://directmailmac.com": {
    "name": "Direct Mail",
    "tfa": true,
    "software": true,
    "doc": "https://directmailmac.com/support/article/507"
  },
  "https://directnic.com": {
    "name": "Directnic",
    "tfa": true,
    "software": true,
    "hardware": true,
    "doc": "https://directnic.com/knowledge/article/137:how+do+i+set+up+two-factor+authentication%3F"
  },
  "https://discordapp.com": {
    "name": "Discord",
    "tfa": true,
    "sms": true,
    "email": true,
    "software": true,
    "doc": "https://support.discordapp.com/hc/en-us/articles/219576828"
  },
  "https://disk.yandex.com": {
    "name": "Yandex.Disk",
    "tfa": true,
    "software": true,
    "exceptions": {
      "text": "SMS-capable phone required for initial setup."
    },
    "doc": "https://yandex.com/support/passport/authorization/twofa.html"
  },
  "https://disqus.com": {
    "name": "Disqus",
    "twitter": "disqus",
    "facebook": "disqus",
    "tfa": false
  },
  "https://dnsimple.com": {
    "name": "DNSimple",
    "tfa": true,
    "software": true,
    "doc": "https://support.dnsimple.com/articles/two-factor-authentication/"
  },
  "https://dnsmadeeasy.com": {
    "name": "DNS Made Easy",
    "tfa": true,
    "software": true,
    "doc": "http://help.dnsmadeeasy.com/managed-dns/administrative/enable-two-factor-authentication/"
  },
  "https://domains.google.com": {
    "name": "Google Domains",
    "tfa": true,
    "sms": true,
    "phone": true,
    "software": true,
    "hardware": true,
    "doc": "https://www.google.com/intl/en-US/landing/2step/features.html"
  },
  "https://dome9.com": {
    "name": "Dome9 Security",
    "tfa": true,
    "software": true,
    "hardware": true,
    "doc": "https://dome9.com/overview/strong-2-factor-authentication"
  },
  "https://domeneshop.no": {
    "name": "Domeneshop",
    "tfa": true,
    "sms": true,
    "software": true,
    "exceptions": {
      "text": "SMS available only to customers in Norway, Sweden and Denmark."
    },
    "doc": "https://domeneshop.no/faq?id=344"
  },
  "https://doodle.com": {
    "name": "Doodle",
    "twitter": "doodletweet",
    "tfa": false
  },
  "https://drive.google.com": {
    "name": "Google Drive",
    "tfa": true,
    "sms": true,
    "phone": true,
    "software": true,
    "hardware": true,
    "doc": "https://www.google.com/intl/en-US/landing/2step/features.html"
  },
  "https://dsx.uk": {
    "name": "DSX",
    "tfa": true,
    "software": true,
    "sms": true,
    "doc": "https://docs.dsx.uk/dsx/getting-started-with-dsx/your-security-is-our-priority/enable-two-factor-authentication"
  },
  "https://dutchbros.com": {
    "name": "Dutch Bros",
    "tfa": false,
    "twitter": "DutchBros",
    "facebook": "dutchbros"
  },
  "https://dyn.com": {
    "name": "Dyn",
    "tfa": true,
    "sms": true,
    "software": true,
    "exceptions": {
      "text": "Currently only supported for the Managed DNS & Email Delivery platforms (via DynID). Eventually DynID (and 2FA) will be rolled out to all platforms (no ETA)."
    },
    "doc": "https://help.dyn.com/2-factor-authentication/"
  },
  "https://easy.gr": {
    "name": "Easy",
    "tfa": true,
    "software": true,
    "doc": "https://easy.gr/el/faq"
  },
  "https://easydns.com": {
    "name": "easyDNS",
    "tfa": true,
    "sms": true,
    "email": true,
    "software": true,
    "doc": "https://kb.easydns.com/knowledge/account-security/"
  },
  "https://ebgames.com.au": {
    "name": "EB Games Australia",
    "tfa": false,
    "twitter": "EBGamesAus"
  },
  "https://ee.co.uk": {
    "name": "EE",
    "twitter": "EE",
    "facebook": "ee",
    "tfa": false
  },
  "https://ello.co": {
    "name": "Ello",
    "twitter": "ellohype",
    "facebook": "ellohype",
    "email_address": "suggestions@ello.co",
    "tfa": false
  },
  "https://envato.com": {
    "name": "Envato",
    "tfa": true,
    "software": true,
    "doc": "https://help.market.envato.com/hc/en-us/articles/115005592963-Two-factor-authentication-for-your-Envato-Market-account"
  },
  "https://evernote.com": {
    "name": "Evernote",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://help.evernote.com/hc/en-us/articles/208314238-How-to-set-up-two-step-verification"
  },
  "https://fabulous.com": {
    "name": "Fabulous",
    "tfa": true,
    "hardware": true,
    "software": true,
    "doc": "https://fabulous.com/knowledge/article/137"
  },
  "https://fi.google.com": {
    "name": "Project Fi",
    "tfa": true,
    "sms": true,
    "phone": true,
    "hardware": true,
    "software": true,
    "doc": "https://www.google.com/intl/en-US/landing/2step/features.html"
  },
  "https://fiber.google.com": {
    "name": "Google Fiber",
    "tfa": true,
    "sms": true,
    "phone": true,
    "software": true,
    "hardware": true,
    "doc": "https://www.google.com/intl/en-US/landing/2step/features.html"
  },
  "https://filethis.com": {
    "name": "FileThis",
    "twitter": "FileThisCompany",
    "tfa": false,
    "facebook": "FileThis"
  },
  "https://fit.google.com": {
    "name": "Google Fit",
    "tfa": true,
    "sms": true,
    "phone": true,
    "hardware": true,
    "software": true,
    "doc": "https://www.google.com/intl/en-US/landing/2step/features.html"
  },
  "https://flattr.com": {
    "name": "Flattr",
    "twitter": "flattr",
    "tfa": false
  },
  "https://fleep.io": {
    "name": "Fleep",
    "twitter": "fleepio",
    "facebook": "fleepio",
    "tfa": false
  },
  "https://flipboard.com": {
    "name": "Flipboard",
    "twitter": "FlipboardCS",
    "tfa": false
  },
  "https://forge.laravel.com": {
    "name": "Laravel Forge",
    "tfa": true,
    "software": true,
    "doc": "https://forge.laravel.com/user/profile#/authentication"
  },
  "https://foursquare.com": {
    "name": "Foursquare",
    "twitter": "foursquare",
    "tfa": false
  },
  "https://freedns.afraid.org": {
    "name": "FreeDNS",
    "email_address": "dnsadmin@afraid.org",
    "tfa": false
  },
  "https://frontapp.com": {
    "name": "Front App",
    "tfa": true,
    "software": true,
    "doc": "https://community.frontapp.com/t/q56jf8/activating-two-factor-authentication-2fa"
  },
  "https://frontier.com": {
    "name": "Frontier",
    "twitter": "AskFrontier",
    "facebook": "FrontierCorp",
    "tfa": false
  },
  "https://fruux.com": {
    "name": "fruux",
    "twitter": "fruux",
    "tfa": false
  },
  "https://fsdata.se": {
    "name": "FS Data",
    "tfa": false,
    "twitter": "fsdata",
    "facebook": "fsdata",
    "email_address": "info@fsdata.se",
    "lang": "sv"
  },
  "https://gaijin.net": {
    "name": "Gaijin Entertainment",
    "tfa": true,
    "email": true,
    "sms": true,
    "software": true,
    "doc": "https://support.gaijin.net/hc/en-us/articles/203623622-How-to-set-up-the-Two-Step-Authorization-Google-Authenticator-",
    "exceptions": {
      "text": "A verified phone number is required for the use of two-factor authentication through email or software."
    }
  },
  "https://gandi.net": {
    "name": "Gandi",
    "tfa": true,
    "software": true,
    "hardware": true,
    "doc": "https://doc.gandi.net/en/organization/users/security"
  },
  "https://gatehub.net": {
    "name": "Gatehub",
    "tfa": true,
    "sms": true,
    "software": true
  },
  "https://gemini.com": {
    "name": "Gemini",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://gemini.com/blog/better-two-factor-authentication/"
  },
  "https://getpocket.com": {
    "name": "Pocket",
    "twitter": "Pocket",
    "tfa": false
  },
  "https://getsentry.com": {
    "name": "Sentry",
    "tfa": true,
    "sms": true,
    "software": true,
    "hardware": true,
    "doc": "https://blog.getsentry.com/2016/06/22/introducing-2fa.html"
  },
  "https://github.com": {
    "name": "GitHub",
    "tfa": true,
    "sms": true,
    "software": true,
    "hardware": true,
    "doc": "https://help.github.com/articles/about-two-factor-authentication"
  },
  "https://gitlab.com": {
    "name": "GitLab",
    "tfa": true,
    "software": true,
    "hardware": true,
    "doc": "https://docs.gitlab.com/ee/user/profile/account/two_factor_authentication.html"
  },
  "https://glesys.com": {
    "name": "Glesys",
    "tfa": true,
    "software": true,
    "hardware": true
  },
  "https://gocardless.com": {
    "name": "GoCardless",
    "twitter": "GoCardless",
    "tfa": false
  },
  "https://greenhost.net": {
    "name": "Greenhost",
    "tfa": true,
    "software": true,
    "doc": "https://greenhost.net/2016/03/01/spring-news/"
  },
  "https://gusto.com": {
    "name": "Gusto",
    "tfa": true,
    "sms": true,
    "doc": "https://support.gusto.com/hc/en-us/articles/210838787-Two-Step-Authentication"
  },
  "https://hangouts.google.com": {
    "name": "Hangouts",
    "tfa": true,
    "sms": true,
    "phone": true,
    "software": true,
    "hardware": true,
    "doc": "https://www.google.com/intl/en-US/landing/2step/features.html"
  },
  "https://health.nokia.com": {
    "name": "Nokia Health (Withings)",
    "twitter": "NokiaHealth",
    "facebook": "NokiaHealth",
    "tfa": false
  },
  "https://hide.me": {
    "name": "hide.me VPN",
    "twitter": "thevpncompany",
    "facebook": "www.hide.me",
    "tfa": false
  },
  "https://hootsuite.com": {
    "name": "HootSuite",
    "tfa": true,
    "software": true,
    "doc": "https://help.hootsuite.com/entries/22527304-Managing-Google-Authenticator"
  },
  "https://hosthatch.com": {
    "name": "HostHatch",
    "tfa": true,
    "software": true
  },
  "https://hosting.wedos.com": {
    "name": "Wedos",
    "tfa": true,
    "software": true,
    "doc": "https://kb.wedos.com/cs/zakaznik/otp.html"
  },
  "https://hostiso.com": {
    "name": "Hostiso",
    "tfa": true,
    "software": true,
    "exceptions": {
      "text": "While both the main client area and the shared hosting panel support 2FA, each system is separate and requires its own setup."
    }
  },
  "https://hubic.com": {
    "name": "hubiC",
    "twitter": "hubic",
    "tfa": false
  },
  "https://icq.com": {
    "name": "ICQ",
    "twitter": "ICQ",
    "facebook": "ICQ",
    "tfa": false
  },
  "https://id.atlassian.com": {
    "name": "Atlassian Cloud",
    "tfa": true,
    "software": true,
    "doc": "https://confluence.atlassian.com/cloud/secure-your-account-with-two-step-verification-939505063.html",
    "exceptions": {
      "text": "2FA settings are service-specific."
    }
  },
  "https://id.nintendo.net": {
    "name": "Nintendo Network",
    "twitter": "NintendoAmerica",
    "facebook": "Nintendo",
    "tfa": false
  },
  "https://ifttt.com": {
    "name": "IFTTT",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://ifttt.com/settings#two-step-verification"
  },
  "https://imgur.com": {
    "name": "Imgur",
    "twitter": "imgur",
    "tfa": false
  },
  "https://iniz.com": {
    "name": "INIZ",
    "tfa": true,
    "software": true,
    "doc": "https://my.iniz.com/knowledgebase/24/Securing-Your-Account-2FA.html"
  },
  "https://internetbs.net": {
    "name": "Internet.bs",
    "tfa": true,
    "software": true,
    "doc": "https://twofactorauth.org/notes/internetbs/"
  },
  "https://intl.garena.com": {
    "name": "Garena Online",
    "tfa": true,
    "software": true,
    "doc": "https://account.garena.com/",
    "exceptions": {
      "text": "A mobile phone and Garena account level 3 or higher is required for 2FA."
    }
  },
  "https://invoiced.com": {
    "name": "Invoiced",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://support.invoiced.com/knowledge_base/topics/setting-up-two-factor-authentication"
  },
  "https://itch.io": {
    "name": "itch.io",
    "tfa": true,
    "software": true,
    "doc": "http://itch.io/developers/two-factor-authentication"
  },
  "https://itglue.com": {
    "name": "IT Glue",
    "tfa": true,
    "software": true,
    "doc": "https://kb.itglue.com/hc/en-us/articles/213293197-Using-multi-factor-authentication-MFA-"
  },
  "https://iwantmyname.com": {
    "name": "iWantMyName",
    "tfa": true,
    "software": true,
    "doc": "https://help.iwantmyname.com/customer/portal/articles/1139898"
  },
  "https://jet.com": {
    "name": "Jet",
    "twitter": "JetHeads",
    "tfa": false
  },
  "https://jetbrains.com": {
    "name": "JetBrains",
    "tfa": false,
    "twitter": "jetbrains",
    "facebook": "JetBrains"
  },
  "https://jetsmarter.com": {
    "name": "JetSmarter",
    "twitter": "JetSmarter",
    "facebook": "JetSmarter",
    "tfa": false
  },
  "https://joinmastodon.org": {
    "name": "Mastodon",
    "tfa": true,
    "software": true,
    "doc": "https://github.com/tootsuite/documentation/blob/master/Using-Mastodon/2FA.md"
  },
  "https://joker.com": {
    "name": "Joker.com",
    "tfa": true,
    "software": true,
    "doc": "https://joker.com/faq/content/52/480/en/what-is-two_factor_authentication.html"
  },
  "https://justworks.com": {
    "name": "Justworks",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://help.justworks.com/hc/en-us/articles/360004477492-Two-Factor-Authentication"
  },
  "https://keepersecurity.com": {
    "name": "Keeper",
    "tfa": true,
    "phone": true,
    "sms": true,
    "software": true,
    "doc": "https://www.keepersecurity.com/security#twoFactor"
  },
  "https://keybase.io": {
    "name": "Keybase",
    "twitter": "KeybaseIO",
    "tfa": false
  },
  "https://kinsta.com": {
    "name": "Kinsta",
    "tfa": true,
    "software": true,
    "doc": "https://kinsta.com/blog/wordpress-two-factor-authentication/"
  },
  "https://koding.com": {
    "name": "Koding",
    "tfa": true,
    "software": true,
    "doc": "https://www.koding.com/blog/2015/06/two-factor-authentication/"
  },
  "https://koofr.eu": {
    "name": "Koofr",
    "tfa": true,
    "software": true,
    "doc": "https://koofr.eu/help/other/how-do-i-enable-2-step-verification/"
  },
  "https://lastpass.com": {
    "name": "LastPass",
    "tfa": true,
    "software": true,
    "hardware": true,
    "doc": "https://helpdesk.lastpass.com/multifactor-authentication-options/"
  },
  "https://launchpad.net": {
    "name": "Launchpad",
    "tfa": true,
    "software": true,
    "hardware": true,
    "doc": "https://help.ubuntu.com/community/SSO/FAQs/2FA"
  },
  "https://leagueoflegends.com": {
    "name": "League of Legends",
    "twitter": "leagueoflegends",
    "facebook": "leagueoflegends",
    "tfa": false
  },
  "https://lichess.org": {
    "name": "lichess.org",
    "tfa": true,
    "software": true
  },
  "https://line.me": {
    "name": "LINE",
    "tfa": false,
    "facebook": "line.worldwide"
  },
  "https://lobste.rs": {
    "name": "Lobsters",
    "tfa": true,
    "software": true,
    "doc": "https://lobste.rs/s/1cyltz/two_factor_authentication_now_available"
  },
  "https://localbitcoins.com": {
    "name": "LocalBitcoins",
    "tfa": true,
    "software": true,
    "doc": "https://localbitcoins.blogspot.com.au/2013/05/using-two-factor-authentication-on.html"
  },
  "https://localethereum.com": {
    "name": "localethereum",
    "tfa": true,
    "software": true,
    "email": true
  },
  "https://login.gov": {
    "name": "login.gov",
    "tfa": true,
    "sms": true,
    "phone": true,
    "software": true,
    "doc": "https://login.gov/help/privacy-and-security/how-does-logingov-protect-my-data/"
  },
  "https://login.threatsim.com": {
    "name": "ThreatSim",
    "tfa": true,
    "sms": true
  },
  "https://looker.com": {
    "name": "Looker",
    "tfa": true,
    "software": true,
    "doc": "https://www.looker.com/docs/admin/security/two-factor-authentication"
  },
  "https://mail.aol.com": {
    "name": "Aol Mail",
    "tfa": true,
    "sms": true,
    "phone": true,
    "doc": "https://help.aol.com/articles/2-step-verification-stronger-than-your-password-alone"
  },
  "https://mail.de": {
    "name": "mail.de",
    "tfa": true,
    "software": true,
    "hardware": true,
    "doc": "https://mail.de/hilfe/u2f-authenticator"
  },
  "https://mail.google.com": {
    "name": "Gmail",
    "tfa": true,
    "sms": true,
    "phone": true,
    "software": true,
    "hardware": true,
    "doc": "https://www.google.com/intl/en-US/landing/2step/features.html"
  },
  "https://mail.riseup.net": {
    "name": "Riseup Mail",
    "twitter": "riseupnet",
    "tfa": false
  },
  "https://mail.ru": {
    "name": "Mail.Ru",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://help.mail.ru/mail-help/2auth"
  },
  "https://mail.tim.it": {
    "name": "TIM Mail",
    "tfa": false,
    "twitter": "TIM_Official",
    "facebook": "TimOfficialPage",
    "lang": "it"
  },
  "https://mail.yahoo.co.jp": {
    "name": "Yahoo Japan Mail",
    "tfa": true,
    "email": true,
    "software": true,
    "doc": "https://id.yahoo.co.jp/security/otp.html"
  },
  "https://mail.yahoo.com": {
    "name": "Yahoo Mail",
    "tfa": true,
    "sms": true,
    "phone": true,
    "doc": "https://help.yahoo.com/kb/SLN5013.html"
  },
  "https://mail.yandex.com": {
    "name": "Yandex.Mail",
    "tfa": true,
    "software": true,
    "exceptions": {
      "text": "SMS-capable phone required for initial setup."
    },
    "doc": "https://yandex.com/support/passport/authorization/twofa.xml"
  },
  "https://mailbox.org": {
    "name": "mailbox.org",
    "tfa": true,
    "software": true,
    "hardware": true,
    "doc": "https://support-en.mailbox.org/knowledge-base/article/is-there-a-two-factor-authentication"
  },
  "https://mailchimp.com": {
    "name": "MailChimp",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://kb.mailchimp.com/accounts/login/set-up-a-two-factor-authentication-app-at-login"
  },
  "https://mailfence.com": {
    "name": "Mailfence",
    "tfa": true,
    "software": true,
    "doc": "https://mailfence.com/c/mailfence/more/totp.jsp"
  },
  "https://maxemail.emailcenteruk.com": {
    "name": "Maxemail",
    "tfa": true,
    "hardware": true,
    "doc": "https://www.emailcenteruk.com/maxemail/platform-security-collaboration/"
  },
  "https://mediatemple.net": {
    "name": "Media Temple",
    "twitter": "mediatemple",
    "tfa": false
  },
  "https://medium.com": {
    "name": "Medium",
    "tfa": true,
    "email": true,
    "exceptions": {
      "text": "Medium doesn't use passwords, instead emails a link to user to login"
    }
  },
  "https://mega.nz": {
    "name": "Mega",
    "twitter": "MEGAprivacy",
    "tfa": false
  },
  "https://meraki.cisco.com": {
    "name": "Cisco Meraki",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://documentation.meraki.com/zGeneral_Administration/Managing_Dashboard_Access/Using_Google_Authenticator_for_Two-factor_Authentication_in_Dashboard"
  },
  "https://metaname.net": {
    "name": "Metaname",
    "tfa": true,
    "sms": true,
    "doc": "https://metaname.net/public/two_factor_authentication"
  },
  "https://metorik.com": {
    "name": "Metorik",
    "tfa": true,
    "software": true,
    "doc": "https://help.metorik.com/article/22-how-can-i-enable-2fa-on-my-account"
  },
  "https://misfit.com": {
    "name": "Misfit",
    "twitter": "Misfit",
    "tfa": false
  },
  "https://misshosting.com": {
    "name": "Miss Hosting",
    "twitter": "misshostingcom",
    "facebook": "misshostingcom",
    "tfa": false,
    "lang": "sv"
  },
  "https://mixer.com": {
    "name": "Mixer",
    "tfa": true,
    "software": true,
    "doc": "https://watchbeam.zendesk.com/hc/en-us/articles/115000997646-What-is-2FA-two-factor-authentication-and-How-do-I-set-it-up-"
  },
  "https://mixpanel.com": {
    "name": "Mixpanel",
    "tfa": true,
    "sms": true,
    "software": true
  },
  "https://mlab.com": {
    "name": "mLab",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "http://docs.mlab.com/security/#two-factor-authentication"
  },
  "https://moj.tele2.hr": {
    "name": "Moj Tele2",
    "twitter": "Tele2Croatia",
    "facebook": "tele2.hr",
    "tfa": false,
    "lang": "hr"
  },
  "https://mojang.com": {
    "name": "Mojang",
    "twitter": "MojangSupport",
    "tfa": false
  },
  "https://money.yandex.ru": {
    "name": "Yandex.Money",
    "tfa": true,
    "sms": true,
    "software": true,
    "hardware": true,
    "doc": "https://money.yandex.ru/doc.xml?id=524852"
  },
  "https://money.yodlee.com": {
    "name": "money by Envestnet | Yodlee",
    "twitter": "Yodlee",
    "tfa": false
  },
  "https://monzo.com": {
    "name": "Monzo",
    "twitter": "monzo",
    "facebook": "monzobank",
    "tfa": false
  },
  "https://mxroute.com": {
    "name": "MXroute",
    "tfa": true,
    "software": true
  },
  "https://my.gov.au": {
    "name": "myGov",
    "tfa": true,
    "sms": true,
    "doc": "https://my.gov.au/mygov/content/html/help.html#sec-features"
  },
  "https://n26.com": {
    "name": "N26",
    "twitter": "n26",
    "facebook": "N26",
    "tfa": false
  },
  "https://na.square-enix.com": {
    "name": "Square Enix",
    "tfa": true,
    "software": true,
    "hardware": true,
    "doc": "http://www.square-enix.com/na/account/otp/",
    "exceptions": {
      "text": "Software implementation requires you to have purchased either Final Fantasy XI or Final Fantasy XIV and registered the game."
    }
  },
  "https://necu.org": {
    "name": "Northeast Credit Union",
    "tfa": false,
    "twitter": "NortheastCU",
    "facebook": "northeastcu"
  },
  "https://nest.com": {
    "name": "Nest",
    "tfa": true,
    "sms": true,
    "doc": "https://nest.com/support/article/How-to-use-2-step-verification-to-add-stronger-security-to-your-Nest-Account"
  },
  "https://newrelic.com": {
    "name": "New Relic",
    "twitter": "newrelic",
    "facebook": "NewRelic",
    "tfa": false
  },
  "https://nextdoor.com": {
    "name": "Nextdoor",
    "twitter": "Nextdoor",
    "tfa": false
  },
  "https://noez.de": {
    "name": "Noez",
    "tfa": true,
    "software": true
  },
  "https://noke.com": {
    "name": "Noke",
    "tfa": false,
    "twitter": "NokeLocks",
    "facebook": "nokelocks",
    "email_address": "support@noke.com"
  },
  "https://nordvpn.com": {
    "name": "NordVPN",
    "tfa": false,
    "twitter": "NordVPN",
    "facebook": "NordVPN"
  },
  "https://nostarch.com": {
    "name": "No Starch Press",
    "tfa": true,
    "software": true
  },
  "https://ns1.com": {
    "name": "NS1",
    "tfa": true,
    "software": true,
    "doc": "https://ns1.com/articles/enabling-2-factor-authentication"
  },
  "https://office.microsoft.com": {
    "name": "Office 365",
    "tfa": true,
    "software": true,
    "sms": true,
    "phone": true,
    "doc": "https://support.office.com/en-US/article/Set-up-multi-factor-authentication-for-Office-365-8f0454b2-f51a-4d9c-bcde-2c48e41621c6"
  },
  "https://onedrive.live.com": {
    "name": "OneDrive",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://support.microsoft.com/en-us/help/12408/microsoft-account-about-two-step-verification"
  },
  "https://online.citi.com": {
    "name": "Citibank",
    "twitter": "Citibank",
    "facebook": "citibank",
    "tfa": false
  },
  "https://opensrs.com": {
    "name": "OpenSRS",
    "tfa": true,
    "software": true,
    "sms": true,
    "doc": "https://help.opensrs.com/hc/en-us/articles/209618017-Two-Factor-Authentication-2FA-for-Reseller-Account-Access"
  },
  "https://outlook.live.com": {
    "name": "Outlook.com",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://support.microsoft.com/en-us/help/12408/microsoft-account-about-two-step-verification"
  },
  "https://packagist.org": {
    "name": "Packagist",
    "tfa": false,
    "twitter": "packagist",
    "email_address": "contact@packagist.org"
  },
  "https://papertrailapp.com": {
    "name": "Papertrail",
    "twitter": "papertrailapp",
    "tfa": false
  },
  "https://partnersfcu.org": {
    "name": "Partners Federal Credit Union",
    "tfa": false
  },
  "https://passhub.net": {
    "name": "PassHub",
    "tfa": true,
    "software": true,
    "hardware": true,
    "exceptions": {
      "text": "Hardware tokens only work on desktop."
    },
    "doc": "https://passhub.net/security.php"
  },
  "https://pastebin.com": {
    "name": "Pastebin",
    "tfa": false,
    "twitter": "pastebin",
    "facebook": "pastebin",
    "email_address": "admin@pastebin.com"
  },
  "https://pay.amazon.com": {
    "name": "Amazon Pay",
    "tfa": true,
    "software": true,
    "sms": true,
    "exceptions": {
      "text": "SMS or phone call required to enable 2FA. Enabling on Amazon.com activates 2FA on other regional Amazon sites, such as UK and DE."
    },
    "doc": "https://www.amazon.com/gp/help/customer/display.html?nodeId=201962420"
  },
  "https://payeer.com": {
    "name": "PAYEER",
    "tfa": true,
    "sms": true,
    "email": true,
    "software": true,
    "exceptions": {
      "text": "Receiving codes via SMS cost 0.05$ each message. 2FA is personalizable in account settings."
    },
    "doc": "https://payeer.com/en/faq/"
  },
  "https://paytm.com": {
    "name": "Paytm",
    "tfa": true,
    "sms": true,
    "doc": "https://blog.paytm.com/secure-2-step-authentication-login-on-paytms-website-6dd5a20ae1b2"
  },
  "http://paytrust.quicken.com": {
    "name": "Paytrust",
    "tfa": true,
    "phone": true
  },
  "https://personal.natwest.com": {
    "name": "Natwest UK",
    "tfa": true,
    "hardware": true,
    "doc": "http://www.natwest.com/personal/online-banking/g1/banking-safely-online/card-reader.ashx"
  },
  "https://phacility.com": {
    "name": "Phacility",
    "tfa": true,
    "software": true
  },
  "https://phraseapp.com": {
    "name": "PhraseApp",
    "tfa": true,
    "software": true,
    "doc": "https://phraseapp.com/blog/posts/multi-factor-how-to-secure-your-account-using-multi-factor/"
  },
  "https://picarto.tv": {
    "name": "Picarto.TV",
    "twitter": "PicartoTV",
    "facebook": "picartotv",
    "email_address": "support@picarto.tv",
    "tfa": false
  },
  "https://pinboard.in": {
    "name": "Pinboard",
    "twitter": "Pinboard",
    "tfa": false
  },
  "https://plan.io": {
    "name": "Planio",
    "tfa": true,
    "software": true,
    "doc": "https://support.plan.io/news/133"
  },
  "https://planning.center": {
    "name": "Planning Center Online",
    "twitter": "planningcenter",
    "facebook": "PlanningCenter",
    "tfa": false
  },
  "https://play.google.com": {
    "name": "Google Play",
    "tfa": true,
    "sms": true,
    "phone": true,
    "hardware": true,
    "software": true,
    "doc": "https://www.google.com/intl/en-US/landing/2step/features.html"
  },
  "https://plurk.com": {
    "name": "Plurk",
    "tfa": true,
    "software": true
  },
  "https://plus.google.com": {
    "name": "Google+",
    "tfa": true,
    "sms": true,
    "phone": true,
    "software": true,
    "hardware": true,
    "doc": "https://www.google.com/intl/en-US/landing/2step/features.html"
  },
  "https://pogoplug.com": {
    "name": "Pogoplug",
    "twitter": "pogoplug",
    "tfa": false
  },
  "https://pointhq.com": {
    "name": "PointDNS",
    "twitter": "pointdns",
    "tfa": false
  },
  "https://poloniex.com": {
    "name": "Poloniex",
    "tfa": true,
    "software": true,
    "doc": "https://poloniex.freshdesk.com/support/solutions/articles/1000225338-how-do-i-to-setup-two-factor-authentication"
  },
  "https://porkbun.com": {
    "name": "porkbun",
    "tfa": true,
    "software": true,
    "doc": "https://porkbun.com/products/two_factor_authentication"
  },
  "https://posteo.de": {
    "name": "Posteo",
    "tfa": true,
    "software": true,
    "doc": "https://posteo.de/en/help/what-is-two-factor-authentication-and-how-do-i-set-it-up"
  },
  "https://postmates.com": {
    "name": "Postmates",
    "twitter": "postmates",
    "tfa": false
  },
  "https://preyproject.com": {
    "name": "Prey",
    "tfa": true,
    "software": true,
    "doc": "http://help.preyproject.com/article/248-how-to-enable-the-two-step-authenticator-for-prey"
  },
  "https://privacy.com": {
    "name": "Privacy",
    "tfa": true,
    "software": true,
    "doc": "https://privacy.com/faq"
  },
  "https://protonmail.com": {
    "name": "ProtonMail",
    "tfa": true,
    "software": true,
    "doc": "https://protonmail.com/support/knowledge-base/two-factor-authentication/"
  },
  "https://protonvpn.com": {
    "name": "ProtonVPN",
    "tfa": true,
    "software": true
  },
  "https://purse.io": {
    "name": "Purse",
    "tfa": true,
    "software": true,
    "doc": "https://support.purse.io/account/2-factor-authentication-2fa"
  },
  "https://pushover.net": {
    "name": "Pushover",
    "tfa": true,
    "software": true,
    "doc": "https://pushover.net/faq#security-2fa"
  },
  "https://pypi.org": {
    "name": "PyPI",
    "twitter": "pypi",
    "tfa": false
  },
  "https://quickbooks.intuit.com": {
    "name": "Quickbooks Online",
    "tfa": true,
    "sms": true,
    "phone": true,
    "software": true,
    "doc": "https://community.intuit.com/articles/1164912-multi-factor-authentication-faq"
  },
  "https://raygun.com": {
    "name": "Raygun",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://raygun.com/docs/workflow/two-factor-authentication"
  },
  "https://rbcommons.com": {
    "name": "RBCommons",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "http://support.beanbaginc.com/support/solutions/articles/3000006998-enabling-two-factor-authentication"
  },
  "https://rbltracker.com": {
    "name": "RBLTracker",
    "tfa": true,
    "software": true,
    "doc": "https://rbltracker.com/docs/setting-up-two-factor-authentication/"
  },
  "https://recurly.com": {
    "name": "Recurly",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://docs.recurly.com/docs/two-factor-authentication"
  },
  "https://register4less.com": {
    "name": "Register4Less",
    "tfa": true,
    "software": true,
    "doc": "http://blog.register4less.com/?p=43"
  },
  "https://registro.br": {
    "name": "Registro.br",
    "tfa": true,
    "hardware": true,
    "software": true,
    "doc": "https://registro.br/ajuda.html?secao=GerenciamentoConta&item=310"
  },
  "https://robertsspaceindustries.com": {
    "name": "Roberts Space Industries",
    "tfa": true,
    "software": true,
    "email": true,
    "doc": "https://robertsspaceindustries.com/faq/two-step-authentication"
  },
  "https://rollbar.com": {
    "name": "Rollbar",
    "tfa": true,
    "software": true,
    "doc": "https://rollbar.com/docs/two-factor-authentication/"
  },
  "https://rubygems.org": {
    "name": "RubyGems.org",
    "tfa": false,
    "twitter": "rubygems",
    "email_address": "security@rubygems.org"
  },
  "https://runbox.com": {
    "name": "Runbox",
    "tfa": true,
    "software": true,
    "doc": "https://help.runbox.com/account-security/"
  },
  "https://ryver.com": {
    "name": "Ryver",
    "twitter": "ryverapp",
    "facebook": "RyverApp",
    "tfa": false
  },
  "https://saaspass.com": {
    "name": "SAASPASS",
    "tfa": true,
    "sms": true,
    "software": true,
    "hardware": true,
    "doc": "https://saaspass.com/faq/"
  },
  "https://santander.pl": {
    "name": "Bank Zachodni WBK",
    "tfa": true,
    "sms": true,
    "doc": "https://www.bzwbk.pl/firmy/bankowosc-elektroniczna/bzwbk24-mini-firma/metody-autoryzacji/metody-autoryzacji.html"
  },
  "https://satoshitango.com": {
    "name": "SatoshiTango",
    "tfa": true,
    "software": true,
    "doc": "https://github.com/2factorauth/twofactorauth/pull/2321#issuecomment-273971890"
  },
  "https://saucelabs.com": {
    "name": "Sauce Labs",
    "tfa": false,
    "twitter": "saucelabs",
    "facebook": "saucelabs",
    "email_address": "support@saucelabs.com"
  },
  "https://scryfall.com": {
    "name": "Scryfall",
    "tfa": true,
    "software": true,
    "doc": "https://scryfall.com/docs/privacy#scryfall-accounts"
  },
  "https://seb.se": {
    "name": "SEB",
    "tfa": true,
    "software": true,
    "hardware": true,
    "doc": "https://seb.se/privat/digitala-tjanster"
  },
  "https://secure.checkout.visa.com": {
    "name": "Visa Checkout",
    "tfa": false,
    "twitter": "VisaCheckout"
  },
  "https://semaphoreci.com": {
    "name": "Semaphore",
    "tfa": true,
    "doc": "https://semaphoreci.com/docs/two-step-verification.html",
    "software": true
  },
  "https://sendgrid.com": {
    "name": "SendGrid",
    "tfa": true,
    "sms": true,
    "software": true,
    "exceptions": {
      "text": "Software authentication requires the Authy app."
    },
    "doc": "https://sendgrid.com/docs/User_Guide/Settings/two_factor_authentication.html"
  },
  "https://sentry.rmu.edu": {
    "name": "Robert Morris University",
    "twitter": "rmu",
    "facebook": "RMUpgh",
    "tfa": false
  },
  "https://server.nitrado.net": {
    "name": "Nitrado",
    "tfa": true,
    "software": true,
    "hardware": true,
    "doc": "https://server.nitrado.net/deu/news2/view/nitrado-bietet-zweifaktorauthentifizierung/?f=index/mode:0/page:2"
  },
  "https://servicecu.org": {
    "name": "Service Credit Union",
    "tfa": false,
    "facebook": "ServiceCreditUnion"
  },
  "https://shop.nordstrom.com": {
    "name": "Nordstrom",
    "tfa": false,
    "twitter": "Nordstrom",
    "facebook": "Nordstrom"
  },
  "https://simpletax.ca": {
    "name": "SimpleTax",
    "tfa": true,
    "software": true,
    "doc": "https://help.simpletax.ca/questions/two-factor-authentication"
  },
  "https://sixthcontinent.com": {
    "name": "SixthContinent",
    "tfa": false,
    "twitter": "sxc_italia",
    "facebook": "sixthcontinent.it"
  },
  "https://skrill.com": {
    "name": "Skrill",
    "tfa": true,
    "hardware": true,
    "software": true,
    "doc": "https://www.skrill.com/en/support#/path/ACCOUNT/Two-Factor-Authentication/905761532/Two-Factor-Authentication-2FA.htm"
  },
  "https://sl.se": {
    "name": "SL",
    "twitter": "SL_AB",
    "facebook": "KanalSL",
    "tfa": false
  },
  "https://slack.com": {
    "name": "Slack",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://slack.zendesk.com/hc/en-us/articles/204509068-Enabling-two-factor-authentication"
  },
  "https://smartrip.wmata.com": {
    "name": "SmarTrip",
    "twitter": "wmata",
    "facebook": "MetroForward",
    "tfa": false
  },
  "https://socialclub.rockstargames.com": {
    "name": "Rockstar Games Social Club",
    "tfa": true,
    "software": true,
    "doc": "https://support.rockstargames.com/hc/en-us/articles/360000031747-Setting-Up-2-Step-Verification-with-Social-Club"
  },
  "https://socketlabs.com": {
    "name": "SocketLabs",
    "sms": true,
    "tfa": true,
    "software": true,
    "doc": "https://support.socketlabs.com/kb/145"
  },
  "https://soundcloud.com": {
    "name": "SoundCloud",
    "twitter": "SCsupport",
    "facebook": "SoundCloud",
    "tfa": false
  },
  "https://sourceforge.net": {
    "name": "SourceForge",
    "tfa": true,
    "software": true,
    "doc": "https://sourceforge.net/blog/introducing-multifactor-authentication-on-sourceforge/"
  },
  "https://spideroak.com": {
    "name": "SpiderOak",
    "twitter": "spideroak",
    "tfa": false,
    "facebook": "SpiderOak"
  },
  "https://squareup.com": {
    "name": "Square",
    "tfa": true,
    "sms": true,
    "software": true,
    "exceptions": {
      "text": "SMS only supported in US and Canada"
    },
    "doc": "https://squareup.com/help/us/en/article/5593-2-step-verification"
  },
  "https://stackexchange.com": {
    "name": "Stack Exchange",
    "twitter": "StackExchange",
    "tfa": false
  },
  "https://stacksocial.com": {
    "name": "Stack Social",
    "twitter": "StackSocial",
    "tfa": false
  },
  "https://status.io": {
    "name": "Status.io",
    "tfa": true,
    "hardware": true,
    "doc": "http://blog.status.io/2014/03/01/yubikey/"
  },
  "http://store.steampowered.com": {
    "name": "Steam",
    "tfa": true,
    "email": true,
    "software": true,
    "doc": "https://support.steampowered.com/kb_article.php?ref=8625-WRAH-9030",
    "exceptions": {
      "text": "Software implementation requires use of the Steam Mobile app. Authentication on non-phone devices is not officially supported. SMS support is limited to receiving account recovery codes for password resets."
    }
  },
  "https://stripe.com": {
    "name": "Stripe",
    "tfa": true,
    "sms": true,
    "software": true,
    "hardware": true,
    "doc": "https://support.stripe.com/questions/how-do-i-enable-two-step-verification"
  },
  "https://studentaid.ed.gov": {
    "name": "Federal Student Aid",
    "tfa": false,
    "twitter": "FAFSA",
    "facebook": "FederalStudentAid"
  },
  "https://taiga.io": {
    "name": "Taiga.io",
    "twitter": "taigaio",
    "facebook": "taigaio",
    "tfa": false
  },
  "https://telegram.org": {
    "name": "Telegram",
    "tfa": true,
    "sms": true,
    "phone": true,
    "doc": "https://telegram.org/blog/sessions-and-2-step-verification"
  },
  "https://telzio.com": {
    "name": "Telzio",
    "tfa": true,
    "software": true,
    "doc": "https://telzio.com/support/two-factor-authentication"
  },
  "https://tfl.gov.uk": {
    "name": "Transport for London",
    "twitter": "tflwaystopay",
    "facebook": "transportforlondon",
    "tfa": false
  },
  "https://thisdata.com": {
    "name": "ThisData",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://thisdata.com/blog/how-to-enable-two-factor-authentication/"
  },
  "https://threat-x.com": {
    "name": "Threat X",
    "tfa": true,
    "software": true
  },
  "https://threatconnect.com": {
    "name": "ThreatConnect",
    "tfa": true,
    "software": true,
    "doc": "http://kb.threatconnect.com/customer/en/portal/articles/2214975-configuring-user-settings-and-two-factor-authentication"
  },
  "https://thriva.co": {
    "name": "Thriva",
    "twitter": "thrivahealth",
    "facebook": "thriva",
    "tfa": false
  },
  "https://tidal.com": {
    "name": "TIDAL",
    "twitter": "TIDALHiFi",
    "facebook": "TIDAL",
    "email_address": "support@tidal.com",
    "tfa": false
  },
  "https://ting.com": {
    "name": "Ting",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://help.ting.com/hc/en-us/articles/209351258-Two-Factor-Authentication"
  },
  "https://todo.microsoft.com": {
    "name": "Microsoft To-Do",
    "tfa": true,
    "email": true,
    "sms": true,
    "software": true,
    "doc": "https://support.microsoft.com/en-us/help/12408/microsoft-account-about-two-step-verification"
  },
  "https://todoist.com": {
    "name": "Todoist",
    "twitter": "todoist",
    "tfa": false
  },
  "https://toggl.com": {
    "name": "Toggl",
    "twitter": "toggl",
    "facebook": "Toggl",
    "tfa": false
  },
  "https://torguard.net": {
    "name": "TorGuard",
    "tfa": true,
    "software": true
  },
  "https://transferwise.com": {
    "name": "TransferWise",
    "tfa": true,
    "sms": true,
    "phone": true,
    "software": true,
    "doc": "https://transferwise.com/help/article/2811597/borderless-account/how-can-i-setup-2-step-login"
  },
  "https://trello.com": {
    "name": "Trello",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "http://help.trello.com/article/993-enabling-two-factor-authentication-for-your-trello-account"
  },
  "https://tresorit.com": {
    "name": "Tresorit",
    "tfa": true,
    "sms": true,
    "phone": true,
    "software": true,
    "email": true,
    "doc": "https://support.tresorit.com/entries/104192996-How-to-set-up-two-step-verification"
  },
  "https://turbotax.intuit.com": {
    "name": "Intuit TurboTax",
    "tfa": true,
    "sms": true,
    "phone": true,
    "email": true,
    "software": true,
    "doc": "https://ttlc.intuit.com/questions/2902682-what-is-two-step-verification"
  },
  "https://tutanota.com": {
    "name": "Tutanota",
    "tfa": true,
    "software": true,
    "hardware": true,
    "exceptions": {
      "text": "2FA only available on their beta client."
    },
    "doc": "https://tutanota.uservoice.com/knowledgebase/articles/1201942"
  },
  "https://twitter.com": {
    "name": "Twitter",
    "tfa": true,
    "sms": true,
    "exceptions": {
      "text": "SMS only available on select providers. Phone number associated with account required for 2FA. 10 accounts per phone number, 1 phone number per account."
    },
    "software": true,
    "hardware": true,
    "doc": "https://support.twitter.com/articles/20170388"
  },
  "https://unfuddle.com": {
    "name": "Unfuddle",
    "tfa": true,
    "sms": true,
    "phone": true,
    "software": true,
    "doc": "https://unfuddle.com/blog/2014/07/140721-two-factor-authentication"
  },
  "https://uniregistry.com": {
    "name": "Uniregistry",
    "tfa": true,
    "software": true,
    "doc": "https://uniregistry.help/my-account-en/what-is-two-step-verification/"
  },
  "https://unity3d.com": {
    "name": "Unity",
    "tfa": true,
    "sms": true,
    "doc": "https://support.unity3d.com/hc/en-us/articles/208764976-How-do-I-enable-Two-Factor-Authentication-on-my-account-"
  },
  "https://uphold.com": {
    "name": "Uphold",
    "tfa": true,
    "sms": true,
    "phone": true,
    "software": true,
    "doc": "https://support.uphold.com/hc/en-us/articles/206119683-How-does-phone-number-verification-work-"
  },
  "https://uplay.ubi.com": {
    "name": "Ubisoft/Uplay",
    "tfa": true,
    "software": true,
    "doc": "https://support.ubi.com/en-GB/Faqs/000025170/Secure-your-account-with-2-Step-Verification"
  },
  "https://uptimerobot.com": {
    "name": "Uptime Robot",
    "twitter": "uptimerobot",
    "facebook": "UptimeRobot",
    "tfa": false
  },
  "https://us.etrade.com": {
    "name": "OptionsHouse",
    "tfa": false,
    "twitter": "OptionsHouse"
  },
  "https://us.mytaxi.com": {
    "name": "mytaxi",
    "tfa": false,
    "twitter": "mytaxius",
    "facebook": "myTaxi.us"
  },
  "https://us.norton.com": {
    "name": "Norton",
    "tfa": true,
    "software": true,
    "hardware": true,
    "sms": true,
    "phone": true,
    "doc": "https://support.norton.com/sp/en/us/home/current/solutions/v100023155_NortonM_Retail_1_en_us"
  },
  "https://usabilla.com": {
    "name": "Usabilla",
    "tfa": true,
    "software": true,
    "doc": "https://support.usabilla.com/hc/en-us/articles/207976889-Setting-up-2-step-authentication"
  },
  "https://userify.com": {
    "name": "Userify",
    "tfa": true,
    "software": true,
    "hardware": true,
    "doc": "https://userify.com/docs/multifactor-authentication/"
  },
  "https://vanillaforums.com": {
    "name": "VanillaForums.com",
    "tfa": false,
    "twitter": "vanilla"
  },
  "https://venmo.com": {
    "name": "Venmo",
    "tfa": true,
    "sms": true,
    "doc": "https://help.venmo.com/hc/en-us/articles/217532397--Confirm-my-identity-on-sign-in-Why"
  },
  "https://ventraip.com.au": {
    "name": "VentraIP",
    "tfa": true,
    "sms": true,
    "email": true,
    "doc": "https://ventraip.com.au/blog/products-and-services/vipcontrol-2-1/"
  },
  "https://video.ibm.com": {
    "name": "IBM Cloud Video (Ustream)",
    "twitter": "ibmcloudvideo",
    "facebook": "ibmcloudvideo",
    "tfa": false
  },
  "https://vimeo.com": {
    "name": "Vimeo",
    "twitter": "vimeo",
    "facebook": "Vimeo",
    "tfa": false
  },
  "https://vimla.se": {
    "name": "Vimla",
    "twitter": "Vimla_se",
    "facebook": "vimla.se",
    "tfa": false,
    "lang": "sv"
  },
  "https://visualstudio.microsoft.com": {
    "name": "Visual Studio Online",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://windows.microsoft.com/en-us/windows/two-step-verification-faq"
  },
  "https://vk.com": {
    "name": "VK",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://vk.com/page-59800369_47885415"
  },
  "https://voip.ms": {
    "name": "VoIP.ms",
    "twitter": "voipms",
    "tfa": false
  },
  "https://vpnunlimitedapp.com": {
    "name": "VPN Unlimited",
    "twitter": "vpnunlimited",
    "facebook": "vpnunlimitedapp",
    "tfa": false
  },
  "https://vt.edu": {
    "name": "Virginia Tech",
    "tfa": true,
    "sms": true,
    "phone": true,
    "software": true,
    "hardware": true,
    "doc": "http://www.tech.it.vt.edu/2factor/"
  },
  "https://vystarcu.org": {
    "name": "VyStar Credit Union",
    "twitter": "OfficialVyStar",
    "facebook": "VyStarCU",
    "tfa": false
  },
  "http://wargaming.net": {
    "name": "Wargaming",
    "tfa": true,
    "software": true,
    "doc": "https://wargaming.net/support/kb/articles/792"
  },
  "https://web.any.do": {
    "name": "Any.do",
    "tfa": false,
    "twitter": "AnyDO",
    "facebook": "Any.do"
  },
  "https://web.de": {
    "name": "Web.de",
    "twitter": "WEBDE",
    "facebook": "WEB.DE",
    "lang": "de",
    "tfa": false
  },
  "https://web.iit.edu": {
    "name": "Illinois Institute Of Technology",
    "twitter": "illinoistech",
    "facebook": "illinoistech",
    "email_address": "supportdesk@iit.edu",
    "tfa": false,
    "exceptions": {
      "text": "Illinois Tech uses Google Apps for Eductation for their email; so they could very easily add tfa to their email, but at the time of this commit, they have it disabled and do not plan to implement it any time soon."
    }
  },
  "https://web.mit.edu": {
    "name": "Massachusetts Institute of Technology",
    "tfa": true,
    "sms": true,
    "phone": true,
    "hardware": true,
    "software": true,
    "doc": "https://kb.mit.edu/confluence/display/istcontrib/Duo+Authentication+Landing+Page"
  },
  "https://wex.nz": {
    "name": "WEX (BTC-E)",
    "tfa": true,
    "software": true,
    "doc": "https://wex.kayako.com/en-us/article/58-how-to-use-two-factor-authentication"
  },
  "https://windscribe.com": {
    "name": "Windscribe",
    "tfa": false,
    "twitter": "windscribecom",
    "facebook": "windscribe"
  },
  "https://wordpress.com": {
    "name": "WordPress.com",
    "tfa": true,
    "sms": true,
    "software": true,
    "exceptions": {
      "text": "SMS required for 2FA."
    },
    "doc": "https://en.support.wordpress.com/security/two-step-authentication/"
  },
  "https://wpengine.com": {
    "name": "WP Engine",
    "tfa": true,
    "software": true,
    "doc": "https://wpengine.com/support/2-factor-authentication/"
  },
  "https://www.007names.com": {
    "name": "007Names",
    "tfa": true,
    "software": true,
    "doc": "https://www.007names.com/info/two-step.xhtml"
  },
  "https://www.101domain.com": {
    "name": "101domain",
    "tfa": true,
    "software": true,
    "hardware": true,
    "doc": "https://www.101domain.com/vip_security_card.htm"
  },
  "https://www.123-reg.co.uk": {
    "name": "123 Reg",
    "tfa": false,
    "twitter": "123reg",
    "facebook": "123regfans"
  },
  "https://www.1and1.com": {
    "name": "1and1",
    "tfa": true,
    "software": true,
    "doc": "https://help.1and1.com/article/793179"
  },
  "https://www.20i.com": {
    "name": "20i",
    "tfa": true,
    "software": true,
    "doc": "https://www.20i.com/support/my-services/two-factor-authentication-my20i"
  },
  "https://www.23andme.com": {
    "name": "23andMe",
    "twitter": "23andMe",
    "facebook": "23andMe",
    "tfa": false
  },
  "https://www.34sp.com": {
    "name": "34SP.com",
    "tfa": true,
    "software": true,
    "doc": "https://www.34sp.com/kb/142/how-to-enable-two-factor-authentication-on-your-account"
  },
  "https://www.53.com": {
    "name": "Fifth Third Bank",
    "twitter": "fifththird",
    "facebook": "FifthThirdBank",
    "tfa": false
  },
  "https://www.a2hosting.com": {
    "name": "A2 Hosting",
    "tfa": true,
    "software": true,
    "doc": "https://www.a2hosting.com/kb/a2-hosting-customer-portal/account-management/enabling-two-factor-authentication-for-your-a2-hosting-account"
  },
  "https://www.aa.com": {
    "name": "American Airlines",
    "twitter": "AmericanAir",
    "facebook": "AmericanAirlines",
    "tfa": false
  },
  "https://www.aaiedu.hr": {
    "name": "AAI@EduHr",
    "email_address": "aai@srce.hr",
    "tfa": false,
    "lang": "hr"
  },
  "https://www.abine.com": {
    "name": "Blur",
    "tfa": true,
    "software": true,
    "doc": "https://dnt.abine.com/#help/faq/faq-enabletwoFactor"
  },
  "https://www.above.com": {
    "name": "Above.com",
    "tfa": true,
    "software": true,
    "doc": "http://domains.above.com/manual-two-step-authentication.html"
  },
  "https://www.acorns.com": {
    "name": "Acorns",
    "twitter": "acorns",
    "tfa": false
  },
  "https://www.actorsfcu.com": {
    "name": "Actors Federal Credit Union",
    "twitter": "ActorsFCU",
    "facebook": "ActorsFCU",
    "tfa": false
  },
  "https://www.adafruit.com": {
    "name": "Adafruit",
    "tfa": false,
    "twitter": "adafruit",
    "facebook": "adafruitindustries"
  },
  "https://www.addiko.hr": {
    "name": "Addiko Bank",
    "tfa": true,
    "hardware": true,
    "software": true,
    "doc": "https://www.addiko.hr/sites/addiko.hr/files/content/addiko_bank_uputa_za_koristenje_tokena_mtokena.pdf"
  },
  "https://www.adoramapix.com": {
    "name": "AdoramaPix",
    "tfa": false,
    "twitter": "AdoramaPix",
    "facebook": "AdoramaPix"
  },
  "https://www.adp.com": {
    "name": "ADP",
    "twitter": "adp",
    "facebook": "AutomaticDataProcessing",
    "tfa": false
  },
  "https://www.aep.com": {
    "name": "American Electric Power",
    "twitter": "AEPnews",
    "facebook": "americanelectricpower",
    "tfa": false
  },
  "https://www.aerofs.com": {
    "name": "AeroFS",
    "tfa": true,
    "software": true,
    "doc": "https://support.aerofs.com/hc/en-us/articles/202610424-How-Do-I-Set-Up-Two-Factor-Authentication-"
  },
  "https://www.aerohive.com": {
    "name": "Aerohive Networks",
    "tfa": false,
    "twitter": "aerohive"
  },
  "http://www.agenziaentrate.gov.it": {
    "name": "Agenzia delle Entrate",
    "tfa": false,
    "twitter": "Agenzia_Entrate",
    "facebook": "agenziadelleentrate",
    "lang": "it"
  },
  "https://www.aha.io": {
    "name": "Aha!",
    "tfa": true,
    "sms": true,
    "phone": true,
    "hardware": true,
    "software": true,
    "doc": "http://support.aha.io/hc/en-us/articles/202000957-Add-two-factor-authentication-2FA-"
  },
  "http://www.aie-ny.com": {
    "name": "Adirondack Insurance Exchange",
    "tfa": false
  },
  "https://www.airbank.cz": {
    "name": "AirBank",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://www.airbank.cz/co-vas-nejvic-zajima/jake-bezpecnostni-prvky-u-nas-mame"
  },
  "https://www.airbnb.com": {
    "name": "Airbnb",
    "tfa": false,
    "twitter": "airbnb"
  },
  "https://www.aircanada.com": {
    "name": "Air Canada",
    "twitter": "AirCanada",
    "facebook": "aircanada",
    "tfa": false
  },
  "https://www.airfrance.com": {
    "name": "Air France",
    "twitter": "airfrance",
    "facebook": "airfrance",
    "tfa": false
  },
  "https://www.alaskaair.com": {
    "name": "Alaska Airlines",
    "twitter": "AlaskaAir",
    "facebook": "alaskaairlines",
    "tfa": false
  },
  "https://www.algolia.com": {
    "name": "Algolia",
    "tfa": true,
    "software": true,
    "doc": "https://www.algolia.com/doc/security/best-security-practices/#two-factor-authentication-2fa"
  },
  "https://www.aliexpress.com": {
    "name": "AliExpress",
    "tfa": false,
    "twitter": "AliExpress_EN"
  },
  "https://www.alliantcreditunion.org": {
    "name": "Alliant Credit Union",
    "twitter": "AlliantCU",
    "facebook": "alliantcreditunion",
    "tfa": false
  },
  "https://www.ally.com": {
    "name": "TradeKing",
    "twitter": "tradeking",
    "tfa": false
  },
  "https://www.altra.org": {
    "name": "Altra Federal Credit Union",
    "twitter": "AltraCU",
    "facebook": "altra.org",
    "tfa": false
  },
  "https://www.amazon.com": {
    "name": "Amazon",
    "tfa": true,
    "software": true,
    "sms": true,
    "exceptions": {
      "text": "SMS or phone call required to enable 2FA. Enabling on Amazon.com activates 2FA on other regional Amazon sites, such as UK and DE."
    },
    "doc": "https://www.amazon.com/gp/help/customer/display.html?nodeId=201596330"
  },
  "https://www.americafirst.com": {
    "name": "America First Credit Union",
    "twitter": "AFCU",
    "facebook": "americafirstfb",
    "tfa": false
  },
  "https://www.americanexpress.com": {
    "name": "American Express",
    "twitter": "AmericanExpress",
    "facebook": "AmericanExpressUS",
    "tfa": false
  },
  "https://www.americanfunds.com": {
    "name": "American Funds",
    "tfa": false,
    "twitter": "AmericanFunds",
    "facebook": "americanfunds"
  },
  "https://www.americaschristiancu.com": {
    "name": "America’s Christian Credit Union",
    "tfa": true,
    "sms": true,
    "phone": true,
    "email": true,
    "doc": "https://www.americaschristiancu.com/ministry/services/online-banking-bill-pay.html"
  },
  "https://www.amtrak.com": {
    "name": "Amtrak",
    "twitter": "Amtrak",
    "facebook": "Amtrak",
    "tfa": false
  },
  "https://www.andrewsfcu.org": {
    "name": "Andrews Federal Credit Union",
    "twitter": "AndrewsFederal",
    "facebook": "AndrewsFederal",
    "tfa": false
  },
  "https://www.ankama.com": {
    "name": "Ankama",
    "tfa": true,
    "email": true,
    "software": true,
    "doc": "https://support.ankama.com/hc/en-us/categories/200093427-DOFUS-Security"
  },
  "https://www.antagning.se": {
    "name": "Antagning.se",
    "twitter": "antagningse",
    "tfa": false
  },
  "https://www.anz.com.au": {
    "name": "Australia and New Zealand Banking Group",
    "twitter": "ANZ_AU",
    "facebook": "ANZAustralia",
    "tfa": false
  },
  "https://www.appveyor.com": {
    "name": "AppVeyor",
    "tfa": false,
    "twitter": "appveyor",
    "email_address": "team@appveyor.com"
  },
  "https://www.arcadiapower.com": {
    "name": "Arcadia Power",
    "twitter": "ArcadiaPower",
    "facebook": "ArcadiaPower",
    "email_address": "customercare@arcadiapower.com",
    "tfa": false
  },
  "https://www.arcaplanet.it": {
    "name": "Arcaplanet",
    "tfa": false,
    "twitter": "Arcaplanet",
    "facebook": "Arcaplanet",
    "lang": "it"
  },
  "https://www.atlassian.com": {
    "name": "HipChat",
    "twitter": "HipChat",
    "facebook": "HipChat",
    "tfa": false
  },
  "https://www.att.com": {
    "name": "AT&amp;T",
    "twitter": "ATTCares",
    "facebook": "ATT",
    "tfa": false
  },
  "https://www.autodesk.com": {
    "name": "Autodesk",
    "tfa": true,
    "sms": true,
    "email": true,
    "phone": true,
    "software": true,
    "doc": "https://knowledge.autodesk.com/customer-service/account-management/account-profile/account-security/two-step-verification"
  },
  "https://www.avg.com": {
    "name": "AVG",
    "tfa": false,
    "twitter": "AVGFree",
    "facebook": "AVG"
  },
  "https://www.babbel.com": {
    "name": "Babbel",
    "tfa": false,
    "twitter": "babbel",
    "facebook": "babbel.languages",
    "email_address": "support@en.babbel.com"
  },
  "https://www.backblaze.com": {
    "name": "Backblaze",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://help.backblaze.com/hc/en-us/articles/217666588-Two-Factor-Verification"
  },
  "https://www.bahn.com": {
    "name": "Deutsche Bahn (DB)",
    "twitter": "DB_Bahn",
    "facebook": "DBPersonenverkehr",
    "tfa": false
  },
  "https://www.bananatag.com": {
    "name": "Bananatag",
    "tfa": false,
    "twitter": "bananatag",
    "facebook": "trackemail"
  },
  "https://www.banking.barclaysus.com": {
    "name": "Barclays US",
    "tfa": true,
    "sms": true,
    "phone": true,
    "email": true
  },
  "https://www.bankofamerica.com": {
    "name": "Bank of America",
    "tfa": true,
    "sms": true,
    "email": true
  },
  "https://www.barclays.co.uk": {
    "name": "Barclays UK",
    "tfa": true,
    "hardware": true,
    "software": true,
    "doc": "https://www.barclays.co.uk/Helpsupport/UpgradetoPINsentry/P1242559314766"
  },
  "https://www.bbt.com": {
    "name": "BB&amp;T",
    "twitter": "BBT",
    "facebook": "BBTBank",
    "tfa": false
  },
  "https://www.bbvacompass.com": {
    "name": "BBVA Compass",
    "tfa": false,
    "facebook": "bbvacompass",
    "twitter": "BBVACompass"
  },
  "https://www.bca.co.id": {
    "name": "Bank Central Asia (BCA)",
    "tfa": true,
    "hardware": true,
    "doc": "http://www.bca.co.id/en/Individu/Produk/E-Banking/Klik-BCA"
  },
  "https://www.becu.org": {
    "name": "Boeing Employee Credit Union",
    "tfa": true,
    "sms": true
  },
  "https://www.bethpagefcu.com": {
    "name": "Bethpage Federal Credit Union",
    "tfa": true,
    "sms": true,
    "email": true
  },
  "https://www.betterment.com": {
    "name": "Betterment",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://support.betterment.com/customer/en/portal/topics/1026376-two-factor-authentication-2fa-?b_id=9042"
  },
  "https://www.bhfcu.com": {
    "name": "Black Hills Federal Credit Union",
    "tfa": true,
    "sms": true,
    "phone": true,
    "email": true,
    "doc": "https://www.bhfcu.com/Landing/Online-Banking-FAQs"
  },
  "https://www.bigw.com.au": {
    "name": "Big W",
    "tfa": false,
    "facebook": "BIGWaustralia"
  },
  "https://www.binance.com": {
    "name": "Binance",
    "tfa": true,
    "software": true,
    "doc": "https://support.binance.com/hc/en-us/articles/115002439332-Securing-Your-Trading-Account"
  },
  "https://www.binarylane.com.au": {
    "name": "Binary Lane",
    "tfa": true,
    "software": true,
    "doc": "https://www.binarylane.com.au/support/solutions/articles/1000199372-two-factor-authentication"
  },
  "https://www.binero.se": {
    "name": "Binero",
    "tfa": true,
    "software": true,
    "doc": "https://blogg.binero.se/2017/10/tvafaktorsautentisering/"
  },
  "https://www.bitbond.com": {
    "name": "Bitbond",
    "tfa": true,
    "sms": true,
    "email": true,
    "software": true
  },
  "https://www.bitdefender.com": {
    "name": "Bitdefender",
    "tfa": false,
    "twitter": "Bitdefender",
    "facebook": "bitdefender"
  },
  "https://www.bitfinex.com": {
    "name": "Bitfinex",
    "tfa": true,
    "sms": true,
    "software": true,
    "hardware": true,
    "doc": "https://support.bitfinex.com/hc/en-us/sections/203192029-Security"
  },
  "https://www.bitgo.com": {
    "name": "BitGo",
    "tfa": true,
    "software": true,
    "hardware": true,
    "doc": "https://bitgo.zendesk.com/hc/en-us/sections/201009049-Two-Factor-Authentication-Help-Page"
  },
  "https://www.bithumb.com": {
    "name": "Bithumb",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://bithumb.cafe/archives/7286"
  },
  "https://www.bitium.com": {
    "name": "Bitium",
    "tfa": true,
    "software": true,
    "hardware": true,
    "doc": "https://support.bitium.com/customer/portal/articles/1417358-enabling-two-factor-authentication-2fa-"
  },
  "https://www.bitstamp.net": {
    "name": "Bitstamp",
    "tfa": true,
    "software": true,
    "doc": "https://www.bitstamp.net/s/documents/bitstamp_2_factor_authentication_guide.pdf"
  },
  "https://www.blackdesertonline.com": {
    "name": "Black Desert Online",
    "twitter": "BDO_News",
    "facebook": "BlackDesertOnline",
    "tfa": false
  },
  "http://www.bladeandsoul.com": {
    "name": "Blade & Soul",
    "tfa": true,
    "software": true,
    "doc": "https://support.bladeandsoul.com/hc/en-us/articles/207578553-Supported-Two-Step-OTP-Authentication-Verification-Methods"
  },
  "https://www.blau.de": {
    "name": "Blau.de",
    "facebook": "blaumobilfunk",
    "tfa": false,
    "lang": "de"
  },
  "https://www.blockchain.com": {
    "name": "Blockchain",
    "tfa": true,
    "sms": true,
    "email": true,
    "software": true,
    "hardware": true,
    "doc": "https://support.blockchain.com/hc/en-us/articles/211164103-Enable-2-Step-Verification-2FA-"
  },
  "https://www.bluehost.com": {
    "name": "Bluehost",
    "tfa": true,
    "software": true,
    "email": true,
    "doc": "https://my.bluehost.com/cgi/help/two-factor-authentication"
  },
  "https://www.bmedonline.it": {
    "name": "Banca Mediolanum",
    "tfa": false,
    "twitter": "BancaMediolanum",
    "facebook": "BancaMediolanum",
    "lang": "it"
  },
  "https://www.bmo.com": {
    "name": "BMO Bank of Montreal",
    "twitter": "BMO",
    "tfa": false
  },
  "https://www.bmoharris.com": {
    "name": "BMO Harris Bank",
    "twitter": "BMOHarrisBank",
    "facebook": "BMOHarrisBank",
    "tfa": false
  },
  "http://www.bochk.com": {
    "name": "Bank of China (Hong Kong)",
    "tfa": true,
    "hardware": true,
    "doc": "https://www.bochk.com/en/security/2factorauthentication.html"
  },
  "https://www.bofifederalbank.com": {
    "name": "BofI Federal Bank",
    "tfa": true,
    "sms": true,
    "phone": true,
    "doc": "https://www.mybankofinternet.com/tob/live/usp-core/static/help.html#login_security"
  },
  "https://www.bolehvpn.net": {
    "name": "BolehVPN",
    "tfa": false,
    "twitter": "bolehvpn"
  },
  "https://www.box.com": {
    "name": "Box",
    "tfa": true,
    "sms": true,
    "doc": "https://community.box.com/t5/How-to-Guides-for-Account/Manage-Account-Settings/ta-p/20022#authentication"
  },
  "https://www.boxcryptor.com": {
    "name": "Boxcryptor",
    "tfa": true,
    "software": true,
    "doc": "https://www.boxcryptor.com/help/boxcryptor-account/#two-factor-authentication"
  },
  "https://www.boxed.com": {
    "name": "Boxed",
    "tfa": false,
    "twitter": "BoxedWholesale",
    "facebook": "BoxedWholesale"
  },
  "https://www.braintreepayments.com": {
    "name": "Braintree",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://articles.braintreepayments.com/reference/security/two-factor-authentication"
  },
  "https://www.breeze.pm": {
    "name": "Breeze",
    "tfa": false,
    "twitter": "BreezeTeam",
    "facebook": "breeze.pm"
  },
  "https://www.brightbox.com": {
    "name": "Brightbox",
    "twitter": "brightbox",
    "facebook": "brightbox",
    "email_address": "support@brightbox.com",
    "tfa": false
  },
  "https://www.britishairways.com": {
    "name": "British Airways",
    "twitter": "British_Airways",
    "facebook": "britishairways",
    "tfa": false
  },
  "https://www.btcbox.co.jp": {
    "name": "BTC BOX",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://www.btcbox.co.jp/help/ga"
  },
  "https://www.bugcrowd.com": {
    "name": "bugcrowd",
    "tfa": true,
    "software": true,
    "doc": "https://docs.bugcrowd.com/v1.0/docs/two-factor-authentication-1"
  },
  "https://www.bugsnag.com": {
    "name": "Bugsnag",
    "tfa": true,
    "software": true,
    "doc": "https://docs.bugsnag.com/product/account-and-security/#security"
  },
  "https://www.bw-bank.de": {
    "name": "Baden-Württembergische Bank",
    "tfa": false,
    "lang": "de"
  },
  "https://www.ca.com": {
    "name": "CA Technologies",
    "tfa": false,
    "twitter": "CAinc",
    "facebook": "CATechnologies"
  },
  "http://www.cacert.org": {
    "name": "CAcert",
    "tfa": true,
    "hardware": true,
    "exceptions": {
      "text": "Requires X.509-capable cryptotoken or smartcard."
    }
  },
  "https://www.caisse-epargne.fr": {
    "name": "Caisse D'Epargne",
    "twitter": "CaissEpargneSAV",
    "facebook": "Caisse.Epargne",
    "tfa": false,
    "lang": "fr"
  },
  "https://www.callcentric.com": {
    "name": "CallCentric",
    "tfa": true,
    "email": true,
    "doc": "https://www.callcentric.com/features/two_point_authentication"
  },
  "https://www.caltech.edu": {
    "name": "California Institute of Technology (CalTech)",
    "tfa": true,
    "software": true,
    "hardware": true,
    "exceptions": {
      "text": "SMS-capable phone required for initial setup."
    },
    "doc": "https://imss.caltech.edu/node/1408"
  },
  "https://www.capitalone.com": {
    "name": "Capital One",
    "tfa": true,
    "sms": true,
    "email": true,
    "software": true,
    "doc": "https://www.capitalone.com/identity-protection/swiftid/"
  },
  "https://www.caremark.com": {
    "name": "CVS Caremark",
    "twitter": "CVSHealth",
    "facebook": "CVS",
    "tfa": false
  },
  "https://www.carilionclinic.org": {
    "name": "Carilion Clinic",
    "tfa": false,
    "twitter": "CarilionClinic",
    "facebook": "carilionclinic",
    "email_address": "direct@carilionclinic.org"
  },
  "http://www.cbq.qa": {
    "name": "Commercial Bank of Qatar",
    "tfa": true,
    "sms": true,
    "doc": "https://cbonline.cbq.qa/RIB/Common/FAQContent",
    "exceptions": {
      "text": "An SMS capable phone with a Qatar phone number is required."
    }
  },
  "https://www.cbtnuggets.com": {
    "name": "CBT Nuggets",
    "twitter": "CBTNuggets",
    "facebook": "cbtnuggets",
    "tfa": false
  },
  "https://www.cdcfcu.com": {
    "name": "CDC Federal Credit Union",
    "twitter": "CDCCreditUnion",
    "facebook": "CDCFederalCreditUnion",
    "tfa": false
  },
  "https://www.cedexis.com": {
    "name": "Cedexis",
    "tfa": false,
    "twitter": "Cedexis",
    "facebook": "Cedexis"
  },
  "https://www.centrify.com": {
    "name": "Centrify",
    "tfa": true,
    "sms": true,
    "email": true,
    "phone": true,
    "software": true,
    "doc": "https://www.centrify.com/solutions/why-multi-factor-authentication/"
  },
  "https://www.centurylink.com": {
    "name": "CenturyLink",
    "twitter": "CenturyLink",
    "facebook": "CenturyLink",
    "tfa": false
  },
  "https://www.chase.com": {
    "name": "Chase",
    "tfa": true,
    "sms": true,
    "phone": true,
    "email": true,
    "doc": "https://twofactorauth.org/notes/chase/"
  },
  "https://www.chimebank.com": {
    "name": "Chime",
    "tfa": false,
    "twitter": "Chime",
    "facebook": "chimebank"
  },
  "https://www.cibc.com": {
    "name": "CIBC",
    "twitter": "cibc",
    "facebook": "CIBC",
    "tfa": false
  },
  "https://www.citibank.com.au": {
    "name": "Citibank Australia",
    "tfa": false,
    "twitter": "CitiAustralia",
    "facebook": "citiaustralia"
  },
  "https://www.citizensbank.com": {
    "name": "Citizens Bank",
    "twitter": "citizensbank",
    "facebook": "citizensbank",
    "tfa": false
  },
  "https://www.clearscore.com": {
    "name": "ClearScore",
    "twitter": "ClearScore",
    "facebook": "clearscore",
    "tfa": false
  },
  "https://www.clemson.edu": {
    "name": "Clemson University",
    "tfa": true,
    "sms": true,
    "phone": true,
    "software": true,
    "hardware": true,
    "doc": "https://2fa.app.clemson.edu/"
  },
  "https://www.clickworker.com": {
    "name": "Clickworker",
    "tfa": false,
    "twitter": "clickworker_com"
  },
  "https://www.clio.com": {
    "name": "Clio",
    "tfa": true,
    "software": true,
    "doc": "https://support.goclio.com/hc/en-us/articles/203184210-Two-Factor-Authentication"
  },
  "https://www.clippercard.com": {
    "name": "Clipper",
    "twitter": "BayAreaClipper",
    "facebook": "BayAreaClipper",
    "tfa": false
  },
  "https://www.cloud66.com": {
    "name": "Cloud 66",
    "tfa": true,
    "software": true,
    "doc": "http://blog.cloud66.com/two-factor-authentication-for-your-accounts/"
  },
  "https://www.cloudflare.com": {
    "name": "Cloudflare",
    "tfa": true,
    "software": true,
    "doc": "https://support.cloudflare.com/hc/en-us/articles/200167866-How-do-I-set-up-two-factor-authentication-"
  },
  "https://www.cloudns.net": {
    "name": "ClouDNS",
    "tfa": true,
    "software": true,
    "doc": "https://www.cloudns.net/wiki/article/201/"
  },
  "https://www.cloudways.com": {
    "name": "Cloudways",
    "tfa": true,
    "software": true,
    "doc": "https://support.cloudways.com/enabling-two-factor-authentication-for-your-cloudways-account/"
  },
  "https://www.cm.com": {
    "name": "CM Telecom",
    "tfa": true,
    "sms": true,
    "phone": true,
    "software": true,
    "doc": "https://help.onlinesmsgateway.com/en/accounts-and-payments/how-do-i-enable-two-factor-authentication"
  },
  "https://www.cod.edu": {
    "name": "College Of DuPage",
    "twitter": "collegedupage",
    "facebook": "collegeofdupage",
    "email_address": "studenthelp@dupage.edu",
    "tfa": false
  },
  "https://www.codecademy.com": {
    "name": "Codecademy",
    "twitter": "codecademy",
    "facebook": "codecademy",
    "tfa": false
  },
  "https://www.coinbase.com": {
    "name": "Coinbase",
    "tfa": true,
    "sms": true,
    "software": true,
    "phone": true,
    "doc": "https://support.coinbase.com/customer/en/portal/articles/1658338-how-do-i-set-up-2-factor-authentication-"
  },
  "https://www.coinfloor.co.uk": {
    "name": "Coinfloor",
    "tfa": true,
    "sms": true,
    "software": true,
    "hardware": true,
    "doc": "https://www.coinfloor.co.uk/security"
  },
  "https://www.coinjar.com": {
    "name": "Coinjar",
    "tfa": true,
    "software": true,
    "sms": true,
    "doc": "https://support.coinjar.com/kb/using-coinjar/keeping-your-coinjar-secure-with-multi-factor-authentication"
  },
  "https://www.coinspot.com.au": {
    "name": "Coinspot",
    "tfa": true,
    "software": true,
    "sms": true,
    "doc": "https://coinspot.zendesk.com/hc/en-us/sections/115000049254-2FA-Google-Authenticator"
  },
  "https://www.colfinancial.com": {
    "name": "COL Financial",
    "twitter": "COLfinancial",
    "tfa": false
  },
  "https://www.comdirect.de": {
    "name": "comdirect",
    "twitter": "comdirect",
    "facebook": "comdirect",
    "tfa": false,
    "lang": "de"
  },
  "https://www.comed.com": {
    "name": "ComEd",
    "twitter": "ComEd",
    "facebook": "ComEd",
    "tfa": false
  },
  "https://www.comet.it": {
    "name": "Comet",
    "tfa": false,
    "twitter": "gruppocomet",
    "facebook": "facecomet",
    "lang": "it"
  },
  "https://www.comixology.com": {
    "name": "Comixology",
    "tfa": false,
    "twitter": "comixology"
  },
  "https://www.commbank.com.au": {
    "name": "Commonwealth Bank of Australia",
    "tfa": false,
    "twitter": "CommBank",
    "facebook": "commonwealthbank"
  },
  "https://www.commerzbank.de": {
    "name": "Commerzbank",
    "twitter": "commerzbank",
    "facebook": "commerzbank",
    "email_address": "directbanking@commerzbank.com",
    "tfa": false,
    "lang": "de"
  },
  "https://www.compose.com": {
    "name": "Compose.io",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://docs.compose.io/security/compose-two-factor-authentication.html"
  },
  "https://www.coned.com": {
    "name": "Con Edison",
    "tfa": true,
    "sms": true,
    "phone": true,
    "software": true,
    "doc": "https://www.coned.com/en/accounts-billing/new-my-account-faqs"
  },
  "https://www.connectwise.com": {
    "name": "ConnectWise Control (ScreenConnect)",
    "tfa": true,
    "sms": true,
    "email": true,
    "software": true,
    "hardware": true,
    "doc": "https://docs.connectwise.com/ConnectWise_Control_Documentation/Get_started/Administration_page/Security_page/Enable_two-factor_authentication_for_host_accounts"
  },
  "https://www.cosmolex.com": {
    "name": "Cosmolex",
    "tfa": true,
    "sms": true,
    "doc": "http://kb.cosmolex.com/support/solutions/articles/19000028547-how-to-enable-two-factor-authentication-"
  },
  "https://www.costco.com": {
    "name": "Costco",
    "tfa": false,
    "facebook": "Costco"
  },
  "https://www.coursera.org": {
    "name": "Coursera",
    "twitter": "coursera",
    "facebook": "Coursera",
    "tfa": false
  },
  "https://www.cox.com": {
    "name": "Cox",
    "twitter": "CoxHelp",
    "facebook": "coxcommunications",
    "tfa": false
  },
  "http://www.cra-arc.gc.ca": {
    "name": "Canada Revenue Agency",
    "tfa": false,
    "twitter": "canrevagency"
  },
  "https://www.crashplan.com": {
    "name": "CrashPlan",
    "twitter": "crashplan",
    "tfa": false,
    "facebook": "CrashPlan"
  },
  "https://www.crazydomains.com": {
    "name": "Crazy Domains",
    "tfa": false,
    "twitter": "CrazyDomains",
    "facebook": "crazydomains"
  },
  "https://www.creditkarma.com": {
    "name": "Credit Karma",
    "tfa": true,
    "sms": true,
    "phone": true
  },
  "https://www.crowdsupply.com": {
    "name": "Crowd Supply",
    "tfa": false,
    "twitter": "crowd_supply",
    "facebook": "CrowdSupply",
    "email_address": "support@crowdsupply.com"
  },
  "http://www.crunchyroll.com": {
    "name": "Crunchyroll",
    "tfa": false,
    "twitter": "Crunchyroll",
    "facebook": "Crunchyroll"
  },
  "https://www.cryptopia.co.nz": {
    "name": "Cryptopia",
    "tfa": true,
    "software": true,
    "email": true,
    "doc": "https://www.cryptopia.co.nz/Forum/Thread/1885"
  },
  "https://www.csn.se": {
    "name": "CSN",
    "tfa": true,
    "hardware": true,
    "software": true,
    "doc": "https://tjanster.csn.se/bas/vanligaFragor.do"
  },
  "https://www.ctl.io": {
    "name": "appFog",
    "twitter": "appfog",
    "tfa": false
  },
  "https://www.cua.com.au": {
    "name": "Credit Union Australia",
    "tfa": false,
    "twitter": "cua_connect",
    "facebook": "CUA"
  },
  "https://www.curse.com": {
    "name": "Curse",
    "tfa": false,
    "twitter": "curseapp",
    "facebook": "curseapp"
  },
  "https://www.cwnp.com": {
    "name": "Certified Wireless Network Professional (CWNP)",
    "tfa": false,
    "twitter": "CWNP",
    "facebook": "OfficialCWNP",
    "email_address": "customercare@cwnp.com"
  },
  "https://www.cyberghostvpn.com": {
    "name": "CyberGhost",
    "twitter": "cyberghost_EN",
    "facebook": "cyberghostEN",
    "tfa": false
  },
  "https://www.cyon.ch": {
    "name": "cyon",
    "tfa": true,
    "software": true,
    "doc": "https://www.cyon.ch/support/a/225/wie-aktiviere-ich-die-zwei-schritt-verifizierung"
  },
  "https://www.dashlane.com": {
    "name": "Dashlane",
    "tfa": true,
    "software": true,
    "hardware": true,
    "doc": "https://support.dashlane.com/hc/en-us/articles/202625042-Protect-your-account-using-Two-Factor-Authentication"
  },
  "https://www.dcu.org": {
    "name": "Digital Federal Credit Union",
    "tfa": true,
    "phone": true,
    "sms": true,
    "email": true,
    "doc": "https://www.dcu.org/online-banking/online-banking-enhancements.html"
  },
  "https://www.dediserve.com": {
    "name": "DediServe",
    "tfa": true,
    "software": true,
    "doc": "https://www.dediserve.com/blog/2016/12/01/2-factor-authentication-now-launched"
  },
  "https://www.deezer.com": {
    "name": "Deezer",
    "twitter": "DeezerHelp",
    "facebook": "Deezer",
    "tfa": false
  },
  "https://www.dell.com": {
    "name": "Dell",
    "tfa": false,
    "twitter": "DellCares"
  },
  "https://www.delta.com": {
    "name": "Delta",
    "twitter": "Delta",
    "facebook": "delta",
    "tfa": false
  },
  "https://www.deployhq.com": {
    "name": "DeployHQ",
    "tfa": true,
    "software": true,
    "doc": "https://www.deployhq.com/support/managing-your-account/personal-profile/two-factor-authentication"
  },
  "https://www.desjardins.com": {
    "name": "Desjardins",
    "twitter": "mvtdesjardins",
    "facebook": "desjardins",
    "tfa": false,
    "lang": "fr"
  },
  "https://www.deviantart.com": {
    "name": "DeviantArt",
    "twitter": "deviantart",
    "tfa": false
  },
  "https://www.df.eu": {
    "name": "domainFACTORY",
    "twitter": "domainfactory",
    "facebook": "domainfactory.GmbH",
    "tfa": false,
    "lang": "de"
  },
  "https://www.digicert.com": {
    "name": "DigiCert",
    "tfa": true,
    "software": true,
    "doc": "https://www.digicert.com/two-factor-authentication.htm"
  },
  "https://www.digid.nl": {
    "name": "DigiD",
    "tfa": true,
    "sms": true,
    "software": true,
    "phone": true,
    "doc": "https://www.digid.nl/nl/vraag-en-antwoord/hoe-kan-ik-de-sms-controle-toevoegen/",
    "exceptions": {
      "text": "Software 2FA requires DigiD app and SMS or phone call. One account per device."
    }
  },
  "https://www.digitalocean.com": {
    "name": "DigitalOcean",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://www.digitalocean.com/docs/accounts/security/2fa/"
  },
  "https://www.digitec.ch": {
    "name": "Digitec",
    "tfa": true,
    "software": true,
    "doc": "https://www.digitec.ch/en/page/new-two-factor-authentication-for-your-user-account-6589"
  },
  "https://www.directadmin.com": {
    "name": "DirectAdmin",
    "tfa": true,
    "software": true,
    "doc": "https://directadmin.com/features.php?id=1754"
  },
  "https://www.directv.com": {
    "name": "DIRECTV",
    "twitter": "DIRECTVService",
    "facebook": "directv",
    "tfa": false
  },
  "https://www.discountbank.co.il": {
    "name": "Discount Bank",
    "tfa": false,
    "twitter": "discountbank",
    "facebook": "discountbank",
    "lang": "he"
  },
  "https://www.discover.com": {
    "name": "Discover",
    "tfa": true,
    "email": true,
    "phone": true,
    "sms": true,
    "doc": "https://www.discover.com/credit-cards/member-benefits/security-center/protect-account/account-verification.html"
  },
  "https://www.dish.com": {
    "name": "DISH Network",
    "twitter": "dish_answers",
    "facebook": "DISH",
    "tfa": false
  },
  "https://www.ditech.com": {
    "name": "ditech",
    "twitter": "ditech",
    "facebook": "ditech",
    "tfa": false
  },
  "https://www.dkb.de": {
    "name": "Deutsche Kreditbank (DKB)",
    "tfa": false,
    "facebook": "Deutsche.Kreditbank",
    "lang": "de"
  },
  "https://www.dnb.no": {
    "name": "DNB",
    "tfa": true,
    "hardware": true,
    "software": true,
    "doc": "https://www.dnb.no/privat/kundeservice/innlogging-nettbank.html"
  },
  "https://www.docker.com": {
    "name": "Docker",
    "twitter": "docker",
    "facebook": "docker.run",
    "tfa": false
  },
  "https://www.docusign.com": {
    "name": "Docusign",
    "tfa": true,
    "sms": true,
    "email": true,
    "phone": true,
    "software": true,
    "doc": "https://support.docusign.com/en/guides/ndse-user-guide-two-step-verification"
  },
  "https://www.domain.com": {
    "name": "Domain.com",
    "twitter": "DomainDotCom",
    "facebook": "Domaindotcom",
    "tfa": false
  },
  "https://www.domains4bitcoins.com": {
    "name": "Domains4Bitcoins.com",
    "tfa": true,
    "sms": true,
    "doc": "https://my.domains4bitcoins.com/kb/answer/2692"
  },
  "https://www.domaintools.com": {
    "name": "DomainTools",
    "twitter": "DomainTools",
    "facebook": "domaintoolsllc",
    "email_address": "memberservices@domaintools.com",
    "tfa": false
  },
  "https://www.domeny.tv": {
    "name": "Domeny.tv",
    "tfa": true,
    "software": true,
    "doc": "https://www.domeny.tv/en/two-factor-authentication"
  },
  "https://www.dominionenergy.com": {
    "name": "Dominion Energy",
    "twitter": "dominionenergy",
    "tfa": false
  },
  "https://www.dominodatalab.com": {
    "name": "Domino Data Lab",
    "tfa": true,
    "software": true,
    "doc": "https://support.dominodatalab.com/hc/en-us/articles/115000998406-Two-Factor-Authentication"
  },
  "https://www.donateblood.com.au": {
    "name": "Australian Red Cross Blood Service",
    "tfa": true,
    "sms": true,
    "email": true
  },
  "https://www.doordash.com": {
    "name": "DoorDash",
    "twitter": "doordash",
    "tfa": false
  },
  "https://www.drchrono.com": {
    "name": "drchrono",
    "tfa": true,
    "software": true,
    "doc": "https://www.drchrono.com/blog/two-factor-authentication-extra-security-for-your-health-records/"
  },
  "https://www.dreamhost.com": {
    "name": "Dreamhost",
    "tfa": true,
    "software": true,
    "doc": "http://wiki.dreamhost.com/Enabling_Multifactor_Authentication"
  },
  "https://www.dreamstime.com": {
    "name": "Dreamstime",
    "twitter": "Dreamstime",
    "tfa": false
  },
  "https://www.dropbox.com": {
    "name": "Dropbox",
    "tfa": true,
    "sms": true,
    "software": true,
    "hardware": true,
    "doc": "https://www.dropbox.com/en/help/363"
  },
  "https://www.drugs.com": {
    "name": "Drugs.com",
    "twitter": "DrugsCom",
    "facebook": "Drugscom",
    "tfa": false,
    "status": "https://twitter.com/Drugscom/status/493856207572975620"
  },
  "https://www.dteenergy.com": {
    "name": "DTE Energy",
    "twitter": "DTE_Energy",
    "facebook": "dteenergy",
    "tfa": false
  },
  "https://www.duke-energy.com": {
    "name": "Duke Energy",
    "twitter": "DukeEnergy",
    "facebook": "duke.energy",
    "tfa": false
  },
  "https://www.duolingo.com": {
    "name": "Duolingo",
    "twitter": "duolingo",
    "facebook": "duolingo",
    "tfa": false
  },
  "https://www.dutchbanglabank.com": {
    "name": "Dutch-Bangla Bank Limited (DBBL)",
    "email_address": "hrd_head@dbbl.com.bd",
    "tfa": false,
    "lang": "bn"
  },
  "https://www.dwidigitalcameras.com": {
    "name": "Digital World International",
    "tfa": false,
    "facebook": "DWIAUS"
  },
  "https://www.dwolla.com": {
    "name": "Dwolla",
    "tfa": true,
    "software": true,
    "doc": "https://support.dwolla.com/customer/portal/articles/2079147"
  },
  "https://www.dynadot.com": {
    "name": "Dynadot",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://dynadot.com/domain/security.html"
  },
  "https://www.ea.com": {
    "name": "Electronic Arts (Origin)",
    "tfa": true,
    "email": true,
    "sms": true,
    "software": true,
    "doc": "https://help.ea.com/en-us/help/account/origin-login-verification-information/"
  },
  "https://www.easybank.at": {
    "name": "Easybank",
    "facebook": "easybank",
    "tfa": false,
    "lang": "de"
  },
  "https://www.easyjet.com": {
    "name": "easyJet",
    "twitter": "easyJet",
    "facebook": "easyJet",
    "tfa": false
  },
  "https://www.ebay.com": {
    "name": "eBay",
    "tfa": true,
    "sms": true
  },
  "https://www.eccouncil.org": {
    "name": "EC-Council",
    "tfa": true,
    "sms": true,
    "email": true,
    "doc": "https://aspen.eccouncil.org/aspen/Help/2FactorAuthentication-User_Manual.pdf"
  },
  "https://www.ecobee.com": {
    "name": "ecobee",
    "twitter": "ecobee",
    "facebook": "ecobee",
    "tfa": false
  },
  "https://www.ecu.edu": {
    "name": "East Carolina University",
    "tfa": true,
    "sms": true,
    "phone": true,
    "software": true,
    "doc": "https://www.ecu.edu/cs-itcs/office365/multi-factor-authentication.cfm"
  },
  "https://www.edmodo.com": {
    "name": "Edmodo",
    "twitter": "edmodo",
    "facebook": "edmodo",
    "tfa": false
  },
  "https://www.edx.org": {
    "name": "edX",
    "twitter": "edXOnline",
    "facebook": "edX",
    "tfa": false
  },
  "https://www.efirstbank.com": {
    "name": "FirstBank",
    "twitter": "efirstbank",
    "facebook": "efirstbank",
    "email_address": "banking@efirstbank.com",
    "tfa": false
  },
  "https://www.elationhealth.com": {
    "name": "Elation Health",
    "twitter": "ElationHealth",
    "facebook": "ElationHealth",
    "tfa": false
  },
  "https://www.elderscrollsonline.com": {
    "name": "Elder Scrolls Online",
    "tfa": true,
    "email": true,
    "doc": "https://help.elderscrollsonline.com/app/answers/detail/a_id/8611"
  },
  "https://www.emich.edu": {
    "name": "Eastern Michigan University",
    "tfa": true,
    "hardware": true,
    "software": true,
    "exceptions": {
      "text": "Available for employees"
    },
    "doc": "https://www.emich.edu/it/security/esp/duo.php"
  },
  "https://www.engineyard.com": {
    "name": "EngineYard",
    "tfa": true,
    "software": true,
    "doc": "https://blog.engineyard.com/2015/engine-yards-two-factor-authentication"
  },
  "https://www.enjin.com": {
    "name": "Enjin",
    "tfa": true,
    "sms": true,
    "software": true,
    "exceptions": {
      "text": "2FA is only available on paid plans. Software authentication requires the Authy app."
    },
    "doc": "https://support.enjin.com/hc/en-us/articles/201090770-2-Factor-Authentication-Authy-"
  },
  "https://www.enom.com": {
    "name": "eNom",
    "tfa": true,
    "software": true,
    "doc": "http://www.enom.com/kb/kb/kb_1687-setup-2-factor.htm"
  },
  "https://www.entrustdatacard.com": {
    "name": "Entrust",
    "tfa": true,
    "software": true,
    "hardware": true,
    "doc": "http://www.entrust.net/certificate-services/cms-authentication.htm"
  },
  "https://www.epicgames.com": {
    "name": "Epic Games",
    "tfa": true,
    "email": true,
    "software": true,
    "doc": "https://epicgames.helpshift.com/a/epic-accounts/?s=epic-accounts&f=what-is-two-factor-authentication-2fa-and-how-do-i-opt-in"
  },
  "https://www.eprice.it": {
    "name": "ePRICE",
    "tfa": false,
    "twitter": "EPRICEIT",
    "facebook": "ePRICE.it",
    "lang": "it"
  },
  "https://www.ergon.com.au": {
    "name": "Ergon Energy",
    "twitter": "ErgonEnergy",
    "facebook": "ErgonEnergy",
    "email_address": "customerservice@ergon.com.au",
    "tfa": false
  },
  "https://www.erstebank.hr": {
    "name": "Erste Bank Hrvatska",
    "tfa": true,
    "hardware": true,
    "software": true,
    "doc": "https://www.erstebank.hr/content/dam/hr/ebc/www_erstebank_hr/gradani/downloads/e-bankarstvo/Upute%20za%20prijavu.pdf"
  },
  "https://www.esri.com": {
    "name": "Esri",
    "tfa": true,
    "software": true,
    "doc": "https://doc.arcgis.com/en/arcgis-online/reference/multifactor.htm"
  },
  "https://www.etsy.com": {
    "name": "Etsy",
    "tfa": true,
    "sms": true,
    "phone": true,
    "software": true,
    "doc": "https://www.etsy.com/help/article/3335"
  },
  "https://www.eurodns.com": {
    "name": "EuroDNS",
    "tfa": true,
    "software": true,
    "doc": "http://help.eurodns.com/customer/en/portal/articles/1633106-how-do-i-activate-two-step-verification-on-my-account-"
  },
  "https://www.eveonline.com": {
    "name": "EVE Online",
    "tfa": true,
    "email": true,
    "software": true,
    "doc": "https://support.eveonline.com/hc/en-us/articles/203465601-Two-Factor-Authentication-and-Authenticator"
  },
  "https://www.everlane.com": {
    "name": "Everlane",
    "twitter": "everlane",
    "tfa": false
  },
  "https://www.everlaw.com": {
    "name": "Everlaw",
    "tfa": true,
    "software": true,
    "email": true,
    "doc": "https://everlaw.zendesk.com/hc/en-us/articles/206312165-Two-Factor-Authentication"
  },
  "https://www.eversource.com": {
    "name": "Eversource",
    "twitter": "EversourceCorp",
    "facebook": "EversourceEnergy",
    "tfa": false
  },
  "https://www.expressvpn.com": {
    "name": "ExpressVPN",
    "tfa": false,
    "twitter": "expressvpn",
    "facebook": "ExpressVPN"
  },
  "https://www.facebook.com": {
    "name": "Facebook",
    "tfa": true,
    "sms": true,
    "software": true,
    "hardware": true,
    "doc": "https://www.facebook.com/help/148233965247823"
  },
  "https://www.faceit.com": {
    "name": "FaceIT",
    "tfa": true,
    "software": true,
    "doc": "https://support.faceit.com/hc/en-us/articles/115000254670-Enabling-2-Factor-Authentication-"
  },
  "https://www.fairwinds.org": {
    "name": "Fairwinds",
    "tfa": true,
    "sms": true,
    "email": true,
    "phone": true,
    "doc": "https://www.fairwinds.org/inside/privacy/security_we.asp#multifactor-auth"
  },
  "https://www.fasthosts.co.uk": {
    "name": "Fasthosts",
    "twitter": "Fasthosts",
    "facebook": "fasthostsinternet",
    "tfa": false
  },
  "https://www.fastly.com": {
    "name": "Fastly",
    "tfa": true,
    "software": true,
    "doc": "https://docs.fastly.com/guides/account-management-and-security/enabling-and-disabling-two-factor-authentication"
  },
  "https://www.fastmail.com": {
    "name": "FastMail",
    "tfa": true,
    "sms": true,
    "software": true,
    "hardware": true,
    "doc": "https://www.fastmail.com/help/account/2fa.html"
  },
  "https://www.fasttech.com": {
    "name": "FastTech",
    "tfa": false,
    "facebook": "fasttech.net"
  },
  "https://www.fidelity.com": {
    "name": "Fidelity Investments",
    "tfa": true,
    "software": true,
    "hardware": true,
    "exceptions": {
      "text": "Only available for some account types"
    },
    "doc": "https://twofactorauth.org/notes/fidelity/"
  },
  "https://www.figma.com": {
    "name": "Figma",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://help.figma.com/managing-your-account/creating-and-managing-your-account"
  },
  "https://www.figure-eight.com": {
    "name": "CrowdFlower",
    "tfa": false,
    "twitter": "CrowdFlower"
  },
  "https://www.findmyshift.com": {
    "name": "Findmyshift",
    "tfa": true,
    "software": true,
    "doc": "https://www.findmyshift.com/help/what-is-two-factor-authentication"
  },
  "https://www.firstrepublic.com": {
    "name": "First Republic Bank",
    "tfa": true,
    "sms": true,
    "phone": true,
    "email": true,
    "doc": "https://www.firstrepublic.com/resource/banking-online-faqs#su10"
  },
  "https://www.firsttechfed.com": {
    "name": "First Tech Federal Credit Union",
    "tfa": true,
    "hardware": true,
    "software": true,
    "doc": "https://www.firsttechfed.com/Tools-and-Resources/Tools-and-Resources/What-You-Can-Do-To-Protect-Your-Privacy#3"
  },
  "https://www.fitbit.com": {
    "name": "FitBit",
    "twitter": "fitbit",
    "facebook": "fitbit",
    "tfa": false
  },
  "https://www.fiverr.com": {
    "name": "Fiverr",
    "tfa": false,
    "twitter": "FiverrSupport",
    "facebook": "Fiverr"
  },
  "https://www.flatex.de": {
    "name": "Flatex",
    "email_address": "info@flatex.de",
    "twitter": "flatex",
    "facebook": "onlinebroker",
    "tfa": false,
    "lang": "de"
  },
  "https://www.flipkart.com": {
    "name": "Flipkart",
    "tfa": false,
    "twitter": "flipkartsupport",
    "facebook": "flipkart"
  },
  "https://www.flowdock.com": {
    "name": "Flowdock",
    "twitter": "flowdock",
    "facebook": "flowdock",
    "tfa": false
  },
  "https://www.flyfrontier.com": {
    "name": "Frontier",
    "twitter": "FrontierCare",
    "facebook": "flyfrontier",
    "tfa": false
  },
  "https://www.flysas.com": {
    "name": "SAS",
    "twitter": "SAS",
    "facebook": "SAS",
    "tfa": false
  },
  "https://www.fogcreek.com": {
    "name": "FogBugz & Kiln",
    "tfa": true,
    "software": true,
    "doc": "http://help.fogcreek.com/10892/two-factor-authentication"
  },
  "https://www.followmyhealth.com": {
    "name": "FollowMyHealth",
    "tfa": true,
    "sms": true,
    "email": true,
    "software": true,
    "doc": "http://support.followmyhealth.com/customer/portal/articles/1309938-fmh-secure-login-2-step-verification---break-down"
  },
  "https://www.formstack.com": {
    "name": "Formstack",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://support.formstack.com/customer/portal/articles/1833071-two-factor-authentication"
  },
  "https://www.fortrabbit.com": {
    "name": "fortrabbit",
    "tfa": true,
    "software": true,
    "doc": "https://help.fortrabbit.com/account#toc-setting-up-2fa"
  },
  "https://www.fpl.com": {
    "name": "Florida Power and Light",
    "twitter": "insideFPL",
    "facebook": "fplconnect",
    "tfa": false
  },
  "https://www.freeagent.com": {
    "name": "FreeAgent",
    "tfa": true,
    "software": true,
    "doc": "https://www.freeagent.com/support/kb/getting-started/two-step-verification"
  },
  "https://www.freelancer.com": {
    "name": "Freelancer",
    "tfa": false,
    "twitter": "freelancer",
    "facebook": "fansoffreelancer"
  },
  "https://www.freenet.de": {
    "name": "Freenet",
    "tfa": false,
    "facebook": "freenet"
  },
  "https://www.freshbooks.com": {
    "name": "FreshBooks",
    "twitter": "freshbooks",
    "facebook": "FreshBooks",
    "tfa": false
  },
  "https://www.fundingcircle.com": {
    "name": "Funding Circle",
    "twitter": "fundingcircle",
    "facebook": "FundingCircleUK",
    "tfa": false
  },
  "https://www.gamefly.com": {
    "name": "GameFly",
    "twitter": "GameFly",
    "facebook": "gamefly",
    "tfa": false
  },
  "https://www.gamersgate.com": {
    "name": "GamersGate",
    "twitter": "GamersGate",
    "facebook": "GamersGate",
    "tfa": false
  },
  "https://www.gatech.edu": {
    "name": "Georgia Institute of Technology",
    "tfa": true,
    "phone": true,
    "hardware": true,
    "software": true,
    "doc": "https://twofactor.oit.gatech.edu"
  },
  "https://www.geico.com": {
    "name": "Geico",
    "twitter": "geico_service",
    "facebook": "geico",
    "tfa": false
  },
  "https://www.georgiapower.com": {
    "name": "Georgia Power",
    "twitter": "GeorgiaPower",
    "facebook": "GeorgiaPower",
    "tfa": false
  },
  "https://www.geotrust.com": {
    "name": "GeoTrust",
    "tfa": true,
    "email": true
  },
  "https://www.getcloudapp.com": {
    "name": "CloudApp",
    "twitter": "cloudapp",
    "tfa": false,
    "facebook": "getcloudapp"
  },
  "https://www.giac.org": {
    "name": "Global Information Assurance Certification (GIAC)",
    "tfa": false,
    "twitter": "CertifyGIAC",
    "facebook": "GIAC.org",
    "email_address": "info@giac.org"
  },
  "https://www.gilt.com": {
    "name": "Gilt",
    "twitter": "gilt",
    "tfa": false
  },
  "https://www.globat.com": {
    "name": "Globat",
    "tfa": false,
    "twitter": "globat"
  },
  "https://www.gls.de": {
    "name": "GLS Gemeinschaftsbank",
    "twitter": "glsbank",
    "facebook": "glsbank",
    "tfa": false,
    "lang": "de"
  },
  "https://www.gmx.com": {
    "name": "GMX",
    "twitter": "gmxmail",
    "tfa": false
  },
  "https://www.godaddy.com": {
    "name": "GoDaddy",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://www.godaddy.com/help/enable-two-step-verification-7502"
  },
  "https://www.gofundme.com": {
    "name": "GoFundMe",
    "tfa": true,
    "sms": true,
    "phone": true,
    "doc": "https://support.gofundme.com/hc/en-us/sections/200611108-Phone-Verification-",
    "exceptions": {
      "text": "2FA only for North American customers that create Personal campaigns."
    }
  },
  "https://www.gog.com": {
    "name": "GOG.com",
    "tfa": true,
    "email": true,
    "doc": "https://www.gog.com/support/support_view/twostep_login_faq"
  },
  "https://www.gogetssl.com": {
    "name": "GoGetSSL",
    "tfa": false,
    "twitter": "gogetssl",
    "facebook": "gogetssl"
  },
  "https://www.goodreads.com": {
    "name": "Goodreads",
    "twitter": "goodreads",
    "tfa": false
  },
  "https://www.google.com": {
    "name": "Google",
    "tfa": true,
    "sms": true,
    "phone": true,
    "software": true,
    "hardware": true,
    "doc": "https://www.google.com/intl/en-US/landing/2step/features.html"
  },
  "https://www.google.se": {
    "name": "Google Wallet",
    "tfa": true,
    "sms": true,
    "phone": true,
    "software": true,
    "hardware": true,
    "doc": "https://www.google.com/intl/en-US/landing/2step/features.html"
  },
  "https://www.gov.uk": {
    "name": "HMRC",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://www.gov.uk/government/publications/genuine-hmrc-contact-and-recognising-phishing-emails/genuine-hmrc-contact-and-recognising-phishing-emails#hmrc-short-message-service-text-messages"
  },
  "https://www.greyhound.com": {
    "name": "Greyhound",
    "twitter": "GHoundBusHelp",
    "facebook": "GreyhoundBus",
    "tfa": false
  },
  "https://www.groupon.com": {
    "name": "Groupon",
    "twitter": "Groupon",
    "tfa": false
  },
  "https://www.guildwars2.com": {
    "name": "Guild Wars 2",
    "sms": true,
    "tfa": true,
    "email": true,
    "phone": true,
    "software": true,
    "doc": "https://help.guildwars2.com/hc/en-us/articles/230672927-Securing-Your-Account-With-Authentication"
  },
  "https://www.hackerone.com": {
    "name": "HackerOne",
    "tfa": true,
    "software": true,
    "doc": "https://docs.hackerone.com/hackers/two-factor-authentication.html"
  },
  "https://www.hackerrank.com": {
    "name": "HackerRank",
    "tfa": false,
    "twitter": "hackerrank",
    "facebook": "hackerrank"
  },
  "https://www.halebop.se": {
    "name": "Halebop",
    "tfa": true,
    "software": true,
    "exceptions": {
      "text": "2FA is only available for Swedish citizens with BankID."
    },
    "doc": "https://github.com/2factorauth/twofactorauth/pull/2304#issue-200730083"
  },
  "https://www.halifax.co.uk": {
    "name": "Halifax",
    "twitter": "AskHalifaxBank",
    "facebook": "halifax",
    "tfa": false
  },
  "https://www.handelsbanken.se": {
    "name": "Handelsbanken",
    "tfa": true,
    "hardware": true,
    "software": true,
    "doc": "https://www.handelsbanken.se/shb/INeT/ICentSv.nsf/Default/qAE99695C4C1D033DC12579120036EB43?Opendocument"
  },
  "https://www.harvard.edu": {
    "name": "Harvard University",
    "tfa": true,
    "sms": true,
    "phone": true,
    "hardware": true,
    "software": true,
    "doc": "https://huit.harvard.edu/twostep"
  },
  "https://www.hawaiianairlines.com": {
    "name": "Hawaiian Airlines",
    "twitter": "HawaiianAir",
    "facebook": "HawaiianAirlines",
    "tfa": false
  },
  "https://www.he.net": {
    "name": "Hurricane Electric",
    "tfa": true,
    "software": true
  },
  "https://www.healthcare.gov": {
    "name": "Healthcare.gov",
    "twitter": "HealthCareGov",
    "tfa": false
  },
  "https://www.healthequity.com": {
    "name": "HealthEquity",
    "twitter": "healthequity",
    "tfa": false
  },
  "https://www.healthvault.com": {
    "name": "HealthVault (w/Microsoft Account)",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "http://windows.microsoft.com/en-au/windows/two-step-verification-faq"
  },
  "https://www.heartinternet.uk": {
    "name": "Heart Internet",
    "tfa": false,
    "twitter": "HeartInternet",
    "facebook": "heartinternet"
  },
  "https://www.hellosign.com": {
    "name": "HelloSign",
    "tfa": true,
    "sms": true,
    "exceptions": {
      "text": "Two-factor authentication is only available to paid Business plan senders and above."
    },
    "doc": "https://faq.hellosign.com/hc/en-us/articles/205714548-How-do-I-set-up-two-factor-authentication-"
  },
  "https://www.heroku.com": {
    "name": "Heroku",
    "tfa": true,
    "software": true,
    "doc": "https://devcenter.heroku.com/articles/two-factor-authentication"
  },
  "https://www.hetzner.de": {
    "name": "Hetzner Online",
    "tfa": true,
    "software": true,
    "hardware": true
  },
  "https://www.hexonet.net": {
    "name": "Hexonet",
    "tfa": true,
    "software": true,
    "doc": "https://www.hexonet.net/assets/pdf/2FA.pdf"
  },
  "https://www.hint.com": {
    "name": "Hint Health",
    "tfa": false,
    "twitter": "HintHealth",
    "facebook": "hinthealth"
  },
  "https://www.hitbtc.com": {
    "name": "HitBTC",
    "tfa": true,
    "software": true,
    "doc": "https://hitbtc.com/faq/security"
  },
  "https://www.hl.co.uk": {
    "name": "Hargreaves Lansdown",
    "twitter": "HLInvest",
    "facebook": "hargreaveslansdowninvest",
    "tfa": false
  },
  "https://www.homedepot.com": {
    "name": "Home Depot",
    "tfa": false,
    "twitter": "HomeDepot",
    "facebook": "homedepot"
  },
  "https://www.hostens.com": {
    "name": "Hostens",
    "tfa": true,
    "software": true,
    "doc": "https://billing.hostens.com/knowledgebase/article/29/how-to-enhance-account-security-/"
  },
  "https://www.hostpoint.ch": {
    "name": "Hostpoint",
    "tfa": false,
    "twitter": "hostpoint",
    "facebook": "hostpointch",
    "lang": "de"
  },
  "https://www.hotstar.com": {
    "name": "Hotstar",
    "twitter": "hotstar_helps",
    "facebook": "hotstar",
    "tfa": false
  },
  "https://www.hover.com": {
    "name": "Hover.com",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://help.hover.com/entries/26677644"
  },
  "https://www.hsbc.com": {
    "name": "HSBC",
    "tfa": true,
    "hardware": true,
    "software": true,
    "doc": "https://www.hsbc.co.uk/1/2/customer-support/online-banking-security/secure-key"
  },
  "https://www.hulu.com": {
    "name": "Hulu",
    "twitter": "hulu_support",
    "facebook": "hulu",
    "tfa": false
  },
  "https://www.humblebundle.com": {
    "name": "Humble Bundle",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://support.humblebundle.com/hc/en-us/articles/202421374"
  },
  "https://www.huntington.com": {
    "name": "Huntington National Bank",
    "twitter": "Huntington_Bank",
    "facebook": "HuntingtonBank",
    "tfa": false
  },
  "https://www.hushmail.com": {
    "name": "Hushmail",
    "tfa": true,
    "sms": true,
    "email": true,
    "software": true,
    "doc": "https://help.hushmail.com/entries/63282756-Two-step-verification"
  },
  "https://www.hype.it": {
    "name": "HYPE",
    "tfa": true,
    "sms": true
  },
  "https://www.hyper.sh": {
    "name": "Hyper.sh",
    "tfa": false,
    "twitter": "hyper_sh",
    "email_address": "contact@hyper.sh"
  },
  "https://www.hypop.com.au": {
    "name": "Hypop",
    "twitter": "hypop",
    "tfa": false
  },
  "https://www.iberiabank.com": {
    "name": "IberiaBank",
    "twitter": "IBERIABANK",
    "facebook": "IberiaBank",
    "tfa": false
  },
  "https://www.icloud.com": {
    "name": "Apple iCloud",
    "tfa": true,
    "sms": true,
    "software": true,
    "exceptions": {
      "text": "See https://support.apple.com/HT202656 for a list of supported SMS carriers."
    },
    "doc": "https://support.apple.com/HT204152"
  },
  "https://www.icuk.net": {
    "name": "ICUK",
    "tfa": true,
    "software": true,
    "doc": "https://www.icuk.net/reseller/security.asp"
  },
  "https://www.id.me": {
    "name": "ID.me",
    "tfa": false,
    "twitter": "IDme",
    "facebook": "IDmeInc",
    "email_address": "help@id.me"
  },
  "https://www.idn.laposte.fr": {
    "name": "IDentité Numérique (IDN)",
    "twitter": "lisalaposte",
    "facebook": "laposte",
    "tfa": false,
    "lang": "fr"
  },
  "https://www.idrive.com": {
    "name": "IDrive",
    "twitter": "IDriveBackup",
    "tfa": false,
    "facebook": "IDriveBackup"
  },
  "https://www.ieee.org": {
    "name": "IEEE",
    "tfa": false,
    "twitter": "IEEEorg",
    "facebook": "IEEE.org"
  },
  "https://www.ikea.com": {
    "name": "IKEA",
    "tfa": false,
    "twitter": "IKEAUSA",
    "facebook": "IKEAUSA"
  },
  "https://www.imdb.com": {
    "name": "IMDb",
    "twitter": "IMDb",
    "facebook": "imdb",
    "tfa": false
  },
  "https://www.imgix.com": {
    "name": "imgix",
    "twitter": "imgix",
    "facebook": "imgix",
    "tfa": false
  },
  "https://www.immobilienscout24.de": {
    "name": "ImmobilienScout24",
    "tfa": true,
    "software": true
  },
  "https://www.impots.gouv.fr": {
    "name": "impots.gouv.fr",
    "tfa": false,
    "twitter": "dgfip_officiel",
    "facebook": "Direction-générale-des-Finances-publiques-250996308359760",
    "lang": "fr"
  },
  "https://www.incapsula.com": {
    "name": "Incapsula",
    "tfa": true,
    "email": true,
    "software": true,
    "sms": true,
    "doc": "https://docs.incapsula.com/Content/management-console-and-settings/account-settings.htm"
  },
  "https://www.indeed.com": {
    "name": "Indeed",
    "tfa": true,
    "sms": true,
    "phone": true,
    "doc": "https://support.indeed.com/hc/en-us/articles/360000244123"
  },
  "https://www.indiegala.com": {
    "name": "IndieGala",
    "twitter": "IndieGala",
    "facebook": "IndieGala",
    "tfa": false
  },
  "https://www.indiegogo.com": {
    "name": "Indiegogo",
    "twitter": "indiegogoUK",
    "facebook": "Indiegogo",
    "tfa": false
  },
  "https://www.inexfinance.com": {
    "name": "InEx Finance",
    "twitter": "InexFinance",
    "facebook": "inex.finance",
    "tfa": false
  },
  "https://www.infobip.com": {
    "name": "Infobip",
    "tfa": true,
    "sms": true,
    "doc": "https://www.infobip.com/messaging/enterprise/2_factor_authentication/"
  },
  "https://www.infomaniak.com": {
    "name": "Infomaniak",
    "tfa": true,
    "software": true,
    "doc": "https://www.infomaniak.ch/en/support/faq/1940"
  },
  "https://www.ing.at": {
    "name": "ING-DiBa Austria",
    "twitter": "INGDiBaAustria",
    "facebook": "ingdibaaustria",
    "tfa": false,
    "lang": "de"
  },
  "https://www.ing.com.au": {
    "name": "ING Australia",
    "tfa": true,
    "sms": true
  },
  "https://www.ing.lu": {
    "name": "ING (Luxembourg)",
    "tfa": true,
    "hardware": true,
    "doc": "https://www.ing.lu/web/ING/EN/Personal/Customerservices/FAQ/MYING_FAQ_EN"
  },
  "https://www.inleed.se": {
    "name": "Inleed",
    "twitter": "Inleed",
    "facebook": "Inleed",
    "email_address": "support@inleed.se",
    "tfa": false,
    "lang": "sv"
  },
  "https://www.inmotionhosting.com": {
    "name": "InMotion Hosting",
    "twitter": "inmotionhosting",
    "tfa": false
  },
  "https://www.instagram.com": {
    "name": "Instagram",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://help.instagram.com/566810106808145"
  },
  "https://www.instapaper.com": {
    "name": "Instapaper",
    "twitter": "InstapaperHelp",
    "facebook": "instapaperholdings",
    "email_address": "support@help.instapaper.com",
    "tfa": false
  },
  "https://www.interactivebrokers.com": {
    "name": "Interactive Brokers",
    "tfa": true,
    "hardware": true,
    "software": true,
    "doc": "https://www.interactivebrokers.com/en/index.php?f=ibgStrength&p=log"
  },
  "https://www.intesasanpaolo.com": {
    "name": "Intesa Sanpaolo",
    "tfa": true,
    "hardware": true,
    "doc": "http://www.intesasanpaolo.com/servizi-multicanale/sicurezza.jsp"
  },
  "https://www.inwx.com": {
    "name": "INWX",
    "tfa": true,
    "software": true,
    "doc": "https://www.inwx.com/en/offer/mobiletan"
  },
  "https://www.iozoom.com": {
    "name": "IO Zoom",
    "tfa": true,
    "software": true,
    "doc": "https://www.iozoom.com/client/announcements.php?id=6"
  },
  "https://www.ipage.com": {
    "name": "iPage",
    "twitter": "iPage",
    "tfa": false
  },
  "https://www.ipvanish.com": {
    "name": "IPVanish",
    "tfa": false,
    "twitter": "IPVanish",
    "facebook": "ipvanish"
  },
  "https://www.irccloud.com": {
    "name": "IRCCloud",
    "twitter": "IRCCloud",
    "facebook": "irccloud",
    "tfa": false
  },
  "https://www.irs.gov": {
    "name": "US Internal Revenue Service",
    "tfa": true,
    "sms": true,
    "software": true,
    "exceptions": {
      "text": "IRS2Go app required for software 2FA."
    },
    "doc": "https://www.irs.gov/individuals/secure-access-how-to-register-for-certain-online-self-help-tools"
  },
  "https://www.isaca.org": {
    "name": "ISACA",
    "tfa": false,
    "twitter": "ISACANews",
    "facebook": "ISACAHQ"
  },
  "https://www.isc2.org": {
    "name": "(ISC)2",
    "tfa": false,
    "twitter": "ISC2",
    "facebook": "isc2fb"
  },
  "https://www.ivpn.net": {
    "name": "IVPN",
    "twitter": "ivpnnet",
    "tfa": false
  },
  "https://www.jbhifi.com.au": {
    "name": "JB Hi-Fi",
    "twitter": "JBHiFi",
    "tfa": false
  },
  "https://www.jetblue.com": {
    "name": "JetBlue",
    "twitter": "JetBlue",
    "facebook": "JetBlue",
    "tfa": false
  },
  "https://www.jhancockpensions.com": {
    "name": "John Hancock Pensions",
    "twitter": "johnhancockusa",
    "facebook": "johnhancock",
    "email_address": "My401K@jhancock.com",
    "tfa": false
  },
  "https://www.jitbit.com": {
    "name": "Jitbit Helpdesk",
    "tfa": true,
    "software": true,
    "doc": "https://support.jitbit.com/helpdesk/KB/View/11048235-twofactor-authentication"
  },
  "https://www.join.me": {
    "name": "join.me (w/ LogMeIn account)",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://secure.logmein.com/welcome/webhelp/EN/Pro/LogMeIn/c_common_Security_TwoStep.html"
  },
  "https://www.jottacloud.com": {
    "name": "Jottacloud",
    "twitter": "jottacloud",
    "email_address": "support@jottacloud.com",
    "facebook": "Jottacloud",
    "tfa": false
  },
  "https://www.joyent.com": {
    "name": "Joyent",
    "tfa": true,
    "software": true,
    "doc": "https://docs.joyent.com/public-cloud/getting-started/2fa"
  },
  "https://www.justcloud.com": {
    "name": "JustCloud",
    "twitter": "justcloudcom",
    "tfa": false,
    "facebook": "JustCloudStorage"
  },
  "https://www.karriere.at": {
    "name": "karriere.at",
    "tfa": false,
    "twitter": "karriere_at",
    "facebook": "karriere.at",
    "lang": "de"
  },
  "https://www.kayako.com": {
    "name": "Kayako",
    "tfa": true,
    "software": true,
    "doc": "https://support.kayako.com/article/1198-securing-your-user-account-with-two-factor-authentication-2fa"
  },
  "https://www.key.com": {
    "name": "HelloWallet",
    "twitter": "keybank",
    "facebook": "keybank",
    "tfa": false
  },
  "https://www.kickstarter.com": {
    "name": "Kickstarter",
    "tfa": true,
    "sms": true,
    "phone": true,
    "software": true,
    "doc": "https://www.kickstarter.com/help/faq/backer+questions#faq_63004"
  },
  "https://www.kik.com": {
    "name": "Kik",
    "tfa": false,
    "twitter": "Kik",
    "facebook": "kikplaynice",
    "email_address": "support@kik.com"
  },
  "https://www.kiva.org": {
    "name": "Kiva",
    "twitter": "kiva",
    "facebook": "kiva",
    "tfa": false
  },
  "https://www.klarna.com": {
    "name": "Klarna",
    "tfa": true,
    "email": true,
    "software": true,
    "exceptions": {
      "text": "Software 2FA is only available for Swedish citizens with BankID."
    }
  },
  "https://www.knownhost.com": {
    "name": "KnownHost",
    "tfa": true,
    "software": true,
    "doc": "https://www.knownhost.com/wiki/my-knownhost/two-factor"
  },
  "https://www.kobo.com": {
    "name": "Kobo",
    "twitter": "KoboHelp",
    "facebook": "Kobo",
    "tfa": false
  },
  "https://www.kohls.com": {
    "name": "Kohl's",
    "tfa": false,
    "twitter": "Kohls",
    "facebook": "kohls"
  },
  "https://www.korbit.co.kr": {
    "name": "Korbit",
    "tfa": true,
    "software": true,
    "doc": "https://support.korbit.co.kr/customer/en/portal/articles/1717692-what-is-2-factor-authentication-"
  },
  "https://www.kraken.com": {
    "name": "Kraken",
    "tfa": true,
    "software": true,
    "hardware": true,
    "doc": "https://support.kraken.com/hc/en-us/articles/360000426923"
  },
  "https://www.kualto.com": {
    "name": "Kualto",
    "twitter": "kualtoapp",
    "tfa": false
  },
  "https://www.labanquepostale.fr": {
    "name": "La Banque Postale",
    "twitter": "LaBanquePostale",
    "facebook": "labanquepostale",
    "tfa": false,
    "lang": "fr"
  },
  "https://www.lansforsakringar.se": {
    "name": "Länsförsäkringar",
    "tfa": true,
    "software": true,
    "hardware": true,
    "doc": "http://www.lansforsakringar.se/privat/att-vara-kund/digitala-tjanster-telefonbank/internetbanken/"
  },
  "https://www.last.fm": {
    "name": "Last.fm",
    "twitter": "lastfmsupport",
    "facebook": "lastfm",
    "tfa": false
  },
  "https://www.lazada.com": {
    "name": "Lazada",
    "twitter": "asklazadasg",
    "tfa": false
  },
  "https://www.lcn.com": {
    "name": "LCN.com",
    "twitter": "lcndotcom",
    "facebook": "lcndotcom",
    "tfa": false
  },
  "https://www.leaseweb.com": {
    "name": "Leaseweb",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://kb.leaseweb.com/display/KB/2-step+verification"
  },
  "https://www.legalmail.it": {
    "name": "Legalmail",
    "tfa": false,
    "twitter": "InfoCert_it",
    "facebook": "InfoCertSpa",
    "lang": "it"
  },
  "https://www.lendingclub.com": {
    "name": "LendingClub",
    "twitter": "lendingclub",
    "facebook": "LendingClubTeam",
    "tfa": false
  },
  "https://www.liftopia.com": {
    "name": "Liftopia",
    "tfa": false,
    "twitter": "Liftopia",
    "facebook": "liftopia"
  },
  "https://www.linkedin.com": {
    "name": "LinkedIn",
    "tfa": true,
    "sms": true,
    "doc": "https://help.linkedin.com/app/answers/detail/a_id/531/related/1"
  },
  "https://www.linksyssmartwifi.com": {
    "name": "Linksys Smart Wi-Fi",
    "twitter": "linksyscares",
    "facebook": "linksys",
    "tfa": false
  },
  "https://www.linode.com": {
    "name": "Linode",
    "tfa": true,
    "software": true,
    "doc": "https://www.linode.com/docs/security/linode-manager-security-controls"
  },
  "https://www.liquidweb.com": {
    "name": "Liquid Web",
    "tfa": true,
    "software": true,
    "doc": "https://www.liquidweb.com/kb/how-to-enable-two-factor-authentication-2fa/"
  },
  "https://www.litebit.eu": {
    "name": "LiteBit",
    "tfa": true,
    "software": true,
    "doc": "https://support.litebit.eu/hc/en-us/articles/115000953504-What-is-Two-Factor-Authentication-2FA-How-to-"
  },
  "https://www.livejournal.com": {
    "name": "LiveJournal",
    "twitter": "LiveJournal",
    "tfa": false
  },
  "https://www.lloydsbank.com": {
    "name": "Lloyds Bank",
    "twitter": "AskLloydsBank",
    "facebook": "lloydsbank",
    "tfa": false
  },
  "https://www.logmein.com": {
    "name": "LogMeIn",
    "tfa": true,
    "sms": true,
    "email": true,
    "software": true,
    "hardware": true,
    "doc": "https://secure.logmein.com/welcome/webhelp/EN/Pro/LogMeIn/c_Common_Account_Security.html"
  },
  "https://www.loopia.se": {
    "name": "Loopia",
    "tfa": true,
    "software": true,
    "doc": "https://blogg.loopia.se/2015/03/16/nu-kan-du-logga-in-med-tvafaktorsautentiering-hos-loopia-genom-bankid/",
    "exceptions": {
      "text": "TFA only available for Swedish residents with BankID."
    }
  },
  "https://www.lowes.com": {
    "name": "Lowes",
    "tfa": false,
    "twitter": "Lowes",
    "facebook": "lowes"
  },
  "https://www.lufthansa.com": {
    "name": "Lufthansa",
    "twitter": "lufthansa",
    "facebook": "lufthansa",
    "tfa": false
  },
  "https://www.luno.com": {
    "name": "Luno",
    "tfa": true,
    "software": true,
    "doc": "https://www.luno.com/help/en/articles/1000203420-how-to-enable-twofactor-authentication"
  },
  "https://www.lyft.com": {
    "name": "Lyft",
    "twitter": "AskLyft",
    "facebook": "lyft",
    "tfa": false
  },
  "https://www.macys.com": {
    "name": "Macy's",
    "twitter": "macys",
    "tfa": false
  },
  "https://www.mail.com": {
    "name": "Mail.com",
    "twitter": "maildotcom",
    "facebook": "mail.com",
    "tfa": false
  },
  "https://www.mailgun.com": {
    "name": "Mailgun",
    "tfa": true,
    "software": true
  },
  "https://www.mammoth.com.au": {
    "name": "Mammoth Networks",
    "tfa": true,
    "software": true,
    "doc": "https://www.mammoth.net.au/news/2012/10/22/two-factor-authentication-now-available"
  },
  "https://www.manulife.ca": {
    "name": "Manulife",
    "twitter": "Manulife",
    "tfa": false
  },
  "https://www.mapbox.com": {
    "name": "Mapbox",
    "tfa": true,
    "software": true,
    "doc": "https://www.mapbox.com/help/two-step-verification/"
  },
  "https://www.marcus.com": {
    "name": "GS Bank",
    "twitter": "GoldmanSachs",
    "facebook": "goldmansachs",
    "tfa": false
  },
  "https://www.markmonitor.com": {
    "name": "MarkMonitor",
    "tfa": true,
    "hardware": true,
    "sms": true,
    "software": true
  },
  "https://www.massdrop.com": {
    "name": "Massdrop",
    "twitter": "Massdrop",
    "tfa": false
  },
  "https://www.mathworks.com": {
    "name": "MathWorks",
    "tfa": true,
    "sms": true,
    "email": true,
    "software": true,
    "doc": "https://www.mathworks.com/mw_account/two_step_verification/frequently-asked-questions.html"
  },
  "https://www.max.se": {
    "name": "Max",
    "tfa": false,
    "twitter": "maxhamburgare",
    "facebook": "maxhamburgare",
    "lang": "sv"
  },
  "https://www.mbconnectline.com": {
    "name": "MB Connect Line",
    "tfa": true,
    "sms": true,
    "phone": true,
    "email": true,
    "software": true,
    "doc": "http://www.cc-onlinehelp.com/en/#index/administrati/users/authenticati/authenticati.html"
  },
  "https://www.mbna.ca": {
    "name": "MBNA Canada",
    "tfa": false,
    "twitter": "mbna_canada",
    "facebook": "MBNACanada"
  },
  "https://www.medicalert.ca": {
    "name": "MedicAlert",
    "twitter": "MedicAlertCA",
    "tfa": false
  },
  "https://www.meetup.com": {
    "name": "Meetup",
    "twitter": "meetup_support",
    "tfa": false
  },
  "https://www.mercadolibre.com": {
    "name": "Mercado Libre",
    "tfa": true,
    "software": true,
    "sms": true,
    "doc": "https://ayuda.mercadolibre.com.ar/ayuda/Consejos-para-fortalecer-la-se_961"
  },
  "https://www.meridiancu.ca": {
    "name": "Meridian Credit Union",
    "twitter": "meridiancu",
    "facebook": "MeridianCreditUnion",
    "tfa": false
  },
  "https://www.merrilledge.com": {
    "name": "Merrill Edge",
    "tfa": true,
    "sms": true,
    "doc": "https://github.com/2factorauth/twofactorauth/issues/2275"
  },
  "https://www.metrological.com": {
    "name": "Metrological",
    "tfa": true,
    "software": true,
    "doc": "https://github.com/2factorauth/twofactorauth/pull/2273#issuecomment-271876292"
  },
  "https://www.migadu.com": {
    "name": "Migadu",
    "email_address": "contact@migadu.com",
    "tfa": false
  },
  "https://www.minds.com": {
    "name": "Minds",
    "tfa": true,
    "sms": true
  },
  "https://www.mint.com": {
    "name": "Mint",
    "tfa": true,
    "sms": true,
    "email": true,
    "software": true
  },
  "https://www.mittwald.de": {
    "name": "Mittwald",
    "twitter": "mittwald",
    "tfa": false,
    "lang": "de"
  },
  "https://www.mojedatovaschranka.cz": {
    "name": "Datové schránky",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://www.mojedatovaschranka.cz/static/ISDS/help/page10.html#10_5_2"
  },
  "https://www.moneybird.com": {
    "name": "Moneybird",
    "tfa": true,
    "software": true,
    "doc": "https://www.moneybird.nl/blog/twee-staps-verificatie/"
  },
  "https://www.moniker.com": {
    "name": "Moniker",
    "tfa": false,
    "twitter": "monikersnap",
    "facebook": "MonikerLLC"
  },
  "https://www.monster.com": {
    "name": "Monster",
    "tfa": false,
    "twitter": "Monster",
    "facebook": "monster"
  },
  "https://www.montclair.edu": {
    "name": "Montclair State University",
    "twitter": "montclairstateu",
    "tfa": false
  },
  "https://www.motifinvesting.com": {
    "name": "MotifInvesting",
    "tfa": true,
    "sms": true,
    "phone": true,
    "doc": "https://www.motifinvesting.com/security"
  },
  "https://www.mtb.com": {
    "name": "MandT Bank",
    "tfa": false,
    "twitter": "MandT_Help",
    "facebook": "MandTBank"
  },
  "https://www.multcloud.com": {
    "name": "MultCloud",
    "twitter": "multcloud",
    "facebook": "multcloud",
    "tfa": false
  },
  "https://www.mydigipass.com": {
    "name": "MyDigipass.com",
    "tfa": true,
    "sms": true,
    "software": true,
    "hardware": true,
    "doc": "https://www.mydigipass.com/en/fp/signup"
  },
  "https://www.mydomain.com": {
    "name": "MyDomain",
    "twitter": "mydomaindotcom",
    "facebook": "mydomain",
    "tfa": false
  },
  "https://www.myfitnesspal.com": {
    "name": "myfitnesspal",
    "twitter": "myfitnesspal",
    "facebook": "myfitnesspal",
    "tfa": false
  },
  "https://www.mynefcu.org": {
    "name": "NEFCU",
    "tfa": false,
    "twitter": "mynefcu",
    "facebook": "NEFCU",
    "email_address": "info@mynefcu.org"
  },
  "https://www.mystudylife.com": {
    "name": "My Study Life",
    "twitter": "mystudylife",
    "facebook": "mystudylife",
    "tfa": false
  },
  "https://www.mytotalconnectcomfort.com": {
    "name": "Total Connect Comfort",
    "twitter": "Honeywell_Home",
    "facebook": "honeywellhome",
    "tfa": false
  },
  "https://www.name.com": {
    "name": "Name.com",
    "tfa": true,
    "software": true,
    "doc": "https://www.name.com/services/two-step-verification"
  },
  "https://www.namecheap.com": {
    "name": "Namecheap",
    "tfa": true,
    "sms": true,
    "phone": true,
    "software": true,
    "doc": "https://www.namecheap.com/support/knowledgebase/article.aspx/9253/45/how-to-two-factor-authentication"
  },
  "https://www.namesilo.com": {
    "name": "NameSilo.com",
    "tfa": true,
    "software": true,
    "doc": "https://www.namesilo.com/Support/2~Factor-Authentication"
  },
  "https://www.namespro.ca": {
    "name": "NamesPro.ca",
    "twitter": "namespro",
    "facebook": "namespro",
    "tfa": false
  },
  "https://www.nationwide.co.uk": {
    "name": "Nationwide Building Society",
    "tfa": true,
    "hardware": true,
    "doc": "https://www.nationwide.co.uk/support/security-centre/internet-banking-security/card-reader-and-security-questions"
  },
  "https://www.navyfederal.org": {
    "name": "Navy Federal Credit Union",
    "tfa": true,
    "email": true,
    "software": true,
    "doc": "https://nfcucloud.custhelp.com/app/answers/list/c/543"
  },
  "https://www.ncsecu.org": {
    "name": "State Employees Credit Union",
    "tfa": true,
    "sms": true,
    "doc": "https://www.ncsecu.org/MobileServices/OneTimePasscode.html"
  },
  "https://www.nearlyfreespeech.net": {
    "name": "NearlyFreeSpeech.NET",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://blog.nearlyfreespeech.net/2014/02/28/price-cuts-more-security-and-recovery-options/"
  },
  "https://www.netatmo.com": {
    "name": "Netatmo",
    "twitter": "NetatmoSupport",
    "facebook": "Netatmo",
    "tfa": false
  },
  "https://www.netcup.de": {
    "name": "Netcup",
    "tfa": true,
    "software": true,
    "doc": "http://www.netcup-wiki.de/wiki/Stammdaten_CCP#Zwei-Faktor-Authentifizierung_.282FA.29"
  },
  "https://www.neteller.com": {
    "name": "NETELLER",
    "tfa": true,
    "software": true,
    "doc": "https://support.neteller.com/ACCOUNT/Two-Factor-Authentication/85238429/What-is-two-step-authentication.htm"
  },
  "https://www.netfirms.com": {
    "name": "Netfirms",
    "twitter": "netfirms",
    "facebook": "netfirmsfans",
    "tfa": false
  },
  "https://www.netflix.com": {
    "name": "Netflix",
    "twitter": "Netflixhelps",
    "facebook": "netflix",
    "tfa": false
  },
  "https://www.netim.com": {
    "name": "Netim",
    "twitter": "Netim_com",
    "facebook": "netimcom",
    "tfa": false
  },
  "https://www.netregistry.com.au": {
    "name": "Netregistry",
    "twitter": "netregistry",
    "facebook": "netregistry",
    "tfa": false
  },
  "https://www.networksolutions.com": {
    "name": "Network Solutions",
    "twitter": "netsolcares",
    "facebook": "Web.com",
    "tfa": false
  },
  "https://www.newegg.com": {
    "name": "Newegg",
    "tfa": true,
    "software": true,
    "email": true,
    "sms": true
  },
  "https://www.newgrounds.com": {
    "name": "Newgrounds",
    "twitter": "Newgrounds",
    "email_address": "support@newgrounds.com",
    "facebook": "newgrounds",
    "tfa": false
  },
  "https://www.nexmo.com": {
    "name": "Nexmo",
    "tfa": true,
    "sms": true,
    "phone": true
  },
  "https://www.nexonia.com": {
    "name": "Nexonia",
    "facebook": "nexonia",
    "twitter": "nexonia",
    "tfa": false
  },
  "https://www.nicorgas.com": {
    "name": "Nicor Gas",
    "twitter": "Nicor_Gas",
    "facebook": "NicorGas",
    "tfa": false
  },
  "https://www.nimbox.co.uk": {
    "name": "Nimbox",
    "tfa": true,
    "email": true,
    "sms": true,
    "software": true,
    "doc": "http://support.nimbox.co.uk/knowledge_base/topics/two-step-slash-two-factor-authentication"
  },
  "https://www.noddle.co.uk": {
    "name": "Noddle",
    "twitter": "useyournoddle",
    "facebook": "noodleuk",
    "tfa": false
  },
  "https://www.noip.com": {
    "name": "No-IP",
    "tfa": false,
    "twitter": "NoIPcom",
    "facebook": "noipdns"
  },
  "https://www.nominet.uk": {
    "name": "Nominet",
    "tfa": true,
    "software": true,
    "doc": "https://registrars.nominet.org.uk/sites/default/files/two_factor_authentication_userguide.pdf"
  },
  "https://www.nordea.se": {
    "name": "Nordea Sverige",
    "tfa": true,
    "hardware": true,
    "software": true,
    "doc": "https://www.nordea.se/privat/vardagstjanster/internet-mobil-telefon/bank-id.html"
  },
  "https://www.nordnet.fi": {
    "name": "Nordnet Finland",
    "tfa": false,
    "twitter": "nordnetFI",
    "lang": "fi"
  },
  "https://www.nordnet.se": {
    "name": "Nordnet Sverige",
    "tfa": true,
    "software": true,
    "exceptions": {
      "text": "TFA only available for Swedish residents with BankID."
    }
  },
  "https://www.northerntool.com": {
    "name": "Northern Tool + Equipment",
    "tfa": false,
    "twitter": "NorthernTool",
    "facebook": "northerntool"
  },
  "https://www.northwesternmutual.com": {
    "name": "Northwestern Mutual",
    "facebook": "northwesternmutual",
    "tfa": false
  },
  "https://www.norwegian.com": {
    "name": "Norwegian",
    "twitter": "Fly_Norwegian",
    "facebook": "norwegianairlines",
    "tfa": false
  },
  "https://www.npmjs.com": {
    "name": "npm",
    "tfa": true,
    "software": true,
    "doc": "https://docs.npmjs.com/getting-started/using-two-factor-authentication"
  },
  "https://www.nsb.no": {
    "name": "NSB",
    "twitter": "nsb_no",
    "facebook": "nsb.no",
    "tfa": false
  },
  "https://www.nubank.com.br": {
    "name": "Nubank",
    "tfa": false,
    "twitter": "nubankbrasil",
    "facebook": "nubankbrasil",
    "lang": "pt"
  },
  "https://www.nuget.org": {
    "name": "NuGet",
    "tfa": false,
    "twitter": "nuget",
    "email_address": "support@nuget.org"
  },
  "https://www.nutmeg.com": {
    "name": "Nutmeg",
    "tfa": true,
    "software": true,
    "doc": "https://support.nutmeg.com/hc/en-us/articles/115000495111-How-to-set-up-and-manage-2-step-verification"
  },
  "https://www.nvidia.com": {
    "name": "GeForce (Nvidia)",
    "twitter": "NVIDIAGeForce",
    "facebook": "NVIDIAGeForce",
    "tfa": false
  },
  "https://www.oderland.se": {
    "name": "Oderland",
    "twitter": "oderlandab",
    "facebook": "oderland",
    "email_address": "support@oderland.se",
    "tfa": false,
    "lang": "sv"
  },
  "https://www.okcupid.com": {
    "name": "OkCupid",
    "twitter": "okcupid",
    "facebook": "okcupid",
    "tfa": false
  },
  "https://www.okta.com": {
    "name": "Okta",
    "tfa": true,
    "sms": true,
    "software": true,
    "phone": true,
    "email": true,
    "hardware": true,
    "doc": "https://help.okta.com/en/prod/Content/Topics/Security/MFA.htm"
  },
  "https://www.one.com": {
    "name": "One.com",
    "twitter": "onecom",
    "tfa": false
  },
  "https://www.onelogin.com": {
    "name": "OneLogin",
    "tfa": true,
    "sms": true,
    "hardware": true,
    "software": true,
    "doc": "http://www.onelogin.com/product/strong-authentication/two-factor-authentication/"
  },
  "https://www.online.net": {
    "name": "Online",
    "tfa": true,
    "sms": true,
    "software": true,
    "exceptions": {
      "text": "SMS available only to customers in France."
    }
  },
  "https://www.onlinesbi.com": {
    "name": "State Bank of India",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://www.onlinesbi.com/sbijava/mobile/sbsecure_otp_app_faq.html"
  },
  "https://www.onshape.com": {
    "name": "Onshape",
    "tfa": true,
    "software": true,
    "doc": "https://cad.onshape.com/help/Content/twofactorauthentication.htm"
  },
  "https://www.onstar.com": {
    "name": "OnStar",
    "tfa": false,
    "facebook": "onstar",
    "twitter": "OnStar"
  },
  "https://www.opendns.com": {
    "name": "OpenDNS",
    "tfa": true,
    "sms": true,
    "software": true,
    "exceptions": {
      "text": "Only available for enterprise accounts."
    },
    "doc": "https://engineering.opendns.com/2014/05/22/launching-two-step-verification/"
  },
  "https://www.openprovider.com": {
    "name": "Openprovider",
    "tfa": true,
    "software": true
  },
  "https://www.openshift.com": {
    "name": "OpenShift",
    "twitter": "openshift",
    "facebook": "openshift",
    "tfa": false
  },
  "https://www.optionsxpress.com": {
    "name": "OptionsXpress",
    "twitter": "optionsXpress",
    "tfa": false
  },
  "https://www.optumbank.com": {
    "name": "Optum Bank",
    "tfa": false,
    "twitter": "myOptum",
    "facebook": "myOptum"
  },
  "http://www.optus.com.au": {
    "name": "Optus",
    "twitter": "Optus",
    "facebook": "optus",
    "tfa": false
  },
  "https://www.orange.fr": {
    "name": "Orange",
    "twitter": "Orange_France",
    "facebook": "Orange.France",
    "tfa": false,
    "lang": "fr"
  },
  "https://www.oui.sncf": {
    "name": "Oui.sncf",
    "twitter": "ouisncf",
    "facebook": "oui.sncf",
    "tfa": false
  },
  "https://www.ov-chipkaart.nl": {
    "name": "OV-chipkaart",
    "twitter": "OVchipkaart",
    "tfa": false
  },
  "https://www.overstock.com": {
    "name": "Overstock",
    "tfa": false,
    "twitter": "Overstock",
    "facebook": "overstock",
    "email_address": "international@overstock.com"
  },
  "https://www.ovh.com": {
    "name": "OVH",
    "tfa": true,
    "sms": true,
    "software": true,
    "hardware": true
  },
  "https://www.packet.net": {
    "name": "Packet",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://help.packet.net/faq/onboarding/portal"
  },
  "https://www.pairdomains.com": {
    "name": "pair Domains",
    "tfa": true,
    "software": true,
    "sms": true,
    "doc": "https://www.pairdomains.com/kb/posts/345"
  },
  "https://www.pandora.com": {
    "name": "Pandora",
    "tfa": false,
    "twitter": "pandorasupport",
    "facebook": "pandora"
  },
  "https://www.panterranetworks.com": {
    "name": "SmartBox",
    "tfa": true,
    "email": true,
    "software": true,
    "exceptions": {
      "text": "Only available for Enterprise users"
    }
  },
  "https://www.parsecgaming.com": {
    "name": "Parsec",
    "tfa": false,
    "status": "https://twitter.com/ParsecTeam/status/957465838076026880",
    "twitter": "ParsecTeam",
    "facebook": "parsecgaming",
    "email_address": "founders@parsecgaming.com"
  },
  "https://www.passpack.com": {
    "name": "Passpack",
    "tfa": true,
    "email": true,
    "hardware": true,
    "doc": "https://help.passpack.com/knowledgebase/idx.php/44/0/"
  },
  "https://www.patelco.org": {
    "name": "Patelco Credit Union",
    "tfa": true,
    "sms": true,
    "email": true,
    "phone": true,
    "doc": "https://www.patelco.org/Privacy-Security/Protection"
  },
  "https://www.patreon.com": {
    "name": "Patreon",
    "tfa": true,
    "sms": true,
    "doc": "https://patreon.zendesk.com/hc/en-us/articles/206538086-How-Do-I-Set-Up-2-Factor-Authorization"
  },
  "https://www.paychex.com": {
    "name": "Paychex",
    "tfa": true,
    "sms": true,
    "phone": true
  },
  "https://www.paycor.com": {
    "name": "Paycor",
    "tfa": true,
    "sms": true,
    "email": true,
    "phone": true,
    "software": true,
    "doc": "https://www.paycor.com/security/how-to-keep-your-account-safe"
  },
  "https://www.payoneer.com": {
    "name": "Payoneer",
    "twitter": "Payoneer",
    "tfa": false
  },
  "https://www.paypal.com": {
    "name": "PayPal",
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
    "tfa": true,
    "software": true,
    "doc": "https://www.paysafecard.com/en-au/lp-products/2-step-login/"
  },
  "https://www.payza.eu": {
    "name": "Payza",
    "tfa": true,
    "software": true,
    "doc": "https://docs.payza.eu/docs/personal-manual-advanced-security#section-how-do-i-set-up-2-factor-authentication"
  },
  "https://www.pccasegear.com": {
    "name": "PC Case Gear",
    "twitter": "pccasegear",
    "tfa": false
  },
  "https://www.pcfinancial.ca": {
    "name": "President's Choice Financial",
    "twitter": "PCFinancial",
    "facebook": "PCFinancial",
    "tfa": false
  },
  "https://www.peerio.com": {
    "name": "Peerio",
    "tfa": true,
    "software": true,
    "doc": "https://peerio.zendesk.com/hc/en-us/articles/202933829-How-do-I-setup-two-factor-authentication-"
  },
  "https://www.penfed.org": {
    "name": "PenFed",
    "twitter": "PenFed",
    "facebook": "PenFed",
    "tfa": false
  },
  "https://www.perfect-privacy.com": {
    "name": "Perfect Privacy VPN",
    "tfa": false,
    "twitter": "perfectprivacy",
    "facebook": "perfect.privacy"
  },
  "https://www.personalcapital.com": {
    "name": "Personal Capital",
    "tfa": true,
    "email": true,
    "phone": true,
    "doc": "https://www.personalcapital.com/safety-and-security"
  },
  "https://www.pge.com": {
    "name": "Pacific Gas and Electric Company PG&amp;E",
    "twitter": "PGE4Me",
    "facebook": "pacificgasandelectric",
    "tfa": false
  },
  "https://www.pingdom.com": {
    "name": "Pingdom",
    "tfa": false,
    "twitter": "pingdom",
    "facebook": "pingdom"
  },
  "https://www.pinterest.com": {
    "name": "Pinterest",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://help.pinterest.com/en/articles/two-factor-authentication"
  },
  "https://www.pivotaltracker.com": {
    "name": "Pivotal Tracker",
    "twitter": "pivotaltracker",
    "facebook": "pivotaltracker",
    "tfa": false
  },
  "https://www.planethoster.com": {
    "name": "PlanetHoster",
    "tfa": true,
    "software": true,
    "doc": "https://blog.planethoster.com/securite-espace-client-planethoster/"
  },
  "https://www.plastiq.com": {
    "name": "Plastiq",
    "tfa": true,
    "sms": true,
    "doc": "https://help.plastiq.com/hc/en-us/articles/360006794893"
  },
  "https://www.playstation.com": {
    "name": "Playstation Network",
    "tfa": true,
    "sms": true,
    "doc": "https://www.playstation.com/en-us/account-security/2-step-verification/"
  },
  "https://www.plex.tv": {
    "name": "Plex",
    "twitter": "plexapp",
    "facebook": "plexapp",
    "tfa": false
  },
  "https://www.plivo.com": {
    "name": "Plivo",
    "twitter": "plivo",
    "facebook": "Plivo",
    "tfa": false
  },
  "https://www.pluralsight.com": {
    "name": "Code School",
    "twitter": "codeschool",
    "facebook": "CodeSchool",
    "tfa": false
  },
  "https://www.pnc.com": {
    "name": "PNC Bank",
    "tfa": true,
    "sms": true,
    "doc": "https://www.pnc.com/en/customer-service/update-center/sign-on-changes.html"
  },
  "https://www.poba.hr": {
    "name": "Podravska banka",
    "tfa": true,
    "hardware": true,
    "software": true,
    "doc": "http://www.poba.hr/get_file.php?d=pobaklik__upute_gradani.pdf&PHPSESSID=cafutfbcjozu"
  },
  "https://www.pobox.com": {
    "name": "Pobox",
    "tfa": true,
    "software": true,
    "hardware": true,
    "doc": "https://pobox.com/helpspot/index.php?pg=kb.chapter&id=65"
  },
  "https://www.pocketsmith.com": {
    "name": "Pocketsmith",
    "tfa": true,
    "software": true,
    "doc": "https://learn.pocketsmith.com/article/167-two-factor-authentication-2fa-on-your-pocketsmith-account"
  },
  "https://www.popmoney.com": {
    "name": "Popmoney",
    "twitter": "popmoney",
    "facebook": "popmoney",
    "tfa": false
  },
  "https://www.postbank.de": {
    "name": "Postbank",
    "twitter": "postbank",
    "facebook": "postbank",
    "tfa": false,
    "lang": "de"
  },
  "https://www.poste.it": {
    "name": "PosteItaliane",
    "twitter": "PosteNews",
    "facebook": "PosteItaliane",
    "email_address": "servizio.clienti@posteitaliane.it",
    "tfa": false,
    "lang": "it"
  },
  "https://www.powerstream.ca": {
    "name": "PowerStream",
    "twitter": "PowerStreamNews",
    "facebook": "PowerStreamPage",
    "tfa": false
  },
  "https://www.pozible.com": {
    "name": "Pozible",
    "twitter": "pozible",
    "tfa": false
  },
  "https://www.privateinternetaccess.com": {
    "name": "Private Internet Access",
    "tfa": false,
    "twitter": "piacsm"
  },
  "https://www.profitbricks.de": {
    "name": "ProfitBricks",
    "tfa": true,
    "software": true,
    "doc": "https://www.profitbricks.com/help/2-Factor_Authentication"
  },
  "https://www.progressive.com": {
    "name": "Progressive",
    "twitter": "progressive",
    "facebook": "progressive",
    "tfa": false
  },
  "https://www.promoter.io": {
    "name": "Promoter.io",
    "tfa": false,
    "twitter": "Promoter_io"
  },
  "https://www.psu.edu": {
    "name": "Pennsylvania State University",
    "tfa": true,
    "sms": true,
    "phone": true,
    "software": true,
    "hardware": true,
    "doc": "https://www.identity.psu.edu/services/authentication-services/two-factor/"
  },
  "https://www.purevpn.com": {
    "name": "PureVPN",
    "tfa": false,
    "twitter": "PureVPNcom",
    "facebook": "PureVPNcom"
  },
  "https://www.pushcoin.com": {
    "name": "PushCoin",
    "tfa": true,
    "hardware": true,
    "exceptions": {
      "text": "U2F support only for school admin accounts. 2FA for parent accounts is in progress."
    },
    "doc": "http://knowhow.pushcoin.com/using-security-key-for-2-step-verification/"
  },
  "https://www.pwnieexpress.com": {
    "name": "Pwnie Express Pwn Pulse",
    "tfa": true,
    "software": true,
    "exceptions": {
      "text": "TFA can be enabled on Pwn Pulse Accounts upon customer request."
    },
    "doc": "http://support.pwnieexpress.com/customer/en/portal/articles/2858909-chapter-5-pulse-administration-user-management"
  },
  "https://www.pythonanywhere.com": {
    "name": "PythonAnywhere",
    "tfa": true,
    "software": true
  },
  "https://www.qnap.com": {
    "name": "QNAP",
    "tfa": true,
    "email": true,
    "software": true,
    "doc": "https://www.qnap.com/en-us/how-to/tutorial/article/how-to-enhance-account-security-using-2-step-verification"
  },
  "https://www.qobuz.com": {
    "name": "Qobuz",
    "twitter": "qobuz",
    "facebook": "qobuz",
    "tfa": false
  },
  "https://www.questrade.com": {
    "name": "Questrade",
    "tfa": false,
    "twitter": "Questrade",
    "status": "https://twitter.com/Questrade/status/864214855078866977"
  },
  "https://www.quickfile.co.uk": {
    "name": "QuickFile",
    "tfa": true,
    "software": true,
    "doc": "https://community.quickfile.co.uk/t/2-factor-authentication/8892"
  },
  "https://www.quizzle.com": {
    "name": "Quizzle",
    "tfa": false,
    "twitter": "Quizzle"
  },
  "https://www.quora.com": {
    "name": "Quora",
    "tfa": false,
    "twitter": "quora"
  },
  "https://www.rackspace.com": {
    "name": "Rackspace",
    "tfa": true,
    "sms": true,
    "doc": "https://support.rackspace.com/how-to/myrackspace-multi-factor-authentication/"
  },
  "https://www.raizers.com": {
    "name": "Raizers",
    "tfa": false,
    "twitter": "Raizers"
  },
  "https://www.rakuten.com": {
    "name": "Rakuten",
    "twitter": "AskRakutenUS",
    "tfa": false
  },
  "https://www.ramnode.com": {
    "name": "RamNode",
    "tfa": true,
    "software": true,
    "doc": "https://clientarea.ramnode.com/knowledgebase.php?action=displayarticle&id=70"
  },
  "https://www.ravelin.com": {
    "name": "Ravelin",
    "tfa": true,
    "software": true,
    "doc": "https://ravelin.zendesk.com/hc/en-us/articles/115001071665-Two-Factor-Authentication"
  },
  "https://www.rb.cz": {
    "name": "Raiffeisen Bank CZ",
    "doc": "https://www.rb.cz/firemni-finance/podnikatele-a-male-firmy/prime-bankovnictvi/sluzby-pro-firemni-ucty/bezpecnost-internetoveho-bankovnictvi/",
    "tfa": true,
    "hardware": true
  },
  "https://www.rbcdirectinvesting.com": {
    "name": "RBC Direct Investing",
    "twitter": "RBC",
    "tfa": false
  },
  "https://www.rbcroyalbank.com": {
    "name": "RBC Royal Bank",
    "twitter": "RBC_Canada",
    "facebook": "rbc",
    "tfa": false
  },
  "https://www.rcn.com": {
    "name": "RCN",
    "twitter": "RCNconnects",
    "facebook": "RCN",
    "tfa": false
  },
  "https://www.realme.govt.nz": {
    "name": "RealMe",
    "tfa": true,
    "sms": true,
    "hardware": true,
    "software": true,
    "doc": "https://www.realme.govt.nz/help/#second-factor-authentication"
  },
  "https://www.realvnc.com": {
    "name": "RealVNC",
    "tfa": true,
    "software": true,
    "doc": "https://www.realvnc.com/en/connect/docs/multi-factor-auth.html#protecting-your-realvnc-account"
  },
  "https://www.rebel.com": {
    "name": "Rebel.com",
    "twitter": "rebeldotcom",
    "facebook": "rebeldomains",
    "tfa": false
  },
  "https://www.redbus.in": {
    "name": "redBus",
    "twitter": "redBus_in",
    "facebook": "redBus.in",
    "email_address": "support@redbus.in",
    "tfa": false
  },
  "https://www.reddit.com": {
    "name": "Reddit",
    "tfa": true,
    "software": true,
    "doc": "https://www.reddithelp.com/en/categories/using-reddit/your-reddit-account/how-set-two-factor-authentication"
  },
  "https://www.regions.com": {
    "name": "Regions Bank",
    "twitter": "askRegions",
    "facebook": "RegionsBank",
    "tfa": false
  },
  "https://www.repairshopr.com": {
    "name": "Repairshopr",
    "tfa": true,
    "doc": "https://feedback.repairshopr.com/knowledgebase/articles/928266-two-factor-authentication-google-authenticator",
    "sms": true,
    "software": true,
    "exceptions": {
      "text": "SMS only available as a backup to Google Authenticator."
    }
  },
  "https://www.rge.com": {
    "name": "Rochester Gas & Electric",
    "twitter": "RGandE",
    "facebook": "RochGandE",
    "tfa": false
  },
  "https://www.rightscale.com": {
    "name": "RightScale",
    "tfa": false,
    "twitter": "RightScale",
    "facebook": "RightScale"
  },
  "https://www.ripe.net": {
    "name": "Ripe NCC",
    "tfa": true,
    "software": true,
    "doc": "https://www.ripe.net/participate/member-support/ripe-ncc-access/two-step-verification"
  },
  "https://www.robinhood.com": {
    "name": "Robinhood",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://support.robinhood.com/hc/en-us/articles/211546986-Two-Factor-Authentication"
  },
  "https://www.roboform.com": {
    "name": "RoboForm",
    "tfa": true,
    "email": true,
    "sms": true,
    "software": true,
    "doc": "https://help.roboform.com/hc/en-us/articles/115002729512-Setting-up-Google-Authenticator-for-your-account"
  },
  "https://www.rogers.com": {
    "name": "Rogers",
    "twitter": "RogersHelps",
    "facebook": "Rogers",
    "tfa": false
  },
  "https://www.roku.com": {
    "name": "Roku",
    "tfa": false,
    "twitter": "RokuSupport",
    "facebook": "roku"
  },
  "http://www.royalroads.ca": {
    "name": "Royal Roads University",
    "twitter": "RoyalRoads",
    "facebook": "royalroadsu",
    "tfa": false
  },
  "https://www.runescape.com": {
    "name": "RuneScape",
    "tfa": true,
    "software": true,
    "doc": "https://support.runescape.com/hc/en-gb/articles/206811835-Setting-the-Authenticator-Mobile-Device"
  },
  "https://www.runtastic.com": {
    "name": "Runtastic",
    "twitter": "Runtastic",
    "facebook": "runtastic",
    "tfa": false
  },
  "https://www.ryanair.com": {
    "name": "Ryanair",
    "twitter": "Ryanair",
    "facebook": "ryanair",
    "tfa": false
  },
  "https://www.safecu.org": {
    "name": "SAFE Credit Union",
    "tfa": true,
    "sms": true,
    "email": true,
    "phone": true,
    "doc": "https://www.safecu.org/personal/online-security/enhanced-login-security"
  },
  "https://www.safervpn.com": {
    "name": "SaferVPN",
    "tfa": false,
    "twitter": "SaferVPN",
    "facebook": "SaferVPNCom"
  },
  "https://www.salesforce.com": {
    "name": "Salesforce",
    "tfa": true,
    "sms": true,
    "software": true,
    "email": true,
    "hardware": true,
    "doc": "https://developer.salesforce.com/docs/atlas.en-us.identityImplGuide.meta/identityImplGuide/add_time-based_token.htm"
  },
  "https://www.samsung.com": {
    "name": "Samsung",
    "tfa": true,
    "sms": true,
    "doc": "https://help.content.samsung.com/csweb/faq/searchFaq.do?category1_id=sacb-01-003&serviceCd=saccount"
  },
  "https://www.sanebox.com": {
    "name": "SaneBox",
    "tfa": true,
    "software": true,
    "doc": "https://support.sanebox.com/hc/en-us/articles/203837226-Two-Factor-Authentication-2FA-for-your-account-dashboard-on-sanebox-com"
  },
  "https://www.santander.co.uk": {
    "name": "Santander UK",
    "tfa": true,
    "sms": true,
    "doc": "https://www.santander.co.uk/uk/help-support/security-centre"
  },
  "https://www.santander.com.br": {
    "name": "Santander BR",
    "tfa": false,
    "twitter": "santander_br",
    "facebook": "santanderbrasil",
    "email_address": "santander.email@santander.com.br",
    "lang": "pt"
  },
  "https://www.scaleway.com": {
    "name": "Scaleway",
    "tfa": true,
    "software": true,
    "doc": "https://blog.online.net/2017/06/13/introducing-two-factor-authentication-on-scaleway/"
  },
  "https://www.scalr.com": {
    "name": "Scalr",
    "tfa": true,
    "software": true,
    "doc": "https://scalr-wiki.atlassian.net/wiki/display/docs/Two-Factor+Authentication"
  },
  "https://www.sccfcu.org": {
    "name": "Santa Clara County Federal Credit Union",
    "twitter": "SCCFCU",
    "facebook": "SCCFCU",
    "tfa": false
  },
  "https://www.sce.com": {
    "name": "Southern California Edison",
    "twitter": "SCE",
    "facebook": "sce",
    "tfa": false
  },
  "https://www.schoolsfirstfcu.org": {
    "name": "SchoolsFirst FCU",
    "twitter": "SchoolsFirstFCU",
    "facebook": "SchoolsFirstFCU",
    "tfa": false
  },
  "https://www.schoolsoft.se": {
    "name": "SchoolSoft",
    "email_address": "support@schoolsoft.se",
    "tfa": false
  },
  "https://www.schwab.com": {
    "name": "Charles Schwab",
    "tfa": true,
    "software": true,
    "hardware": true,
    "doc": "https://twofactorauth.org/notes/schwab/"
  },
  "http://www.scotiabank.com": {
    "name": "Scotiabank",
    "tfa": false,
    "twitter": "ScotiabankHelps",
    "facebook": "scotiabank"
  },
  "https://www.scotrail.co.uk": {
    "name": "ScotRail",
    "twitter": "ScotRail",
    "facebook": "ScotRail",
    "tfa": false
  },
  "https://www.sdccu.com": {
    "name": "San Diego County Credit Union",
    "twitter": "sdccu",
    "facebook": "SDCCU",
    "tfa": false
  },
  "https://www.sdge.com": {
    "name": "San Diego Gas & Electric",
    "twitter": "SDGE",
    "facebook": "SanDiegoGasandElectric",
    "tfa": false
  },
  "https://www.section.io": {
    "name": "section.io",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://www.section.io/docs/how-to/user-management/enable-two-factor-authentication-on-your-account/"
  },
  "https://www.securesafe.com": {
    "name": "SecureSafe",
    "tfa": true,
    "sms": true,
    "exceptions": {
      "text": "2FA is only available on paid plans."
    },
    "doc": "https://www.securesafe.com/en/faq/general-questions/how-can-i-activate-2-factor-authentication/"
  },
  "https://www.servus.ca": {
    "name": "Servus Credit Union",
    "twitter": "ServusCU",
    "facebook": "ServusCU",
    "tfa": false
  },
  "https://www.sffirecu.org": {
    "name": "San Francisco Fire Credit Union",
    "tfa": true,
    "sms": true,
    "email": true,
    "phone": true,
    "doc": "https://www.sffirecu.org/access/online-and-mobile-banking/new-olb"
  },
  "https://www.shoeboxed.com": {
    "name": "Shoeboxed",
    "twitter": "Shoeboxed",
    "facebook": "shoeboxed",
    "tfa": false
  },
  "https://www.shopify.com": {
    "name": "Shopify",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://help.shopify.com/manual/your-account/account-security/two-step-authentication"
  },
  "https://www.sierratradingpost.com": {
    "name": "Sierra Trading Post",
    "tfa": false,
    "twitter": "Sierratp",
    "facebook": "sierratradingpost"
  },
  "https://www.sigfig.com": {
    "name": "SigFig",
    "twitter": "sigfiginsights",
    "tfa": false
  },
  "https://www.signal.org": {
    "name": "Signal",
    "tfa": true,
    "sms": true,
    "phone": true,
    "doc": "https://support.signal.org/hc/en-us/articles/360007059792"
  },
  "https://www.signnow.com": {
    "name": "SignNow",
    "tfa": false,
    "twitter": "signnow",
    "facebook": "esignaturesignnow"
  },
  "https://www.simple.com": {
    "name": "Simple",
    "tfa": true,
    "sms": true,
    "doc": "https://www.simple.com/help/articles/account-maintenance/security"
  },
  "https://www.simplii.com": {
    "name": "Simplii Financial",
    "tfa": false,
    "facebook": "SimpliiFinancial",
    "twitter": "SimpliiFin"
  },
  "https://www.singlehop.com": {
    "name": "SingleHop",
    "tfa": true,
    "software": true,
    "doc": "http://library.singlehop.com/assets_project_development/Two_Factor_Instructions.pdf"
  },
  "https://www.sipgate.de": {
    "name": "sipgate",
    "twitter": "sipgateDE",
    "facebook": "sipgate",
    "tfa": false,
    "lang": "de"
  },
  "https://www.site5.com": {
    "name": "Site5",
    "twitter": "site5",
    "tfa": false
  },
  "https://www.siteground.com": {
    "name": "SiteGround",
    "tfa": true,
    "software": true,
    "doc": "https://www.siteground.com/tutorials/two-factor-authentication/"
  },
  "https://www.sj.se": {
    "name": "SJ",
    "twitter": "SJ_AB",
    "facebook": "sj",
    "tfa": false
  },
  "https://www.skatteverket.se": {
    "name": "Skatteverket",
    "tfa": true,
    "hardware": true,
    "software": true,
    "doc": "https://www.skatteverket.se/privat/sjalvservice/allaetjanster/omelegitimation.4.18e1b10334ebe8bc80004811.html"
  },
  "https://www.skype.com": {
    "name": "Skype",
    "tfa": true,
    "email": true,
    "sms": true,
    "software": true,
    "doc": "https://support.microsoft.com/en-us/help/12408/microsoft-account-about-two-step-verification"
  },
  "https://www.sling.com": {
    "name": "Sling TV",
    "twitter": "slinganswers",
    "facebook": "sling",
    "tfa": false
  },
  "https://www.smartsimple.com": {
    "name": "SmartSimple",
    "tfa": true,
    "software": true,
    "hardware": true,
    "doc": "https://wiki.smartsimple.com/wiki/Two-Factor_Authentication"
  },
  "https://www.smartthings.com": {
    "name": "Samsung SmartThings",
    "tfa": true,
    "sms": true,
    "doc": "https://help.content.samsung.com/csweb/faq/searchFaq.do?category1_id=sacb-01-003&serviceCd=saccount"
  },
  "https://www.smashcast.tv": {
    "name": "smashcast",
    "tfa": true,
    "software": true,
    "doc": "https://help.smashcast.tv/customer/en/portal/articles/2779887"
  },
  "https://www.snapchat.com": {
    "name": "Snapchat",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://support.snapchat.com/ca/login-verification"
  },
  "https://www.snapdeal.com": {
    "name": "Snapdeal",
    "tfa": false,
    "twitter": "SnapdealTech",
    "facebook": "Snapdeal",
    "email_address": "help@snapdeal.com"
  },
  "https://www.softlayer.com": {
    "name": "Softlayer",
    "tfa": true,
    "software": true,
    "doc": "https://knowledgelayer.softlayer.com/node/6443"
  },
  "https://www.solarweb.com": {
    "name": "Solar.web",
    "tfa": false,
    "twitter": "FroniusUSASolar",
    "facebook": "FroniusUSASolarEnergy"
  },
  "https://www.sonic.com": {
    "name": "Sonic",
    "tfa": true,
    "sms": true,
    "software": true,
    "phone": true,
    "doc": "https://wiki.sonic.net/wiki/2-Step_Verification"
  },
  "https://www.sosh.fr": {
    "name": "Sosh",
    "twitter": "Sosh_fr",
    "facebook": "sosh",
    "tfa": false,
    "lang": "fr"
  },
  "https://www.southwest.com": {
    "name": "Southwest",
    "twitter": "SouthwestAir",
    "facebook": "SouthwestAir",
    "tfa": false
  },
  "https://www.sparda.de": {
    "name": "Sparda Banken",
    "twitter": "spardaberlin",
    "facebook": "spardaberlin",
    "email_address": "info@sparda-verband.de",
    "tfa": false,
    "lang": "de"
  },
  "https://www.sparkasse.de": {
    "name": "Sparkasse",
    "twitter": "sparkasse",
    "facebook": "sparkasse",
    "email_address": "sparkasse@sparkassen-finanzportal.de",
    "tfa": false,
    "lang": "de"
  },
  "https://www.sparkpost.com": {
    "name": "SparkPost",
    "tfa": true,
    "software": true,
    "doc": "https://support.sparkpost.com/customer/portal/articles/1948449"
  },
  "https://www.spectrum.com": {
    "name": "Time Warner Cable",
    "twitter": "TWC_Help",
    "facebook": "twc",
    "tfa": false
  },
  "https://www.speedit.org": {
    "name": "SpeedIT Solutions",
    "tfa": true,
    "software": true
  },
  "https://www.spirit.com": {
    "name": "Spirit",
    "twitter": "SpiritAirlines",
    "facebook": "SpiritAirlines",
    "tfa": false
  },
  "https://www.splitskabanka.hr": {
    "name": "Splitska banka",
    "tfa": true,
    "hardware": true,
    "doc": "https://www.splitskabanka.hr/LinkClick.aspx?fileticket=uADVHHVmbUU%3d&tabid=4756&portalid=8&mid=8287"
  },
  "https://www.spotify.com": {
    "name": "Spotify",
    "twitter": "spotifycares",
    "facebook": "spotify",
    "tfa": false
  },
  "https://www.sprint.com": {
    "name": "Sprint",
    "twitter": "sprint",
    "facebook": "sprint",
    "tfa": false
  },
  "https://www.squarespace.com": {
    "name": "Squarespace",
    "tfa": true,
    "software": true,
    "doc": "https://support.squarespace.com/hc/en-us/articles/360000044827"
  },
  "https://www.ssa.gov": {
    "name": "US Social Security Administration",
    "tfa": true,
    "sms": true,
    "doc": "https://secure.ssa.gov/RIL/HpsView.do#question3"
  },
  "https://www.ssltrust.com.au": {
    "name": "SSLTrust",
    "tfa": true,
    "software": true,
    "doc": "http://www.ssltrust.com.au/enable-two-factor-authentication.html"
  },
  "https://www.stackfield.com": {
    "name": "Stackfield",
    "tfa": true,
    "software": true,
    "doc": "http://en.stackfield.help/article/92-activating-deactivating-the-two-factor-authentication"
  },
  "https://www.stackpath.com": {
    "name": "MaxCDN",
    "tfa": true,
    "software": true,
    "doc": "https://www.maxcdn.com/one/tutorial/enable-two-step-verification/"
  },
  "https://www.stanford.edu": {
    "name": "Stanford University",
    "tfa": true,
    "sms": true,
    "phone": true,
    "software": true,
    "doc": "https://uit.stanford.edu/service/webauth/twostep"
  },
  "https://www.starbucks.com": {
    "name": "Starbucks",
    "tfa": false,
    "twitter": "Starbucks",
    "facebook": "Starbucks"
  },
  "https://www.stardock.com": {
    "name": "Stardock Corporation",
    "twitter": "Stardock",
    "facebook": "official.stardock",
    "tfa": false
  },
  "https://www.starlingbank.com": {
    "name": "Starling Bank",
    "twitter": "StarlingBank",
    "facebook": "StarlingBankUK",
    "tfa": false
  },
  "https://www.startmail.com": {
    "name": "StartMail",
    "tfa": true,
    "software": true,
    "doc": "https://support.startmail.com/index.php?/Knowledgebase/Article/View/704/4/how-to-set-up-two-factor-authentication-2fa"
  },
  "https://www.statefarm.com": {
    "name": "State Farm",
    "tfa": false,
    "twitter": "StateFarm",
    "facebook": "StateFarm"
  },
  "https://www.statuscake.com": {
    "name": "StatusCake",
    "tfa": true,
    "sms": true
  },
  "https://www.statuspage.io": {
    "name": "StatusPage.io",
    "twitter": "statuspageio",
    "facebook": "statuspageio",
    "tfa": false
  },
  "https://www.strato.de": {
    "name": "STRATO",
    "twitter": "STRATO_AG",
    "facebook": "strato",
    "tfa": false,
    "lang": "de"
  },
  "https://www.strava.com": {
    "name": "Strava",
    "twitter": "Strava",
    "facebook": "Strava",
    "tfa": false
  },
  "https://www.sugarsync.com": {
    "name": "SugarSync",
    "twitter": "SugarSync",
    "tfa": false,
    "facebook": "SugarSync"
  },
  "https://www.sumologic.com": {
    "name": "Sumo Logic",
    "tfa": true,
    "software": true,
    "doc": "https://help.sumologic.com/Manage/Security/About_2-Step_Verification"
  },
  "https://www.suntrust.com": {
    "name": "SunTrust",
    "twitter": "SunTrust",
    "facebook": "suntrust",
    "tfa": false
  },
  "https://www.swedbank.se": {
    "name": "Swedbank",
    "tfa": true,
    "hardware": true,
    "software": true,
    "doc": "https://hjalp.swedbank.se/logga-in/index.htm"
  },
  "https://www.swisscom.ch": {
    "name": "Swisscom",
    "twitter": "Swisscom_de",
    "facebook": "Swisscom",
    "tfa": false,
    "lang": "de"
  },
  "http://www.swtor.com": {
    "name": "Star Wars: The Old Republic",
    "tfa": true,
    "software": true,
    "hardware": true,
    "doc": "http://www.swtor.com/info/security-key"
  },
  "https://www.sync.com": {
    "name": "Sync",
    "software": true,
    "email": true,
    "tfa": true,
    "doc": "https://www.sync.com/help/how-do-i-setup-two-factor-authentication/"
  },
  "https://www.synchronybank.com": {
    "name": "Synchrony Bank",
    "tfa": true,
    "sms": true,
    "phone": true,
    "doc": "https://www.synchronybank.com/why-synchrony/secure-banking/"
  },
  "https://www.synology.com": {
    "name": "Synology",
    "tfa": true,
    "software": true,
    "email": true,
    "doc": "https://originwww.synology.com/en-us/knowledgebase/tutorials/615#t5"
  },
  "https://www.syspectr.com": {
    "name": "O&amp;O Syspectr",
    "tfa": true,
    "software": true,
    "doc": "https://www.syspectr.com/en/faq/how-do-i-activate-deactivate-two-factor-authentication-for-my-account"
  },
  "https://www.szkb.ch": {
    "name": "Schwyzer Kantonalbank",
    "tfa": true,
    "sms": true,
    "doc": "https://www.szkb.ch/pub/ueber-die-szkb/servicezentrum/e-services/sicherheit"
  },
  "https://www.t-mobile.com": {
    "name": "T-Mobile",
    "tfa": true,
    "sms": true,
    "doc": "https://support.t-mobile.com/docs/DOC-2727"
  },
  "https://www.t-online.de": {
    "name": "T-Online",
    "twitter": "Telekom_hilft",
    "facebook": "tonline.de",
    "lang": "de",
    "tfa": false
  },
  "https://www.tacobell.com": {
    "name": "Taco Bell",
    "tfa": false,
    "twitter": "tacobell",
    "facebook": "tacobell"
  },
  "https://www.tangerine.ca": {
    "name": "Tangerine",
    "twitter": "tangerinebank",
    "facebook": "TangerineBank",
    "tfa": false
  },
  "https://www.target.com": {
    "name": "Target",
    "twitter": "target",
    "tfa": false
  },
  "https://www.targobank.de": {
    "name": "TARGOBANK",
    "tfa": false,
    "twitter": "TARGOBANK",
    "facebook": "targobank",
    "lang": "de"
  },
  "https://www.taxact.com": {
    "name": "Taxact",
    "tfa": true,
    "email": true,
    "sms": true,
    "doc": "https://www.taxact.com/support/24138/2016/how-is-a-verification-code-used"
  },
  "http://www.tbcbank.ge": {
    "name": "TBC Bank",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "http://www.tbcbank.ge/web/en/web/guest/tbc-digipass"
  },
  "https://www.td.com": {
    "name": "TD Canada Trust",
    "tfa": true,
    "sms": true,
    "phone": true,
    "doc": "https://www.td.com/privacy-and-security/privacy-and-security/how-we-protect-you/online-security/2fa.jsp"
  },
  "https://www.tdameritrade.com": {
    "name": "Scottrade",
    "twitter": "scottrade",
    "tfa": false
  },
  "https://www.teamspeak.com": {
    "name": "TeamSpeak",
    "twitter": "teamspeak",
    "facebook": "teamspeak",
    "tfa": false
  },
  "https://www.teamviewer.com": {
    "name": "TeamViewer",
    "tfa": true,
    "software": true,
    "doc": "https://www.teamviewer.com/en/help/402-How-do-I-activate-deactivate-two-factor-authentication-for-my-TeamViewer-account.aspx"
  },
  "https://www.tebex.io": {
    "name": "Buycraft",
    "tfa": true,
    "software": true,
    "sms": true,
    "exceptions": {
      "text": "SMS-capable phone required."
    },
    "doc": "https://help.buycraft.net/article/83-two-factor-authentication"
  },
  "https://www.telekom.de": {
    "name": "Deutsche Telekom",
    "twitter": "deutschetelekom",
    "facebook": "deutschetelekom",
    "email_address": "impressum@telekom.de",
    "tfa": false,
    "lang": "de"
  },
  "https://www.telia.se": {
    "name": "Telia (Sweden)",
    "tfa": true,
    "software": true,
    "exceptions": {
      "text": "2FA is only available for Swedish citizens with BankID."
    },
    "doc": "https://www.telia.se/privat/support/info/logga-in-med-bankid-och-eleg-pa-mitt-telia"
  },
  "https://www.telstra.com.au": {
    "name": "Telstra",
    "twitter": "Telstra",
    "facebook": "Telstra24x7",
    "tfa": false
  },
  "https://www.temple.edu": {
    "name": "Temple University",
    "tfa": true,
    "sms": true,
    "phone": true,
    "software": true,
    "doc": "https://computerservices.temple.edu/two-step-verification"
  },
  "https://www.tesla.com": {
    "name": "Tesla",
    "tfa": false,
    "twitter": "TeslaMotors"
  },
  "https://www.thebay.com": {
    "name": "Hudson's Bay",
    "twitter": "hudsonsbay",
    "tfa": false
  },
  "https://www.thelevelup.com": {
    "name": "LevelUp",
    "twitter": "TheLevelUp",
    "facebook": "LevelUpApp",
    "tfa": false
  },
  "https://www.therightbank.com": {
    "name": "Pacific Continental",
    "tfa": true,
    "sms": true,
    "phone": true,
    "doc": "https://www.therightbank.com/sites/www.therightbank.com/files/files/online-services-instructions.pdf"
  },
  "https://www.thexyz.com": {
    "name": "Thexyz",
    "tfa": true,
    "software": true,
    "hardware": true,
    "doc": "https://www.thexyz.com/account/knowledgebase/15/Enabling-two-factor-authentication.html"
  },
  "https://www.threatmetrix.com": {
    "name": "ThreatMetrix",
    "tfa": false,
    "twitter": "ThreatMetrix"
  },
  "http://www.three.co.uk": {
    "name": "Three UK",
    "twitter": "ThreeUK",
    "facebook": "ThreeUK",
    "tfa": false
  },
  "https://www.tiaa.org": {
    "name": "TIAA-CREF",
    "tfa": true,
    "sms": true,
    "phone": true
  },
  "https://www.tiaabank.com": {
    "name": "everbank.com",
    "tfa": true,
    "phone": true,
    "sms": true
  },
  "http://www.tibia.com": {
    "name": "Tibia",
    "tfa": true,
    "software": true,
    "doc": "http://www.tibia.com/support/?subtopic=faq&question=authenticator"
  },
  "https://www.tilaa.com": {
    "name": "Tilaa",
    "tfa": true,
    "software": true,
    "hardware": true,
    "exceptions": {
      "text": "SMS-capable phone required."
    },
    "doc": "http://blog.tilaa.com/post/128110588046/two-factor-authentication-and-session-management"
  },
  "https://www.tim.it": {
    "name": "TIM",
    "twitter": "tim_official",
    "facebook": "TimOfficialPage",
    "tfa": false,
    "lang": "it"
  },
  "https://www.time4vps.eu": {
    "name": "Time4VPS",
    "tfa": true,
    "software": true,
    "doc": "https://billing.time4vps.eu/knowledgebase/article/100/2-factor-authentication/"
  },
  "https://www.tinfoilsecurity.com": {
    "name": "Tinfoil Security",
    "tfa": true,
    "software": true,
    "doc": "http://support.tinfoilsecurity.com/customer/portal/articles/1559364-do-you-support-two-factor-authentication-how-do-i-set-it-up-"
  },
  "https://www.tivo.com": {
    "name": "TiVo",
    "twitter": "TiVo",
    "facebook": "TiVo",
    "tfa": false
  },
  "https://www.toodledo.com": {
    "name": "Toodledo",
    "tfa": true,
    "software": true,
    "doc": "https://www.toodledo.com/info/help.php#168"
  },
  "https://www.towerfcu.org": {
    "name": "Tower Federal Credit Union",
    "tfa": true,
    "sms": true,
    "phone": true,
    "doc": "https://server.iad.liveperson.net/hc/s-81758502/cmd/kbresource/kb-8660536393490959114/front_page!PAGETYPE?category=5352"
  },
  "https://www.trademe.co.nz": {
    "name": "Trade Me",
    "twitter": "trademe",
    "facebook": "TradeMe",
    "tfa": false
  },
  "https://www.trainline.eu": {
    "name": "Trainline",
    "twitter": "thetrainline",
    "facebook": "trainline.eu",
    "tfa": false
  },
  "https://www.transip.nl": {
    "name": "TransIP",
    "tfa": true,
    "sms": true,
    "software": true,
    "hardware": true,
    "doc": "https://www.transip.nl/vragen/574-hoe-stel-two-factor-authentication/"
  },
  "https://www.treasurydirect.gov": {
    "name": "Treasury Direct",
    "tfa": true,
    "email": true
  },
  "https://www.triodos.de": {
    "name": "Triodos Bank Deutschland",
    "twitter": "triodosde",
    "facebook": "triodos.de",
    "tfa": false,
    "lang": "de"
  },
  "https://www.trionworlds.com": {
    "name": "Trion Worlds",
    "tfa": true,
    "email": true,
    "software": true,
    "doc": "https://support.trionworlds.com/hc/en-us/articles/204183357-Adding-a-Mobile-Authenticator"
  },
  "https://www.truekey.com": {
    "name": "True Key",
    "tfa": true,
    "sms": true,
    "email": true,
    "software": true,
    "hardware": true,
    "doc": "https://help.truekey.com/hc/en-us/articles/218580447-How-can-I-add-additional-factors-"
  },
  "https://www.tsb.co.uk": {
    "name": "TSB Bank",
    "twitter": "TSB",
    "facebook": "TSBbankUK",
    "tfa": false
  },
  "https://www.tumblr.com": {
    "name": "Tumblr",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://www.tumblr.com/docs/en/two_factor_auth"
  },
  "https://www.tunnelbear.com": {
    "name": "TunnelBear",
    "tfa": false,
    "twitter": "theTunnelBear",
    "facebook": "tunnelbear"
  },
  "https://www.twilio.com": {
    "name": "Twilio",
    "tfa": true,
    "sms": true,
    "doc": "https://www.twilio.com/help/faq/twilio-basics/what-happens-when-i-enable-two-factor-authentication"
  },
  "https://www.twitch.tv": {
    "name": "Twitch",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "http://blog.twitch.tv/2015/11/two-factor-authentication-now-available-on-your-twitch-account/",
    "exceptions": {
      "text": "To activate two factor authentication, you must provide a mobile phone number."
    }
  },
  "https://www.uber.com": {
    "name": "Uber",
    "twitter": "uber_support",
    "facebook": "uber",
    "tfa": false
  },
  "https://www.ubibanca.com": {
    "name": "UBI Banca",
    "tfa": false,
    "facebook": "UBIBanca",
    "lang": "it"
  },
  "https://www.ubnt.com": {
    "name": "Ubiquiti Networks",
    "tfa": true,
    "software": true,
    "doc": "https://help.ubnt.com/hc/en-us/articles/115012986607-How-to-Enable-Two-Factor-Authentication"
  },
  "https://www.ud-reselling.com": {
    "name": "united-domains Reselling",
    "tfa": true,
    "software": true,
    "doc": "https://www.ud-reselling.com/en/security/"
  },
  "https://www.udacity.com": {
    "name": "Udacity",
    "twitter": "udacity",
    "facebook": "Udacity",
    "tfa": false
  },
  "https://www.udemy.com": {
    "name": "Udemy",
    "twitter": "udemy",
    "facebook": "udemy",
    "tfa": false
  },
  "https://www.uidaho.edu": {
    "name": "University of Idaho",
    "tfa": true,
    "sms": true,
    "phone": true,
    "hardware": true,
    "software": true,
    "doc": "https://support.uidaho.edu/TDClient/KB/ArticleDet?ID=109"
  },
  "https://www.uk2.net": {
    "name": "UK2",
    "twitter": "UK2",
    "facebook": "UK2.net",
    "tfa": false
  },
  "https://www.ukfast.co.uk": {
    "name": "UKFast",
    "tfa": true,
    "sms": true,
    "software": true,
    "hardware": true
  },
  "https://www.ukraine.com.ua": {
    "name": "Ukraine",
    "tfa": true,
    "sms": true,
    "phone": true,
    "software": true,
    "hardware": true,
    "doc": "https://www.ukraine.com.ua/faq/rekomendatsii-po-zashchite-ot-vzloma-uchetnoj-zapisi.html"
  },
  "https://www.ulule.com": {
    "name": "Ulule",
    "twitter": "ulule",
    "facebook": "ululeEN",
    "tfa": false
  },
  "https://www.umich.edu": {
    "name": "University of Michigan",
    "tfa": true,
    "sms": true,
    "phone": true,
    "hardware": true,
    "software": true,
    "doc": "http://its.umich.edu/accounts-access/uniqnames-passwords/two-factor-authentication"
  },
  "https://www.umpquabank.com": {
    "name": "Umpqua Bank",
    "tfa": true,
    "sms": true,
    "phone": true,
    "doc": "https://www.umpquabank.com/personal-banking/online-banking-and-billpay/security-faqs/"
  },
  "https://www.unifyfcu.com": {
    "name": "Unify Financial Credit Union",
    "tfa": true,
    "email": true,
    "sms": true,
    "phone": true,
    "doc": "https://www.unifyfcu.com/multi-factor-authentication-keep-bad-guys-out"
  },
  "https://www.unionbank.com": {
    "name": "Union Bank",
    "twitter": "UnionBank",
    "facebook": "UnionBank",
    "tfa": false
  },
  "https://www.united-domains.de": {
    "name": "united-domains.de",
    "tfa": true,
    "software": true,
    "doc": "https://help.united-domains.de/faq-article/wie-aktiviere-ich-die-zweistufige-verifizierung-und-mache-mein-portfolio-login-sicherer",
    "exceptions": {
      "text": "A phone number is required to enable two-factor authentication."
    }
  },
  "https://www.united.com": {
    "name": "United",
    "twitter": "united",
    "facebook": "United",
    "tfa": false
  },
  "https://www.uniteddomains.com": {
    "name": "United Domains USA",
    "tfa": true,
    "software": true,
    "doc": "https://help.uniteddomains.com/hc/en-us/articles/115001458813-How-to-Enable-Disable-Two-Factor-Authentication"
  },
  "https://www.upcloud.com": {
    "name": "UpCloud",
    "tfa": true,
    "software": true,
    "exceptions": {
      "text": "SMS is required for password recovery."
    },
    "doc": "https://www.upcloud.com/support/two-factor-authentication/"
  },
  "https://www.upwork.com": {
    "name": "Upwork",
    "tfa": false,
    "twitter": "UpworkHelp",
    "facebook": "upwork"
  },
  "https://www.usaa.com": {
    "name": "USAA",
    "tfa": true,
    "sms": true,
    "hardware": true,
    "email": true,
    "software": true,
    "doc": "https://www.usaa.com/inet/pages/security_token_logon_options"
  },
  "https://www.usbank.com": {
    "name": "US Bank",
    "twitter": "usbank",
    "facebook": "usbank",
    "tfa": false
  },
  "https://www.uwcu.org": {
    "name": "UW Credit Union",
    "tfa": true,
    "sms": true,
    "software": true,
    "phone": true,
    "doc": "https://www.uwcu.org/OnlineBanking/OnlineSecurity/VerifyU.aspx"
  },
  "https://www.valic.com": {
    "name": "Valic",
    "twitter": "VALIC_retire",
    "facebook": "valic",
    "tfa": false
  },
  "https://www.vanguard.com": {
    "name": "Vanguard",
    "tfa": true,
    "sms": true,
    "phone": true,
    "hardware": true,
    "doc": "https://investornews.vanguard/sign-up-for-these-3-security-features/"
  },
  "https://www.vantiv.com": {
    "name": "Vantiv",
    "twitter": "Vantiv",
    "facebook": "Vantiv",
    "tfa": false
  },
  "https://www.vcu.edu": {
    "name": "Virginia Commonwealth University",
    "tfa": true,
    "sms": true,
    "phone": true,
    "software": true,
    "hardware": true,
    "doc": "https://www.ts.vcu.edu/askit/essential-computing/information-security/2factor/"
  },
  "https://www.verio.com": {
    "name": "Verio",
    "twitter": "Verio",
    "tfa": false
  },
  "https://www.verizon.com": {
    "name": "Verizon",
    "twitter": "VerizonSupport",
    "facebook": "verizon",
    "tfa": false
  },
  "https://www.verizonwireless.com": {
    "name": "Verizon Wireless",
    "twitter": "VZWSupport",
    "tfa": false
  },
  "https://www.versio.nl": {
    "name": "Versio",
    "tfa": true,
    "software": true,
    "doc": "https://www.versio.nl/nieuws/twofactor-authenticatie-nu-beschikbaar-voor-uw-klantenaccount-205"
  },
  "http://www.viadeo.com": {
    "name": "Viadeo",
    "tfa": false,
    "twitter": "Viadeo"
  },
  "https://www.viber.com": {
    "name": "Viber",
    "tfa": false,
    "twitter": "ViberHelp",
    "facebook": "viber",
    "email_address": "support@viber.com"
  },
  "https://www.virgin.com": {
    "name": "Virgin Mobile",
    "twitter": "Virgin",
    "facebook": "virgin",
    "tfa": false
  },
  "https://www.virginmedia.com": {
    "name": "Virgin Media (UK)",
    "twitter": "virginmedia",
    "facebook": "virginmedia",
    "tfa": false
  },
  "https://www.virginmedia.ie": {
    "name": "Virgin Media (IE)",
    "twitter": "VirginMediaIE",
    "facebook": "VirginMediaIreland",
    "tfa": false
  },
  "https://www.vitality.co.uk": {
    "name": "Vitality",
    "twitter": "Vitality_UK",
    "facebook": "VitalityUK",
    "tfa": false
  },
  "https://www.vodafone.co.uk": {
    "name": "Vodafone (UK)",
    "tfa": true,
    "sms": true
  },
  "https://www.vodafone.ie": {
    "name": "Vodafone (IE)",
    "twitter": "VodafoneIreland",
    "facebook": "vodafoneireland",
    "tfa": false
  },
  "https://www.vodafone.it": {
    "name": "Vodafone (IT)",
    "twitter": "VodafoneIT",
    "facebook": "vodafoneit",
    "tfa": false
  },
  "https://www.vpsserver.com": {
    "name": "VPS Server",
    "tfa": true,
    "software": true,
    "doc": "https://github.com/2factorauth/twofactorauth/pull/2311#issuecomment-273424695"
  },
  "https://www.vultr.com": {
    "name": "Vultr",
    "tfa": true,
    "software": true,
    "hardware": true,
    "doc": "https://www.vultr.com/docs/using-two-factor-authentication-to-login-to-vultr-control-panel"
  },
  "https://www.wageworks.com": {
    "name": "WageWorks",
    "tfa": true,
    "sms": true,
    "email": true,
    "exceptions": {
      "text": "Employer/plan sponsor may opt to not offer 2FA."
    }
  },
  "https://www.walgreens.com": {
    "name": "Walgreens",
    "twitter": "walgreens",
    "tfa": false
  },
  "https://www.walmart.com": {
    "name": "Walmart",
    "twitter": "walmartlabs",
    "tfa": false
  },
  "https://www.warbyparker.com": {
    "name": "Warby Parker",
    "twitter": "WarbyParkerHelp",
    "tfa": false
  },
  "https://www.watchmanmonitoring.com": {
    "name": "Watchman Monitoring",
    "tfa": true,
    "hardware": true,
    "sms": true,
    "software": true,
    "doc": "https://www.watchmanmonitoring.com/two-factor-authentication",
    "exceptions": {
      "text": "Two factor authentication unavailable for 'End User' access, which is read-only."
    }
  },
  "https://www.waveapps.com": {
    "name": "WaveApps",
    "tfa": false,
    "twitter": "wavehq",
    "facebook": "waveHQ"
  },
  "https://www.wayfair.com": {
    "name": "Wayfair",
    "tfa": false,
    "twitter": "Wayfair",
    "facebook": "wayfair"
  },
  "https://www.wealthfront.com": {
    "name": "Wealthfront",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://support.wealthfront.com/hc/en-us/articles/211004563-How-do-I-enable-two-step-authentication-for-my-account-"
  },
  "https://www.wealthsimple.com": {
    "name": "Wealthsimple",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://help.wealthsimple.com/hc/en-ca/articles/360005175373-Does-Wealthsimple-offer-Two-Step-Verification-"
  },
  "https://www.webfaction.com": {
    "name": "WebFaction",
    "tfa": true,
    "software": true,
    "doc": "https://docs.webfaction.com/user-guide/control_panel.html#two-step-login"
  },
  "https://www.webmd.com": {
    "name": "WebMD",
    "twitter": "WebMD",
    "facebook": "WebMD",
    "tfa": false
  },
  "https://www.webroot.com": {
    "name": "Webroot",
    "twitter": "Webroot",
    "facebook": "Webroot",
    "tfa": false
  },
  "https://www.weebly.com": {
    "name": "Weebly",
    "tfa": false,
    "twitter": "weebly",
    "facebook": "weebly"
  },
  "http://www.weibo.com": {
    "name": "Weibo",
    "tfa": false
  },
  "https://www.wellsfargo.com": {
    "name": "Wells Fargo",
    "tfa": true,
    "sms": true,
    "phone": true,
    "hardware": true,
    "doc": "https://www.wellsfargo.com/privacy-security/advanced-access"
  },
  "https://www.wescom.org": {
    "name": "Wescom Credit Union",
    "twitter": "Liz_Wescom",
    "facebook": "WescomCreditUnion",
    "tfa": false
  },
  "https://www.westjet.com": {
    "name": "WestJet",
    "twitter": "WestJet",
    "facebook": "westjet",
    "tfa": false
  },
  "https://www.whatsapp.com": {
    "name": "WhatsApp",
    "tfa": true,
    "sms": true,
    "phone": true,
    "doc": "https://www.whatsapp.com/faq/en/general/26000021"
  },
  "https://www.widiba.it": {
    "name": "Widiba",
    "tfa": false,
    "twitter": "widiba_tw",
    "facebook": "widiba.it",
    "lang": "it"
  },
  "http://www.wikia.com": {
    "name": "Wikia",
    "twitter": "wikia",
    "tfa": false
  },
  "https://www.wikipedia.org": {
    "name": "Wikipedia",
    "tfa": true,
    "software": true,
    "doc": "https://meta.wikimedia.org/wiki/Help:Two-factor_authentication",
    "exceptions": {
      "text": "Currently limited to administrators (and users with admin-like permissions like interface editors), bureaucrats, checkusers, oversighters, stewards, edit filter managers and the OATH-testers global group."
    }
  },
  "https://www.wildstar-online.com": {
    "name": "WildStar",
    "tfa": true,
    "software": true,
    "doc": "https://support.wildstar-online.com/hc/en-us/articles/203982369-Two-Step-Verification-FAQ"
  },
  "https://www.wisebanyan.com": {
    "name": "WiseBanyan",
    "twitter": "WiseBanyan",
    "tfa": false
  },
  "https://www.woltlab.com": {
    "name": "WoltLab",
    "twitter": "woltlab",
    "facebook": "WoltLab",
    "email_address": "woltlab@woltlab.com",
    "tfa": false
  },
  "https://www.wscu.com": {
    "name": "Westminster Savings Credit Union (WSCU)",
    "twitter": "wscu",
    "facebook": "westminstersavings",
    "tfa": false
  },
  "https://www.wunderlist.com": {
    "name": "Wunderlist",
    "twitter": "Wunderlist",
    "tfa": false
  },
  "https://www.wykop.pl": {
    "name": "Wykop",
    "tfa": true,
    "software": true
  },
  "https://www.xbox.com": {
    "name": "Xbox Live",
    "tfa": true,
    "sms": true,
    "email": true,
    "software": true,
    "doc": "https://support.microsoft.com/en-us/help/12408/microsoft-account-about-two-step-verification"
  },
  "https://www.xero.com": {
    "name": "Xero",
    "tfa": true,
    "software": true,
    "doc": "https://help.xero.com/nz/MyXero_Two-Step_About"
  },
  "https://www.xfinity.com": {
    "name": "Comcast",
    "tfa": true,
    "sms": true,
    "email": true,
    "exceptions": {
      "text": "SMS-capable phone and a non-Comcast.net email required for 2FA."
    },
    "doc": "https://www.xfinity.com/support/account/enroll-2-step-verification/"
  },
  "https://www.xing.com": {
    "name": "XING",
    "tfa": false,
    "twitter": "XING_com"
  },
  "https://www.yammer.com": {
    "name": "Yammer",
    "twitter": "yammer",
    "facebook": "Yammer",
    "tfa": false
  },
  "https://www.youneedabudget.com": {
    "name": "You Need A Budget (YNAB)",
    "twitter": "ynab",
    "facebook": "iYNAB",
    "tfa": false
  },
  "https://www.youtube.com": {
    "name": "YouTube",
    "tfa": true,
    "sms": true,
    "software": true,
    "phone": true,
    "hardware": true,
    "doc": "https://www.google.com/intl/en-US/landing/2step/features.html"
  },
  "https://www.yoyogames.com": {
    "name": "YoYo Games",
    "tfa": true,
    "email": true,
    "software": true,
    "doc": "http://help.yoyogames.com/hc/en-us/articles/216757288-Creating-a-YoYo-Account"
  },
  "https://www.zaba.hr": {
    "name": "Zagrebačka banka",
    "tfa": true,
    "hardware": true,
    "software": true,
    "doc": "https://www.zaba.hr/home/token#pan3"
  },
  "https://www.zagbank.ca": {
    "name": "Zag Bank",
    "twitter": "zagbank",
    "facebook": "zagbank",
    "tfa": false
  },
  "https://www.zalando.co.uk": {
    "name": "Zalando (UK)",
    "tfa": false,
    "twitter": "zalando_uk",
    "facebook": "Zalando.co.uk",
    "email_address": "service@zalando.co.uk"
  },
  "https://www.zappos.com": {
    "name": "Zappos",
    "twitter": "Zappos",
    "tfa": false
  },
  "https://www.zazzle.com": {
    "name": "Zazzle",
    "tfa": false,
    "twitter": "zazzle",
    "facebook": "zazzle"
  },
  "https://www.zendesk.com": {
    "name": "Zendesk",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://support.zendesk.com/hc/en-us/articles/203824246"
  },
  "https://www.zetta.net": {
    "name": "Zetta.net",
    "tfa": true,
    "software": true,
    "doc": "https://www.zetta.net/about/blog/how-set-zetta-two-factor-authentication/"
  },
  "https://www.zimbra.com": {
    "name": "Zimbra",
    "tfa": true,
    "software": true,
    "exceptions": {
      "text": "Available in Zimbra Collaboration 8.7 and above, Network Edition only"
    },
    "doc": "https://blog.zimbra.com/2016/02/zimbra-collaboration-8-7-two-factor-authentication-2fa-technical-preview/"
  },
  "https://www.zkb.ch": {
    "name": "Zurich Cantonal Bank (ZKB)",
    "tfa": true,
    "sms": true,
    "email": true,
    "phone": true,
    "software": true,
    "hardware": true,
    "doc": "https://www.zkb.ch/de/pr/pk/efinance/ebanking/login-verfahren.html"
  },
  "https://www.zocdoc.com": {
    "name": "ZocDoc",
    "twitter": "ZocDoc",
    "facebook": "ZocDoc",
    "tfa": false
  },
  "https://www.zoho.com": {
    "name": "Zoho Mail",
    "tfa": true,
    "sms": true,
    "software": true,
    "doc": "https://adminconsole.wiki.zoho.com/mail/Two-Factor-Authentication.html"
  },
  "https://www.zoolz.com": {
    "name": "Zoolz",
    "tfa": true,
    "software": true,
    "exceptions": {
      "text": "Only available for business accounts."
    },
    "doc": "http://wiki.zoolz.com/how-do-i-enable-two-factor-authentication-on-my-zoolz-intelligent-account/"
  },
  "https://www.zooplus.com": {
    "name": "Zooplus",
    "tfa": false,
    "twitter": "zooplusDE",
    "facebook": "zooplusde"
  },
  "https://www1.firstdirect.com": {
    "name": "First Direct",
    "tfa": true,
    "hardware": true,
    "software": true,
    "doc": "https://www1.firstdirect.com/1/2/securekey/"
  },
  "https://www1.toutapp.com": {
    "name": "ToutApp",
    "twitter": "toutapp",
    "facebook": "toutapp",
    "tfa": false
  },
  "https://xapo.com": {
    "name": "Xapo",
    "tfa": true,
    "sms": true,
    "phone": true,
    "software": true,
    "doc": "https://support.xapo.com/en/my-account/second-factor-authentication-2fa/"
  },
  "https://yclas.com": {
    "name": "Yclas",
    "tfa": true,
    "software": true,
    "doc": "https://docs.yclas.com/2-step-authentication/"
  },
  "https://zapier.com": {
    "name": "Zapier",
    "tfa": true,
    "software": true,
    "doc": "https://zapier.com/help/two-factor-authentication/"
  },
  "https://zocle.com": {
    "name": "Zocle",
    "tfa": true,
    "sms": true,
    "doc": "https://zocle.com/knowledgebase/enabling-two-step-verification/"
  }
}