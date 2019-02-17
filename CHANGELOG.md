# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Changed
- Removes jQuery as a dependency [[65]].
- Updates dependencies.

## [0.8.0] - 2018-09-24
### Added
- Update browser action menu to show a custom
  page if the user has indicated that they have
  already enabled 2FA.

### Changed
- Update confirmation page shown after a user
  initially indicates that they enabled 2FA
  to improve text and include illustration.
- Included data updates from twofactorauth.org.
- Updated and cleaned underlying data [[62]].

## [0.7.2]
### Fixed
- Eliminates duplicate notifications when visiting
  a site that support 2FA.

## [0.7.1]
### Fixed
- Small fixes and cleanup to html pages
- Fixes the capitalization on the generated file
  from supports2fa.html to supports2FA.html

## [0.7.0]
### Added
- Built out Home page to include nifty illustrations 
- Added favicon
- Allow user to indicate that they have already enabled 2FA
  on the current site so that they stop getting notifications
  on that site.
- Reduce notification frequency to at most 1/site/24 hours.

### Fixed
- Fixed aggressive hyphening and typographic orphans

## [0.6.0]
### Added
- Added button to the 2FA Notifier add-on in the Firefox store.
- On-boarding page designed and built
- Automatically opens `/onboarding.html` in a new tab after initial extension install.

### Fixed
- Fixed the link for the menu top level back arrow [[67]]
- Homepage centering
- Onboarding page logo link to homepage

## [0.5.0]
### Changed
- Cleaned data for Facebook so that notifications work as expected. 

### Added
- Added Google Analytics to the homepage of the website.
- Added data entry for www.google.com.

### Fixed
- Typos on the website homepage.

## [0.4.0]
### Changed
- Updated notification icon to have an 8px padding to look better on Windows 10 notifications

## Fixed
- Updated browser action popup to handle the case where a site supports
  2FA, but does not have any documentation.

## [0.3.2]
### Added
- Icons included in manifest to show up on the Chrome extension page

## [0.3.1]
### Changed
- Updated action bar icons to be have more clarity
- Updated notification icon to have more clarity

## [0.3.0]
### Changed
- Improved cleanliness of data
- Reworded button text from "Enable 2FA" to "Show 2FA Guide"

## [0.2.2]
### Added
- Website now uses Jekyll instead of relying on
  GitHub pages to render the single MD file.
  
### Changed
- Updated website to improve copy and link to the
  Chrome Web Store entry.
- Show the correct site name on the "No 2FA" page

## [0.2.1] - 2018-04-28
### Changed
- Fix version in the manifest file

## [0.2.0] - 2018-04-28
### Added
- Initial release of browser action popup window
- Browser action button icon changes depending on
  whether the domain in the current tab supports 2FA

### Changed
- Only show the notification for the current tab
- Only show the notification once for any given domain

## [0.1.0] - 2018-04-09
Initial release

[Unreleased]: https://github.com/conorgil/2fa-notifier/compare/v0.8.0...HEAD
[0.8.0]: https://github.com/conorgil/2fa-notifier/compare/v0.7.2...v0.8.0
[0.7.2]: https://github.com/conorgil/2fa-notifier/compare/v0.7.1...v0.7.2
[0.7.1]: https://github.com/conorgil/2fa-notifier/compare/v0.7.0...v0.7.1
[0.7.0]: https://github.com/conorgil/2fa-notifier/compare/v0.6.0...v0.7.0
[0.6.0]: https://github.com/conorgil/2fa-notifier/compare/v0.5.0...v0.6.0
[0.5.0]: https://github.com/conorgil/2fa-notifier/compare/v0.4.0...v0.5.0
[0.4.0]: https://github.com/conorgil/2fa-notifier/compare/v0.3.2...v0.4.0
[0.3.2]: https://github.com/conorgil/2fa-notifier/compare/v0.3.1...v0.3.2
[0.3.1]: https://github.com/conorgil/2fa-notifier/compare/v0.3.0...v0.3.1
[0.3.0]: https://github.com/conorgil/2fa-notifier/compare/v0.2.2...v0.3.0
[0.2.2]: https://github.com/conorgil/2fa-notifier/compare/v0.2.1...v0.2.2
[0.2.1]: https://github.com/conorgil/2fa-notifier/compare/v0.2.0...v0.2.1
[0.2.0]: https://github.com/conorgil/2fa-notifier/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/conorgil/2fa-notifier/releases/tag/v0.1.0

[62]: https://github.com/conorgil/2fa-notifier/issues/62
[65]: https://github.com/conorgil/2fa-notifier/issues/65
[67]: https://github.com/conorgil/2fa-notifier/issues/67