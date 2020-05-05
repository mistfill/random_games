let games_baza = [
{g_name:"Grand Theft Auto V" , g_url: "https://steampay.com/game/grand-theft-auto-v" , g_img: "https://steampay.com/screenshots/original/grand-theft-auto-v_1.jpg" , g_text:"Лос-Сантос – некогда великолепный городок, попасть в который мечтали миллионы. Сегодня он стал просто пристанищем вышедших в тираж звезд. Здесь мало интересных событий и планомерно текущая жизнь." } ,
{g_name:"PLAYERUNKNOWN'S BATTLEGROUNDS" , g_url: "https://steampay.com/game/playerunknowns-battlegrounds" , g_img: "https://steampay.com/screenshots/original/playerunknowns-battlegrounds_1.jpg" , g_text:"Убить и только убить! По-другому в этой игре и быть не может, ведь это самая что ни на есть настоящая выживалка, со всеми соответствующими жанру особенностями прохождения. Геймерам не раз придется стоять перед неприятным выбором и сопротивляться голосу совести, чтобы остаться в живых. Но тут уж, как говорится, либо честь, либо победа!" } ,
{g_name:"Dark Souls III. Deluxe Edition" , g_url: "https://steampay.com/game/dark-souls-3-deluxe-edition" , g_img: "https://steampay.com/screenshots/original/dark-souls-3-the-fire-fades-edition_1.jpg" , g_text:"DARK SOULS™ III – Deluxe Edition содержит игру и все дополнения из сезонного пропуска. Вас ждёт самое полное погружение в мир Dark Souls c дополнительными картами, боссами, врагами, новым оружием и бронёй. Соберитесь с духом и погрузитесь во тьму!" } ,
{g_name:"Devil May Cry 5" , g_url: "https://steampay.com/game/devil-may-cry-5" , g_img: "https://steampay.com/screenshots/original/devil-may-cry-5_1.jpg" , g_text:"Зло никогда не оставит мир в покое. Оно методично продолжает искать способы уничтожить человечество, и вот теперь исчадия ада решили изменить тактику ведения извечной войны." } ,
{g_name:"Dark Souls: Remastered" , g_url: "https://steampay.com/game/dark-souls" , g_img: "https://steampay.com/screenshots/original/dark-souls_1.jpg" , g_text:"Шедевр, покоривший игровой мир несколько лет назад, реинкарнировался. Он вернулся на мониторы в новом качестве и в компании с дополнением Artorias of the Abyss. Избранный мертвец уже готов отправиться в легендарный Лордран, где его ждут великие дела." } ,
{g_name:"Mount & Blade II: Bannerlord" , g_url: "https://steampay.com/game/mount-and-blade-2-bannerlord" , g_img: "https://steampay.com/screenshots/original/mount-and-blade-2-bannerlord_1.jpg" , g_text:"Огромный мир этой великолепной ролевки стал песочницей для глобальнейших сражений средневековых армий. Кальрадийская Империя близка к краху, но у вас есть отличный шанс купить Mount & Blade II: Bannerlord на steampay.com и взять ее территории под свой контроль, раз и навсегда покончив с распрями." } ,
{g_name:"Human: Fall Flat" , g_url: "https://steampay.com/game/human-fall-flat" , g_img: "https://steampay.com/screenshots/original/human-fall-flat_1.jpg" , g_text:"Увлекательнейшая игра, которая позволит вам весело провести время в сюрреалистичном мире, полном загадок и веселых моментов. Вашего протагониста зовут Боб, но его вы в игре не увидите, потому что он спит – а все происходящее ему просто снится! Загвоздка состоит в том, что выбраться из сна очень непросто. Боба в его сне олицетворяет забавный человечек, строитель по профессии, который и будет с вашей помощью решать головоломки." } ,
{g_name:"Red Dead Redemption 2" , g_url: "https://steampay.com/game/red-dead-redemption-2" , g_img: "https://steampay.com/screenshots/original/red-dead-redemption-2_1571913951_1.jpg" , g_text:"Red Dead Redemption 2, грандиозная сага от Rockstar Games и самая высокооцененная игра на текущем поколении консолей, выходит на PC. В версии для PC представлены новые материалы для сюжетного режима, визуальные усовершенствования и другие нововведения." } ,
{g_name:"METAL GEAR SOLID V: THE PHANTOM PAIN" , g_url: "https://steampay.com/game/metal-gear-solid-v-the-phantom-pain" , g_img: "https://steampay.com/screenshots/original/metal-gear-solid-v-the-phantom-pain_1.jpg" , g_text:"Пролежав в коме практически десять лет, Снейк наконец-то приходит в себя. Это было сделано очень вовремя, потому что происходящее вокруг просто требует его участия. Новая цепочка событий станет логическим продолжением произошедшего в холодную войну 80-х. Именно поэтому герой так одержим идеей отомстить теневой группировке, известной под аббревиатурой XOF." } ,
{g_name:"The Elder Scrolls V: Skyrim Special Edition" , g_url: "https://steampay.com/game/the-elder-scrolls-v-skyrim-special-edition" , g_img: "https://steampay.com/screenshots/original/the-elder-scrolls-v-skyrim-special-edition_1.jpg" , g_text:"The Elder Scrolls V: Skyrim Special Edition — это улучшенное и расширенное переиздание оригинальной The Elder Scrolls V: Skyrim, в котором были добавлены новые враги, снаряжение, локации, персонажи, а также включены все DLC." } ,
{g_name:"Warhammer: Vermintide 2" , g_url: "https://steampay.com/game/warhammer-vermintide-2" , g_img: "https://steampay.com/screenshots/original/warhammer-vermintide-2_1.jpg" , g_text:"Вселенная Warhammer снова в опасности. В окрестностях появилась армия Хаоса, готовая к порабощению всех и вся. Противостоять полчищам злобных тварей вызвалась пятерка храбрецов." } ,
{g_name:"DARK SOULS 3" , g_url: "https://steampay.com/game/dark-souls-3" , g_img: "https://steampay.com/screenshots/original/dark-souls-3_1.jpg" , g_text:"Этот экшн и ролевой мультиплатформер стал четвертым пополнением игровой серии SOULS, которая буквально влюбила в себя геймеров своей хардкордной сложностью. В новой версии упор игрового процесса сделан на ролевых элементах. Теперь на стиль боя и навыки персонажа будет влиять исключительно направление его развития. Что касается игрового задания, оно осталось прежним. Тем, кто решит купить Dark Souls 3 в магазине steampay.com, придется вооружиться холодным оружием, представленным широким арсеналом, и отправиться вырезать полчища грозных демонов. Игра невероятно красива, но при этом беспощадна в своей жестокости." } ,
{g_name:"DARK SOULS II: Scholar of the First Sin" , g_url: "https://steampay.com/game/dark-souls-2" , g_img: "https://steampay.com/screenshots/original/dark-souls-2_1.jpg" , g_text:"Считаете себя гуру в прохождении ролевых экшенов? Тогда попробуйте купить Dark Souls 2 на steampay.com! Эта игра беспрецедентной сложности чрезвычайно требовательна к севшему за нее. Опасности здесь встречаются на каждом шагу, и это не метафора." } ,
{g_name:"Fallout 4" , g_url: "https://steampay.com/game/fallout-4" , g_img: "https://steampay.com/screenshots/original/fallout-4_1.jpg" , g_text:"Создатели серии Fallout приглашают вас попробовать силы в открытом мире грандиозной четвертой игровой части. Попасть в адское будущее несложно. Все, что вам для этого нужно будет сделать – это купить Fallout 4, и постапокалиптическая Земля раскроет для вас свои объятия!" } ,
{g_name:"MudRunner" , g_url: "https://steampay.com/game/mudrunner" , g_img: "https://steampay.com/screenshots/original/mudrunner_1.jpg" , g_text:"Из пункта А в пункт В выехал автомобиль… А вот поспел ли он в срок доставить груз и доехал ли он вообще – это вопрос. Спешите купить MudRunner на steampay.com, чтобы узнать на него ответ!" } ,
{g_name:"Fallout: New Vegas Ultimate Edition" , g_url: "https://steampay.com/game/fallout-new-vegas-ultimate-edition" , g_img: "https://steampay.com/screenshots/original/fallout-new-vegas-ultimate-edition_1.jpg" , g_text:"Полное издание игры Fallout: New Vegas — культовой постапокалиптической RPG, высоко оцененной российскими и зарубежными критиками и тепло принятой пользователями." } ,
{g_name:"Dead by Daylight" , g_url: "https://steampay.com/game/dead-by-daylight" , g_img: "https://steampay.com/screenshots/original/dead-by-daylight_1.jpg" , g_text:"Найти среди ММО настоящий ужастик сегодня нелегко, но этот хоррор стал новой ступенью в развитии направления. Он сломал стереотипы о том, что подобного рода игры хороши в одиночном прохождении и доказал, что сетевой экшен может быть не менее пугающим." } ,
{g_name:"Far Cry 5" , g_url: "https://steampay.com/game/far-cry-5" , g_img: "https://steampay.com/screenshots/original/far-cry-5_1.jpg" , g_text:"Ubisoft порадовала новой частью популярных шутеров Far Cry. Сюжет пятой истории отправит геймеров в Монтану, а точнее, в вымышленный округ этого североамериканского штата. Здесь сектанты культа «Врата Эдема» устроили жителям настоящий ад на земле! Сохранившие остатки разума в Хоупе еще пытаются противостоять влиянию Джозефа Сида и его приспешников, поэтому объявлены изгоями и приговорены к уничтожению. Спасти их может только организованное сопротивление. Готовы взять на себя командную миссию и возглавить настоящее партизанское движение, а также лицом к лицу столкнуться со всеми сопутствующими «прелестями» такой войны? Спешите купить Far Cry 5 на steampay.com!" } ,
{g_name:"Tom Clancy's Rainbow Six Siege" , g_url: "https://steampay.com/game/tom-clancys-rainbow-six-siege" , g_img: "https://steampay.com/screenshots/original/tom-clancys-rainbow-six-siege_1.jpg" , g_text:"Терроризм – бич нашего времени, и противостоять ему в состоянии лишь элитные спецподразделения. Хотите стать представителем одного из них? У вас есть возможность купить Tom Clancy’s Rainbow Six: Siege на steampay.com и ввязаться в жесткое противостояние!" } ,
{g_name:"Prey" , g_url: "https://steampay.com/game/prey" , g_img: "https://steampay.com/screenshots/original/prey_1.jpg" , g_text:"2032 год. Человечество активно осваивает космос и ищет новые пути совершенствования расы. Вы в составе экспериментальной группы высланы на лунную орбиту и являетесь участником необычного проекта. Но, как обычно, что-то пошло не так и вместо того, чтобы крутиться перед учеными подопытным хомячком, вы вынуждены бороться за собственную жизнь. Сюжет захватывающий, однако на захваченную пришельцами станцию смогут попасть лишь те, кто готов купить Prey." } ,
{g_name:"DiRT Rally" , g_url: "https://steampay.com/game/dirt-rally" , g_img: "https://steampay.com/screenshots/original/dirt-rally_1.jpg" , g_text:"Готовы рвануть по бездорожью? Тогда не проходите мимо предложения купить DiRT Rally! Популярнейший гоночный проект позволит вам сполна насладиться скоростью и крутизной виражей. От вас понадобится адское терпение и отточенная до автоматизма реакция, чтобы пройти треки всех 36 этапов." } ,
{g_name:"Magicka" , g_url: "https://steampay.com/game/magicka" , g_img: "https://steampay.com/screenshots/original/magicka_1.jpg" , g_text:"В основу этой сатирической, полной невероятных приключений квестовой бродилки лег германо-скандинавский эпос. Вас ждет вымышленный мир Мидгара с его заснеженными, нафаршированными опасностями долинами, мрачными подземельями, непролазными лесами, непроходимыми горными перевалами и «радушным» населением." } ,
{g_name:"The Elder Scrolls V: Skyrim Legendary Edition" , g_url: "https://steampay.com/game/the-elder-scrolls-v-skyrim-legendary-edition" , g_img: "https://steampay.com/screenshots/original/the-elder-scrolls-v-skyrim-legendary-edition_1.jpg" , g_text:"Встречайте полное издание Skyrim, игры, удостоенной более 200 наград «Игра года» - The Elder Scrolls V: Skyrim Legendary Edition, включающее в себя оригинальную игру, официальные дополнения – Dawnguard, Hearthfire и Dragonborn – и дополнительные возможности, такие как боевая камера, конный бой, легендарный уровень сложности для самых опытных игроков и легендарные навыки, благодаря которым вы можете довести до совершенства все способности и неограниченно повышать уровень своего персонажа." } ,
{g_name:"S.T.A.L.K.E.R.: Shadow of Chernobyl" , g_url: "https://steampay.com/game/stalker-shadow-of-chernobyl" , g_img: "https://steampay.com/screenshots/original/stalker-shadow-of-chernobyl_1.jpg" , g_text:"2012-й год. Повторная техногенная катастрофа сделала Чернобыльскую зону местом, способным доставить большие проблемы не только отдельно взятой стране, а всему миру в целом. Какое зло породила опасная территория и можно ли ему противостоять?" } ,
{g_name:"Doom" , g_url: "https://steampay.com/game/doom" , g_img: "https://steampay.com/screenshots/original/doom_1.jpg" , g_text:"В этом стремительном шутере от первого лица вы вновь влезете в шкуру космического десантника и отправитесь в длинный путь по лабиринтам коридоров давно заброшенной базы, некогда развернутой землянами на Марсе. Миллионы геймеров ждут возможность купить Doom 2016 года, чтобы добраться до самого дна Ада и устроить там настоящую трепку демонам! Азарта добавляет тот факт, что теперь это можно проделывать не только самостоятельно, но и по Сети, организовывая масштабные кампании и сводя на поле брани людей и Силы Тьмы." } ,
{g_name:"Terraria" , g_url: "https://steampay.com/game/terraria" , g_img: "https://steampay.com/screenshots/original/terraria_1.jpg" , g_text:"Встретили предложение купить Terraria на steampay.com – поспешите воспользоваться им, и вы не пожалеете! О том, что перед вами нереально увлекательный проект, говорит уже тот факт, что в игре смешана куча жанров. Порой сложно понять, какое направление превалирует, настолько тесно они переплелись. Инди-платформер, щедро сдобренный элементами ролевки и приключениями, порой предстает в облике чистейшей песочницы." } ,
{g_name:"Monster Hunter World: Iceborne" , g_url: "https://steampay.com/game/monster-hunter-world-iceborne" , g_img: "https://steampay.com/screenshots/original/monster-hunter-world-iceborne_1.jpg" , g_text:"Долг зовет вас в неизведанные морозные земли, полные доселе невиданных чудовищ и всевозможных форм жизни. Воспользуйтесь особенностями этой суровой местности, чтобы преуспеть на охоте! Новая история начнется там, где закончился сюжет Monster Hunter: World..." } ,
{g_name:"Saints Row IV: Game of the Century Edition" , g_url: "https://steampay.com/game/saints-row-4" , g_img: "https://steampay.com/screenshots/original/saints-row-4_1.jpg" , g_text:"Свершилось! «Святые» у власти. Теперь Америка полностью им подконтрольна. И все отлично – ну, не считая того, что жизнь новому руководству немного отравляет мысль о скорых выборах. И вот тут внезапная интервенция инопланетян внесла свои коррективы. Незваные гости устроили настоящий ад, организовав виртуальные ловушки." } ,
{g_name:"Worms W.M.D" , g_url: "https://steampay.com/game/worms-wmd" , g_img: "https://steampay.com/screenshots/original/worms-wmd_1.jpg" , g_text:"Скользкие, сопливые, но такие любимые червячки снова готовы встать под командование тех, кто решит купить Worms W.M.D на steampay.com. Хотите показать миру, на что способны? Тогда соберите отряд слизняков, распределите роли, раздайте оружие и начинайте военные действия." } ,
{g_name:"S.T.A.L.K.E.R.: Call of Pripyat" , g_url: "https://steampay.com/game/stalker-call-of-pripyat" , g_img: "https://steampay.com/screenshots/original/stalker-call-of-pripyat_1.jpg" , g_text:"Чернобыльская АЭС даже после аварии продолжает оставаться лакомым кусочком, и взять ее под контроль – дело святое. Однако снаряженная военная операция по захвату территорий терпит полнейшее фиаско." } ,
{g_name:"Dishonored 2" , g_url: "https://steampay.com/game/dishonored-2" , g_img: "https://steampay.com/screenshots/original/dishonored-2_1.jpg" , g_text:"Готовы окунуться в мрачнейшую историю нового мистического стэлс-экшена серии Dishonored? Тогда предложение купить Dishonored 2 должно вас заинтересовать! В этой версии вас ждут сразу два героя и непредвиденный поворот событий. Персонажей наделили совершенно разными способностями, соответственно, и стиль прохождения будет зависеть от выбора протагониста." } ,
{g_name:"The Elder Scrolls V: Skyrim" , g_url: "https://steampay.com/game/the-elder-scrolls-v-skyrim" , g_img: "https://steampay.com/screenshots/original/the-elder-scrolls-v-skyrim_1.jpg" , g_text:"Это не игра, это пусть маленькая, но совершенно новая жизнь в мире, где можно позволить себе быть собой и делать все, что заблагорассудится. Стоит купить The Elder Scrolls V: Skyrim и вы сможете попробовать, как это здорово быть вором, убийцей или разбойником. А может вам понравится привычно спасать вселенную, и вы отправитесь защищать ее от мистической угрозы? Разработчикам удалось создать действительно убедительный сеттинг, да еще и наполнить его горами контента. В игре есть все, что может пожелать поклонник ролевых игр, и каждый игрок решает сам, как он будет читать эту сказку." } ,
{g_name:"S.T.A.L.K.E.R.: Clear Sky" , g_url: "https://steampay.com/game/stalker-clear-sky" , g_img: "https://steampay.com/screenshots/original/stalker-clear-sky_1.jpg" , g_text:"Выжить после Выброса? Каждый уважающий сталкер скажет вам, что это нереально! Но все же вы, наемник со странным именем Шрам, это сделали. Что дальше?" } ,
{g_name:"Bayonetta" , g_url: "https://steampay.com/game/bayonetta" , g_img: "https://steampay.com/screenshots/original/bayonetta_1.jpg" , g_text:"Хотите увидеть боевую ведьму в действии? Теперь для этого достаточно купить Bayonetta! Этот замечательный экшен-слешер теперь доступен и на ПК." } ,
{g_name:"Red Dead Redemption 2: Ultimate Edition" , g_url: "https://steampay.com/game/red-dead-redemption-2-ultimate-edition" , g_img: "https://steampay.com/screenshots/original/red-dead-redemption-2-ultimate-edition_1571915598_1.jpg" , g_text:"Red Dead Redemption 2, грандиозная сага от Rockstar Games и самая высокооцененная игра на текущем поколении консолей, выходит на PC. В версии для PC представлены новые материалы для сюжетного режима, визуальные усовершенствования и другие нововведения." } ,
{g_name:"Dishonored" , g_url: "https://steampay.com/game/dishonored" , g_img: "https://steampay.com/screenshots/original/dishonored_1.jpg" , g_text:"Он был отличным телохранителем, и ему доверили жизнь самой императрицы. Почему он не смог выполнить свою миссию до конца и не защитил Её Величество? Разобраться в произошедшем будет совсем непросто, ведь Корво сочли виновным в смерти Первой Леди, и бросили в тюрьму. Хотите помочь парню выбраться из передряги и отстоять свою честь? Тогда поторопитесь купить Dishonored на steampay.com." } ,
{g_name:"Tabletop Simulator" , g_url: "https://steampay.com/game/tabletop-simulator" , g_img: "https://steampay.com/screenshots/original/tabletop-simulator_1.jpg" , g_text:"Нравится проводить время за игральным столом в кругу друзей, но нет возможности в реальности собраться тесной компанией? Не упустите возможность купить Tabletop Simulator: такого разнообразия настольных игр песочницы еще не предлагали!" } ,
{g_name:"The Escapists 2" , g_url: "https://steampay.com/game/the-escapists-2" , g_img: "https://steampay.com/screenshots/original/the-escapists-2_1.jpg" , g_text:"Не по душе тюремная жизнь? Бегите! Но делайте это виртуозно, азартно, в общем, так, чтобы у охранников волосы встали дыбом от изощренности вашего плана. Сделать это в тюремной песочнице The Escapists 2 будет невероятно сложно, но ведь вас не остановят строжайший режим и обилие персонала? Ваш ум изворотлив, и мозг готов поработать на славу? Тогда вперед!" } ,
{g_name:"Euro Truck Simulator 2" , g_url: "https://steampay.com/game/euro-truck-simulator-2" , g_img: "https://steampay.com/screenshots/original/euro-truck-simulator-2_1.jpg" , g_text:"Мечтали попробовать себя в роли дальнобойщика? Теперь у вас есть отличный шанс купить Euro Truck Simulator 2 на steampay.com и сесть за руль лучших моделей грузовозов." } ,
{g_name:"GRID 2" , g_url: "https://steampay.com/game/grid-2" , g_img: "https://steampay.com/screenshots/original/grid-2_1.jpg" , g_text:"Скорость, слава, превосходство – все это и даже больше есть в симуляторе гонок GRID 2. Это красочная, сложная в прохождении и необыкновенно эмоциональная игра. Всех, кто решит купить GRID 2, ждет полное погружение в напряженный и атмосферный геймплей." } ,
{g_name:"RESIDENT EVIL 2" , g_url: "https://steampay.com/game/resident-evil-2" , g_img: "https://steampay.com/screenshots/original/resident-evil-2_1.jpg" , g_text:"Давненько не заглядывали в Раккун-сити? Не в курсе тамошних новостей? Тогда вам стоит купить Resident Evil 2 на steampay.com. Легендарная игра вернулась в новой графике, с удобным управлением, OTS-камерой, демонстрирующей вид из-за плеча героя и, конечно же, предлагает незабываемые приключения." } ,
{g_name:"Spintires" , g_url: "https://steampay.com/game/spintires" , g_img: "https://steampay.com/screenshots/original/spintires_1.jpg" , g_text:"Эх, дороги! А точнее, их отсутствие. И как добраться до цели по целине? Тут важно сесть в кабину «правильного» автомобиля, которым может стать и лесовоз, и юркий УАЗик." } ,
{g_name:"Prototype 2" , g_url: "https://steampay.com/game/prototype-2" , g_img: "https://steampay.com/screenshots/original/prototype-2_1.jpg" , g_text:"Некогда великолепный, с блистательной инфраструктурой город Нью-Йорк стал неузнаваем. Отныне это жуткая красная зона – Зеро. Где-то в ней скрывается дом сумасшедшего ученого, выпустившего на волю на редкость агрессивный вирус, вызывающий мутации. Войти в очаг поражения и спасти человечество от маразматика может лишь избранный." } ,
{g_name:"Stellaris: Federations" , g_url: "https://steampay.com/game/stellaris-federations" , g_img: "https://steampay.com/screenshots/original/stellaris-federations_1.jpg" , g_text:"Высшее искусство военачальника — покорить врага без единого сражения. С дополнением Stellaris: Federations вы сможете достичь абсолютной дипломатической власти над галактикой." } ,
{g_name:"Conan Exiles" , g_url: "https://steampay.com/game/conan-exiles" , g_img: "https://steampay.com/screenshots/original/conan-exiles_1.jpg" , g_text:"Более кровавой и жестокой игры на выживание геймерское сообщество еще не видело! Её сложно назвать RPG – это скорее survival, хотя тоже со своими фишками. Готовы в роли отверженного и обездоленного изгнанника скитаться по дикой пустоши, беспощадной к слабакам? Тогда вам стоит купить Conan Exiles в магазине steampay.com! Здесь предстоит не просто борьба за жизнь: сюжет отправляет покорять мир, на просторы которого вас выбросят абсолютно голого и беспомощного. Сумеет ли ваш герой заложить и развить основы своего величия? Хватит ли у вас духу приносить в жертву богам себе подобных?" } ,
{g_name:"Killing Floor 2" , g_url: "https://steampay.com/game/killing-floor-2" , g_img: "https://steampay.com/screenshots/original/killing-floor-2_1.jpg" , g_text:"Игроки, решившие скачать Killing Floor 2, должны быть готовы отправиться в путешествие по континентальной Европе. Ее территория оказалась заполненной клонами в результате неудачного эксперимента Horzine Biotech. действие разворачивается через месяц после окончания событий первой игры." } ,
];

