## Gymbruh - дневник тренировок

Приложение дневник тренировок, позволяет создавать программы, упражнения, видеть свой прогресс и отслеживать статистику\
google play - https://play.google.com/store/apps/details?id=com.gymbruh
\
[![gymbruh](https://i.yapx.ru/OVV0wm.jpg "google play")](https://i.yapx.ru/OVV0wm.jpg)
***

>tech stack:
React-Native, redux, TypeScript

[![gymbruh](https://i.yapx.ru/On5KLl.png "home screen")](https://i.yapx.ru/On5KLl.png)

[![gymbruh](https://i.yapx.ru/On5KWl.png "settings screen")](https://i.yapx.ru/On5KWl.png)

[![gymbruh](https://i.yapx.ru/On5KIl.png"create routine screen")](https://i.yapx.ru/On5KIl.png)

[![gymbruh](https://i.yapx.ru/On5KJl.png "workout screen")](https://i.yapx.ru/On5KJl.png)

[![gymbruh](https://i.yapx.ru/On5KMl.png "history screen")](https://i.yapx.ru/On5KMl.png)


[![gymbruh](https://i.yapx.ru/On5KOl.png "exercise detailed screen")](https://i.yapx.ru/On5KOl.png)

[![gymbruh](https://i.yapx.ru/On5KTl.png "routine detailed screen")](https://i.yapx.ru/On5KTl.png)


### TO DO :trollface:

- [x] exercise creation screen/state/logic ✅ (26.08.2021)
- [x] exerciseScreen render ✅ (26.08.2021)
- [x] detailed exerciseItem Screen ✅ (6.09.2021)
- [x] workout  creation screen/state/logic ✅ (7.09.2021)
- [x] delete routine ✅ (10.09.2021)
- [x] edit/delete exercise  ✅ (11.09.2021)
- [x] create some modal component  ✅(11.09.2021)
- [x] more details on RoutineDetailsScreen ✅(12.09.2021)
- [x] history screen/state/logic ✅ (10.09.2021)
- [x] workout sesh screen/state/logic ✅ (9.09.2021)
- [x] set async/persist  storage for all data ✅ (10.09.2021)
- [x] some history preview component ✅(12.09.2021)
- [ ] fix icons for IOS
- [x] create settings screen/store   ✅(15.09.2021)
- [x] localization with i18   ✅(18.09.2021)
- [x] dark/light theme  ✅(16.09.2021)
- [x] some chart for history component   ✅(18.09.2021)
- [x] fix Date.toLocale string locale  ✅(19.09.2021)
- [x] some validation for inputs  ✅(22.09.2021)
- [x] sounds for workout/set submit ✅(19.09.2021)
- [x] refactor settings screen(add some components, add sound off/on option) ✅(21.09.2021)
- [x] make an option to use workout without routine and add exercises manually;  ✅(24.09.2021)
- [x] prompt user before leaving workout screen; ✅(24.09.2021)

 ### 25.09.2021 🐄 release 1.0 🐄
___

- [x] init device's language for i18n on first launch ✅(15.10.2021)
- [x] back up user data to external storage ✅(14.10.2021)

 ### 17.10.2021 🐄 release 1.0.1 🐄
 ### 27.10.2021 🐄 release 1.0.2 🐄
___

:beetle: bugs :beetle: :
- ~~stack screen titles on app launch translated to language  set in i18n init config rather then language from redux~~
- ~~list items in chart pie should be sorted by amount~~
- ~~if exercise that was in routine was deleted and you go detailedRoutineScreen, app will crush~~
- ~~record weight won't update if weight is same but reps are more, need to add check on reps~~
- ~~createRoutineScreen is not scrollable~~