let button_next_rgd = document.querySelector('.button_next_rgd');
let text_game_rgd = document.querySelector('.text_game_rgd');
let servise_box_img_rgd = document.querySelector('.servise_box_img_rgd');

let left_game_title_rgd = document.querySelector('.left_game_title_rgd');
let left_game_img_rgd = document.querySelector('.left_game_img_rgd');
let left_game_url_rgd = document.querySelector('.left_game_url_rgd');
let left_text_rgd = 'п';

let center_game_title_rgd = document.querySelector('.center_game_title_rgd');
let center_game_img_rgd = document.querySelector('.center_game_img_rgd');
let center_game_url_rgd = document.querySelector('.center_game_url_rgd');
let center_text_rgd = 'п';

let right_game_title_rgd = document.querySelector('.right_game_title_rgd');
let right_game_img_rgd = document.querySelector('.right_game_img_rgd');
let right_game_url_rgd = document.querySelector('.right_game_url_rgd');
let right_text_rgd = 'п';

function getRandomElement(arr_rgd) {
    let randIndex_rgd = Math.floor(Math.random() * arr_rgd.length);
    return arr_rgd[randIndex_rgd];
}


button_next_rgd.addEventListener('click', function() {
    let randomElement_rgd = getRandomElement(games_baza);

    left_game_title_rgd.textContent = randomElement_rgd.g_name;
    left_game_img_rgd.src = randomElement_rgd.g_img;
    left_img_rgd = randomElement_rgd.g_img;
    left_game_url_rgd.href = randomElement_rgd.g_url + '?agent=823594';
    left_text_rgd = randomElement_rgd.g_text;
})

button_next_rgd.addEventListener('click', function() {
    let randomElement_rgd = getRandomElement(games_baza);

    center_game_title_rgd.textContent = randomElement_rgd.g_name;
    center_game_img_rgd.src = randomElement_rgd.g_img;
    center_img_rgd = randomElement_rgd.g_img;
    center_game_url_rgd.href = randomElement_rgd.g_url + '?agent=823594';
    center_text_rgd = randomElement_rgd.g_text;

    text_game_rgd.textContent = randomElement_rgd.g_text;
    servise_box_img_rgd.src = randomElement_rgd.g_img;
})

button_next_rgd.addEventListener('click', function() {
    let randomElement_rgd = getRandomElement(games_baza);

    right_game_title_rgd.textContent = randomElement_rgd.g_name;
    right_game_img_rgd.src = randomElement_rgd.g_img;
    right_img_rgd = randomElement_rgd.g_img;
    right_game_url_rgd.href = randomElement_rgd.g_url + '?agent=823594';
    right_text_rgd = randomElement_rgd.g_text;
})


function MouseOnLeftGame() {
    document.getElementById('servise_box_img_rgd').src = left_img_rgd;
    document.getElementById('text_game_rgd').textContent = left_text_rgd;
}


function MouseOnRightGame() {
    document.getElementById('servise_box_img_rgd').src = right_img_rgd;
    document.getElementById('text_game_rgd').textContent = right_text_rgd;

}

function MouseOnCenterGame () {
    document.getElementById('servise_box_img_rgd').src = center_img_rgd;
    document.getElementById('text_game_rgd').textContent = center_text_rgd; 
}

let button_top_rg = document.querySelector('.button_top_rg');

let title_rg = document.querySelector('.title_rg');

let img_rg = document.querySelector('.img_rg');

let text_info_rg = document.querySelector('.text_info_rg');

let img_url_rg = document.querySelector('.img_url_rg');

button_top_rg.addEventListener('click', function() {
    let randomElement_rgd = getRandomElement(games_baza);

    title_rg.textContent = randomElement_rgd.g_name;

    img_rg.src = randomElement_rgd.g_img;

    text_info_rg.textContent = randomElement_rgd.g_text;

    img_url_rg.href = randomElement_rgd.g_url + '?agent=823594';

})
