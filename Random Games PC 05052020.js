let games_baza = [
{g_name:"Grand Theft Auto V" , g_url: "https://steampay.com/game/grand-theft-auto-v" , g_img: "https://steamcdn-a.akamaihd.net/steam/apps/271590/ss_32aa18ab3175e3002217862dd5917646d298ab6b.1920x1080.jpg?t=1586539531" , g_text:"Лос-Сантос – некогда великолепный городок, попасть в который мечтали миллионы. Сегодня он стал просто пристанищем вышедших в тираж звезд. Здесь мало интересных событий и планомерно текущая жизнь." } ,
{g_name:"PLAYERUNKNOWN'S BATTLEGROUNDS" , g_url: "https://steampay.com/game/playerunknowns-battlegrounds" , g_img: "https://steamcdn-a.akamaihd.net/steam/apps/578080/ss_abadb3bfc951cd05150901ff65386e3129c6011a.1920x1080.jpg?t=1587582005" , g_text:"Убить и только убить! По-другому в этой игре и быть не может, ведь это самая что ни на есть настоящая выживалка, со всеми соответствующими жанру особенностями прохождения. Геймерам не раз придется стоять перед неприятным выбором и сопротивляться голосу совести, чтобы остаться в живых. Но тут уж, как говорится, либо честь, либо победа!" } ,
{g_name:"Devil May Cry 5" , g_url: "https://steampay.com/game/devil-may-cry-5" , g_img: "https://steamcdn-a.akamaihd.net/steam/apps/601150/ss_4410bada2565843dae693b03ac3a50256ff5dd66.1920x1080.jpg?t=1582605276" , g_text:"Зло никогда не оставит мир в покое. Оно методично продолжает искать способы уничтожить человечество, и вот теперь исчадия ада решили изменить тактику ведения извечной войны." } ,
{g_name:"Mount & Blade II: Bannerlord" , g_url: "https://steampay.com/game/mount-and-blade-2-bannerlord" , g_img: "https://steamcdn-a.akamaihd.net/steam/apps/261550/ss_5405bdd8c041e200facb76908526cca961d9182e.1920x1080.jpg?t=1586885335" , g_text:"Огромный мир этой великолепной ролевки стал песочницей для глобальнейших сражений средневековых армий. Кальрадийская Империя близка к краху, но у вас есть отличный шанс купить Mount & Blade II: Bannerlord на steampay.com и взять ее территории под свой контроль, раз и навсегда покончив с распрями." } ,
{g_name:"Dark Souls: Remastered" , g_url: "https://steampay.com/game/dark-souls" , g_img: "https://steamcdn-a.akamaihd.net/steam/apps/570940/ss_3a71463e4ccaf28c5c27f6cf8d32a3a125f45404.1920x1080.jpg?t=1580308688" , g_text:"Шедевр, покоривший игровой мир несколько лет назад, реинкарнировался. Он вернулся на мониторы в новом качестве и в компании с дополнением Artorias of the Abyss. Избранный мертвец уже готов отправиться в легендарный Лордран, где его ждут великие дела." } ,
{g_name:"Red Dead Redemption 2" , g_url: "https://steampay.com/game/red-dead-redemption-2" , g_img: "https://steamcdn-a.akamaihd.net/steam/apps/1174180/ss_66b553f4c209476d3e4ce25fa4714002cc914c4f.1920x1080.jpg?t=1583253547" , g_text:"Red Dead Redemption 2, грандиозная сага от Rockstar Games и самая высокооцененная игра на текущем поколении консолей, выходит на PC. В версии для PC представлены новые материалы для сюжетного режима, визуальные усовершенствования и другие нововведения." } ,
{g_name:"Human: Fall Flat" , g_url: "https://steampay.com/game/human-fall-flat" , g_img: "https://steamcdn-a.akamaihd.net/steam/apps/477160/ss_6b7e41a9be2412d24b2bf6c55f85a6502b2fc1cb.1920x1080.jpg?t=1587992010" , g_text:"Увлекательнейшая игра, которая позволит вам весело провести время в сюрреалистичном мире, полном загадок и веселых моментов. Вашего протагониста зовут Боб, но его вы в игре не увидите, потому что он спит – а все происходящее ему просто снится! Загвоздка состоит в том, что выбраться из сна очень непросто. Боба в его сне олицетворяет забавный человечек, строитель по профессии, который и будет с вашей помощью решать головоломки." } ,
{g_name:"The Elder Scrolls V: Skyrim Special Edition" , g_url: "https://steampay.com/game/the-elder-scrolls-v-skyrim-special-edition" , g_img: "https://steamcdn-a.akamaihd.net/steam/apps/489830/ss_73c1a0bb7e1720c8a1847186c3ddd837d3ca7a8d.1920x1080.jpg?t=1586802953" , g_text:"The Elder Scrolls V: Skyrim Special Edition — это улучшенное и расширенное переиздание оригинальной The Elder Scrolls V: Skyrim, в котором были добавлены новые враги, снаряжение, локации, персонажи, а также включены все DLC." } ,
{g_name:"Warhammer: Vermintide 2" , g_url: "https://steampay.com/game/warhammer-vermintide-2" , g_img: "https://steamcdn-a.akamaihd.net/steam/apps/552500/ss_82f6e4be1711f1fcd5e6c15687df03a9d96d8f32.1920x1080.jpg?t=1586846977" , g_text:"Вселенная Warhammer снова в опасности. В окрестностях появилась армия Хаоса, готовая к порабощению всех и вся. Противостоять полчищам злобных тварей вызвалась пятерка храбрецов." } ,
{g_name:"METAL GEAR SOLID V: THE PHANTOM PAIN" , g_url: "https://steampay.com/game/metal-gear-solid-v-the-phantom-pain" , g_img: "https://steamcdn-a.akamaihd.net/steam/apps/287700/ss_258e5c725ba2da8a2fc2ee779ae75ba4b0aac0c6.1920x1080.jpg?t=1581382198" , g_text:"Пролежав в коме практически десять лет, Снейк наконец-то приходит в себя. Это было сделано очень вовремя, потому что происходящее вокруг просто требует его участия. Новая цепочка событий станет логическим продолжением произошедшего в холодную войну 80-х. Именно поэтому герой так одержим идеей отомстить теневой группировке, известной под аббревиатурой XOF." } ,
{g_name:"DARK SOULS 3" , g_url: "https://steampay.com/game/dark-souls-3" , g_img: "https://steamcdn-a.akamaihd.net/steam/apps/374320/ss_5efd318b85a3917d1c6e717f4cb813b47547cd6f.1920x1080.jpg?t=1580308221" , g_text:"Этот экшн и ролевой мультиплатформер стал четвертым пополнением игровой серии SOULS, которая буквально влюбила в себя геймеров своей хардкордной сложностью. В новой версии упор игрового процесса сделан на ролевых элементах. Теперь на стиль боя и навыки персонажа будет влиять исключительно направление его развития. Что касается игрового задания, оно осталось прежним. Тем, кто решит купить Dark Souls 3 в магазине steampay.com, придется вооружиться холодным оружием, представленным широким арсеналом, и отправиться вырезать полчища грозных демонов. Игра невероятно красива, но при этом беспощадна в своей жестокости." } ,
{g_name:"DARK SOULS II: Scholar of the First Sin" , g_url: "https://steampay.com/game/dark-souls-2" , g_img: "https://steamcdn-a.akamaihd.net/steam/apps/335300/ss_589f08dc4d8580785923c89749101a15014bcdf9.1920x1080.jpg?t=1580309364" , g_text:"Считаете себя гуру в прохождении ролевых экшенов? Тогда попробуйте купить Dark Souls 2 на steampay.com! Эта игра беспрецедентной сложности чрезвычайно требовательна к севшему за нее. Опасности здесь встречаются на каждом шагу, и это не метафора." } ,
{g_name:"Fallout 4" , g_url: "https://steampay.com/game/fallout-4" , g_img: "https://steamcdn-a.akamaihd.net/steam/apps/377160/ss_f7861bd71e6c0c218d8ff69fb1c626aec0d187cf.1920x1080.jpg?t=1588615523" , g_text:"Создатели серии Fallout приглашают вас попробовать силы в открытом мире грандиозной четвертой игровой части. Попасть в адское будущее несложно. Все, что вам для этого нужно будет сделать – это купить Fallout 4, и постапокалиптическая Земля раскроет для вас свои объятия!" } ,
{g_name:"Dead by Daylight" , g_url: "https://steampay.com/game/dead-by-daylight" , g_img: "https://steamcdn-a.akamaihd.net/steam/apps/381210/ss_5d66c65ae32b7dd265c5eccf0f38ae3e21f54351.1920x1080.jpg?t=1587510462" , g_text:"Найти среди ММО настоящий ужастик сегодня нелегко, но этот хоррор стал новой ступенью в развитии направления. Он сломал стереотипы о том, что подобного рода игры хороши в одиночном прохождении и доказал, что сетевой экшен может быть не менее пугающим." } ,
{g_name:"Monster Hunter World: Iceborne" , g_url: "https://steampay.com/game/monster-hunter-world-iceborne" , g_img: "https://steamcdn-a.akamaihd.net/steam/apps/1118010/ss_bc64afab29b2c76b7c6fae7818a5d0414ac59488.1920x1080.jpg?t=1586831465" , g_text:"Долг зовет вас в неизведанные морозные земли, полные доселе невиданных чудовищ и всевозможных форм жизни. Воспользуйтесь особенностями этой суровой местности, чтобы преуспеть на охоте! Новая история начнется там, где закончился сюжет Monster Hunter: World..." } ,
{g_name:"Prey" , g_url: "https://steampay.com/game/prey" , g_img: "https://steamcdn-a.akamaihd.net/steam/apps/480490/ss_06b6c27c834b5639c54d470b3b5c711cf72a94af.1920x1080.jpg?t=1554143435" , g_text:"2032 год. Человечество активно осваивает космос и ищет новые пути совершенствования расы. Вы в составе экспериментальной группы высланы на лунную орбиту и являетесь участником необычного проекта. Но, как обычно, что-то пошло не так и вместо того, чтобы крутиться перед учеными подопытным хомячком, вы вынуждены бороться за собственную жизнь. Сюжет захватывающий, однако на захваченную пришельцами станцию смогут попасть лишь те, кто готов купить Prey." } ,
{g_name:"MudRunner" , g_url: "https://steampay.com/game/mudrunner" , g_img: "https://steamcdn-a.akamaihd.net/steam/apps/675010/ss_95b0985dd1aaa652c69fb0f2ae046177838c319a.1920x1080.jpg?t=1565102807" , g_text:"Из пункта А в пункт В выехал автомобиль… А вот поспел ли он в срок доставить груз и доехал ли он вообще – это вопрос. Спешите купить MudRunner на steampay.com, чтобы узнать на него ответ!" } ,
{g_name:"The Elder Scrolls V: Skyrim Legendary Edition" , g_url: "https://steampay.com/game/the-elder-scrolls-v-skyrim-legendary-edition" , g_img: "https://steamcdn-a.akamaihd.net/steam/apps/489830/ss_73c1a0bb7e1720c8a1847186c3ddd837d3ca7a8d.1920x1080.jpg?t=1586802953" , g_text:"Встречайте полное издание Skyrim, игры, удостоенной более 200 наград «Игра года» - The Elder Scrolls V: Skyrim Legendary Edition, включающее в себя оригинальную игру, официальные дополнения – Dawnguard, Hearthfire и Dragonborn – и дополнительные возможности, такие как боевая камера, конный бой, легендарный уровень сложности для самых опытных игроков и легендарные навыки, благодаря которым вы можете довести до совершенства все способности и неограниченно повышать уровень своего персонажа." } ,
{g_name:"Tom Clancy's Rainbow Six Siege" , g_url: "https://steampay.com/game/tom-clancys-rainbow-six-siege" , g_img: "https://steamcdn-a.akamaihd.net/steam/apps/359550/ss_79af6b4e7ea15b745c0c315e4ae8f7450bb64f58.1920x1080.jpg?t=1585594789" , g_text:"Терроризм – бич нашего времени, и противостоять ему в состоянии лишь элитные спецподразделения. Хотите стать представителем одного из них? У вас есть возможность купить Tom Clancy’s Rainbow Six: Siege на steampay.com и ввязаться в жесткое противостояние!" } ,
{g_name:"Far Cry 5" , g_url: "https://steampay.com/game/far-cry-5" , g_img: "https://steamcdn-a.akamaihd.net/steam/apps/552520/ss_a52c732d62a26d20bcfb0525929178749392f4fc.1920x1080.jpg?t=1575655495" , g_text:"Ubisoft порадовала новой частью популярных шутеров Far Cry. Сюжет пятой истории отправит геймеров в Монтану, а точнее, в вымышленный округ этого североамериканского штата. Здесь сектанты культа «Врата Эдема» устроили жителям настоящий ад на земле! Сохранившие остатки разума в Хоупе еще пытаются противостоять влиянию Джозефа Сида и его приспешников, поэтому объявлены изгоями и приговорены к уничтожению. Спасти их может только организованное сопротивление. Готовы взять на себя командную миссию и возглавить настоящее партизанское движение, а также лицом к лицу столкнуться со всеми сопутствующими «прелестями» такой войны? Спешите купить Far Cry 5 на steampay.com!" } ,
{g_name:"Dishonored 2" , g_url: "https://steampay.com/game/dishonored-2" , g_img: "https://steamcdn-a.akamaihd.net/steam/apps/403640/ss_f2206b92cfde7e2c63a106e35ddc847700a2f7d8.1920x1080.jpg?t=1544905361" , g_text:"Готовы окунуться в мрачнейшую историю нового мистического стэлс-экшена серии Dishonored? Тогда предложение купить Dishonored 2 должно вас заинтересовать! В этой версии вас ждут сразу два героя и непредвиденный поворот событий. Персонажей наделили совершенно разными способностями, соответственно, и стиль прохождения будет зависеть от выбора протагониста." } ,
{g_name:"Magicka" , g_url: "https://steampay.com/game/magicka" , g_img: "https://steamcdn-a.akamaihd.net/steam/apps/238370/ss_41b744c738cc2d394378ccd1b1bf5e1db0163b64.1920x1080.jpg?t=1587505321" , g_text:"В основу этой сатирической, полной невероятных приключений квестовой бродилки лег германо-скандинавский эпос. Вас ждет вымышленный мир Мидгара с его заснеженными, нафаршированными опасностями долинами, мрачными подземельями, непролазными лесами, непроходимыми горными перевалами и «радушным» населением." } ,
{g_name:"S.T.A.L.K.E.R.: Shadow of Chernobyl" , g_url: "https://steampay.com/game/stalker-shadow-of-chernobyl" , g_img: "https://steamcdn-a.akamaihd.net/steam/apps/4500/0000002182.1920x1080.jpg?t=1580406435" , g_text:"2012-й год. Повторная техногенная катастрофа сделала Чернобыльскую зону местом, способным доставить большие проблемы не только отдельно взятой стране, а всему миру в целом. Какое зло породила опасная территория и можно ли ему противостоять?" } ,
{g_name:"DiRT Rally" , g_url: "https://steampay.com/game/dirt-rally" , g_img: "https://steamcdn-a.akamaihd.net/steam/apps/690790/ss_a0ca5039eeab172a30f26fcf40411a287cdb8569.1920x1080.jpg?t=1585757222" , g_text:"Готовы рвануть по бездорожью? Тогда не проходите мимо предложения купить DiRT Rally! Популярнейший гоночный проект позволит вам сполна насладиться скоростью и крутизной виражей. От вас понадобится адское терпение и отточенная до автоматизма реакция, чтобы пройти треки всех 36 этапов." } ,
{g_name:"S.T.A.L.K.E.R.: Call of Pripyat" , g_url: "https://steampay.com/game/stalker-call-of-pripyat" , g_img: "https://steamcdn-a.akamaihd.net/steam/apps/41700/ss_ec502b434623ed96f20b1db28149904205bd7f3f.1920x1080.jpg?t=1580906751" , g_text:"Чернобыльская АЭС даже после аварии продолжает оставаться лакомым кусочком, и взять ее под контроль – дело святое. Однако снаряженная военная операция по захвату территорий терпит полнейшее фиаско." } ,
{g_name:"Doom" , g_url: "https://steampay.com/game/doom" , g_img: "https://steamcdn-a.akamaihd.net/steam/apps/782330/ss_4f93a7c5003d49cb32f6c0c6e547452b284580a0.1920x1080.jpg?t=1585834350" , g_text:"В этом стремительном шутере от первого лица вы вновь влезете в шкуру космического десантника и отправитесь в длинный путь по лабиринтам коридоров давно заброшенной базы, некогда развернутой землянами на Марсе. Миллионы геймеров ждут возможность купить Doom 2016 года, чтобы добраться до самого дна Ада и устроить там настоящую трепку демонам! Азарта добавляет тот факт, что теперь это можно проделывать не только самостоятельно, но и по Сети, организовывая масштабные кампании и сводя на поле брани людей и Силы Тьмы." } ,
{g_name:"Terraria" , g_url: "https://steampay.com/game/terraria" , g_img: "https://steamcdn-a.akamaihd.net/steam/apps/105600/ss_8c03886f214d2108cafca13845533eaa3d87d83f.1920x1080.jpg?t=1580862559" , g_text:"Встретили предложение купить Terraria на steampay.com – поспешите воспользоваться им, и вы не пожалеете! О том, что перед вами нереально увлекательный проект, говорит уже тот факт, что в игре смешана куча жанров. Порой сложно понять, какое направление превалирует, настолько тесно они переплелись. Инди-платформер, щедро сдобренный элементами ролевки и приключениями, порой предстает в облике чистейшей песочницы." } ,
{g_name:"Worms W.M.D" , g_url: "https://steampay.com/game/worms-wmd" , g_img: "https://steamcdn-a.akamaihd.net/steam/apps/327030/ss_5021cda9e53161b5144edefd9242e4c84fc46800.1920x1080.jpg?t=1587495185" , g_text:"Скользкие, сопливые, но такие любимые червячки снова готовы встать под командование тех, кто решит купить Worms W.M.D на steampay.com. Хотите показать миру, на что способны? Тогда соберите отряд слизняков, распределите роли, раздайте оружие и начинайте военные действия." } ,
{g_name:"The Elder Scrolls V: Skyrim" , g_url: "https://steampay.com/game/the-elder-scrolls-v-skyrim" , g_img: "https://steamcdn-a.akamaihd.net/steam/apps/489830/ss_73c1a0bb7e1720c8a1847186c3ddd837d3ca7a8d.1920x1080.jpg?t=1586802953" , g_text:"Это не игра, это пусть маленькая, но совершенно новая жизнь в мире, где можно позволить себе быть собой и делать все, что заблагорассудится. Стоит купить The Elder Scrolls V: Skyrim и вы сможете попробовать, как это здорово быть вором, убийцей или разбойником. А может вам понравится привычно спасать вселенную, и вы отправитесь защищать ее от мистической угрозы? Разработчикам удалось создать действительно убедительный сеттинг, да еще и наполнить его горами контента. В игре есть все, что может пожелать поклонник ролевых игр, и каждый игрок решает сам, как он будет читать эту сказку." } ,
{g_name:"Red Dead Redemption 2: Ultimate Edition" , g_url: "https://steampay.com/game/red-dead-redemption-2-ultimate-edition" , g_img: "https://steamcdn-a.akamaihd.net/steam/apps/234080/ss_78f2b597d2f76143c4ec263db846208796d0f88c.1920x1080.jpg?t=1581381861" , g_text:"Red Dead Redemption 2, грандиозная сага от Rockstar Games и самая высокооцененная игра на текущем поколении консолей, выходит на PC. В версии для PC представлены новые материалы для сюжетного режима, визуальные усовершенствования и другие нововведения." } ,
{g_name:"S.T.A.L.K.E.R.: Clear Sky" , g_url: "https://steampay.com/game/stalker-clear-sky" , g_img: "https://steamcdn-a.akamaihd.net/steam/apps/20510/0000002636.1920x1080.jpg?t=1580906767" , g_text:"Выжить после Выброса? Каждый уважающий сталкер скажет вам, что это нереально! Но все же вы, наемник со странным именем Шрам, это сделали. Что дальше?" } ,
{g_name:"Saints Row IV: Game of the Century Edition" , g_url: "https://steampay.com/game/saints-row-4" , g_img: "https://steamcdn-a.akamaihd.net/steam/apps/314580/ss_4d0870846c03874064edbaecb1c1458a2bafd245.1920x1080.jpg?t=1576076560" , g_text:"Свершилось! «Святые» у власти. Теперь Америка полностью им подконтрольна. И все отлично – ну, не считая того, что жизнь новому руководству немного отравляет мысль о скорых выборах. И вот тут внезапная интервенция инопланетян внесла свои коррективы. Незваные гости устроили настоящий ад, организовав виртуальные ловушки." } ,
{g_name:"Dishonored" , g_url: "https://steampay.com/game/dishonored" , g_img: "https://steamcdn-a.akamaihd.net/steam/apps/217980/ss_3c6a36e5f6ae320349a66d50a53240ca282c7405.1920x1080.jpg?t=1529533164" , g_text:"Он был отличным телохранителем, и ему доверили жизнь самой императрицы. Почему он не смог выполнить свою миссию до конца и не защитил Её Величество? Разобраться в произошедшем будет совсем непросто, ведь Корво сочли виновным в смерти Первой Леди, и бросили в тюрьму. Хотите помочь парню выбраться из передряги и отстоять свою честь? Тогда поторопитесь купить Dishonored на steampay.com." } ,
{g_name:"Borderlands 3 Steam" , g_url: "https://steampay.com/game/borderlands-3-s" , g_img: "https://steamcdn-a.akamaihd.net/steam/apps/397540/ss_9868ee40f39749a4c8222502cf86525ee32c1bef.1920x1080.jpg?t=1587675179" , g_text:"Покой Вселенной Borderlands только снится. С момента последней войны минуло всего 7 лет, а миру вновь грозит серьезная опасность. Отморозки организовали секту, собрав вокруг идиотического учения отъявленных психопатов." } ,
{g_name:"RESIDENT EVIL 2" , g_url: "https://steampay.com/game/resident-evil-2" , g_img: "https://steamcdn-a.akamaihd.net/steam/apps/883710/ss_1392581cd29817e44099cf05416b70ffb159c58b.1920x1080.jpg?t=1581665829" , g_text:"Давненько не заглядывали в Раккун-сити? Не в курсе тамошних новостей? Тогда вам стоит купить Resident Evil 2 на steampay.com. Легендарная игра вернулась в новой графике, с удобным управлением, OTS-камерой, демонстрирующей вид из-за плеча героя и, конечно же, предлагает незабываемые приключения." } ,
{g_name:"Tabletop Simulator" , g_url: "https://steampay.com/game/tabletop-simulator" , g_img: "https://steamcdn-a.akamaihd.net/steam/apps/286160/ss_203970c1dd0b8985f9f5c59767517bb7144fb6e9.1920x1080.jpg?t=1587678573" , g_text:"Нравится проводить время за игральным столом в кругу друзей, но нет возможности в реальности собраться тесной компанией? Не упустите возможность купить Tabletop Simulator: такого разнообразия настольных игр песочницы еще не предлагали!" } ,
{g_name:"Euro Truck Simulator 2" , g_url: "https://steampay.com/game/euro-truck-simulator-2" , g_img: "https://steamcdn-a.akamaihd.net/steam/apps/227300/ss_2ab0f02db0327d8161714c0d68570320cf18ca6b.1920x1080.jpg?t=1587666184" , g_text:"Мечтали попробовать себя в роли дальнобойщика? Теперь у вас есть отличный шанс купить Euro Truck Simulator 2 на steampay.com и сесть за руль лучших моделей грузовозов." } ,
{g_name:"No Man's Sky" , g_url: "https://steampay.com/game/no-mans-sky" , g_img: "https://steamcdn-a.akamaihd.net/steam/apps/275850/ss_4f501c39d59ca70fe02ced438e43087b0e788074.1920x1080.jpg?t=1587119605" , g_text:"Встречайте наиболее амбициозный игровой проект современности, о котором так давно трубили журналисты! Наконец-то есть возможность купить No Man’s Sky и посмотреть, да что там посмотреть – покорить, случайно генерируемую вселенную игры, избороздив ее вдоль и поперек на своем супер нафаршированном корабле! Вас ждут дивные события. В такие переделки, как в этом космическом приключенческом боевике, вы еще никогда не попадали, так что активней крутите головой по сторонам, иначе, не ровен час, станете жертвой многочисленных врагов в невиданных доселе формах, которыми новый мир просто кишит." } ,
{g_name:"Resident Evil 4: Ultimate HD Edition" , g_url: "https://steampay.com/game/resident-evil-4" , g_img: "https://steamcdn-a.akamaihd.net/steam/apps/222480/ss_fd5cce21ff888076c2fae31ffa5b2b35ab166dc9.1920x1080.jpg?t=1582691387" , g_text:"С момента уничтожения Ракун-Сити, вместе со всеми, давно потерявшими человеческий облик, жителями, прошло шесть лет. Переживший этот ад бывший полицейский Леон Кеннеди обзавелся более спокойной работой. Служить в секретном отделении, контролируемом президентом страны, оказалось совсем не хлопотно. Однако спокойствие было враз нарушено похищением президентской дочери. Куда приведет расследование, вы сможете узнать, если решите купить ключ Resident Evil 4: Ultimate HD Edition." } ,
{g_name:"The Escapists 2" , g_url: "https://steampay.com/game/the-escapists-2" , g_img: "https://steamcdn-a.akamaihd.net/steam/apps/641990/ss_4c06641e551c04e72abb54d3c190233ff02c05ca.1920x1080.jpg?t=1582646868" , g_text:"Не по душе тюремная жизнь? Бегите! Но делайте это виртуозно, азартно, в общем, так, чтобы у охранников волосы встали дыбом от изощренности вашего плана. Сделать это в тюремной песочнице The Escapists 2 будет невероятно сложно, но ведь вас не остановят строжайший режим и обилие персонала? Ваш ум изворотлив, и мозг готов поработать на славу? Тогда вперед!" } ,
{g_name:"XCOM 2" , g_url: "https://steampay.com/game/xcom-2" , g_img: "https://steamcdn-a.akamaihd.net/steam/apps/268500/ss_a95cdbe487dbabf6621962fc92f438e26c5fdfd3.1920x1080.jpg?t=1587659817" , g_text:"События второй части XCOM начнут разворачиваться по прошествии двух десятков лет после финиширования Emeny Unknown. Земля встретит вас утопическим будущим, где планета подконтрольна пришельцам. Многие страны решились признать правительство Advent Administration, обещающее человеческой цивилизации нереальное процветание и жизнь, где не будет голода, болезней и боли." } ,
{g_name:"Spintires" , g_url: "https://steampay.com/game/spintires" , g_img: "https://steamcdn-a.akamaihd.net/steam/apps/263280/ss_03e1de81194f7f0e04c373d24dc047c2d6b0a4ef.1920x1080.jpg?t=1587036830" , g_text:"Эх, дороги! А точнее, их отсутствие. И как добраться до цели по целине? Тут важно сесть в кабину «правильного» автомобиля, которым может стать и лесовоз, и юркий УАЗик." } ,
{g_name:"Don't Starve Together" , g_url: "https://steampay.com/game/dont-starve-together" , g_img: "https://steamcdn-a.akamaihd.net/steam/apps/322330/ss_11dc14670f703a99884bbe479205727a3776d7b3.1920x1080.jpg?t=1587660819" , g_text:"Хардкорное выживание в огромном мире с интересными событиями – испытание не для слабонервных, однако если вы чувствуете в себе силы реально сделать это и знаете, как избавляться от преследующих вас проблем, то можете рискнуть купить Don’t Starve Together." } ,
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
let randomElement = getRandomElement(games_baza);

title_rg.textContent = randomElement.g_name;

img_rg.src = randomElement.g_img;

text_info_rg.textContent = randomElement.g_text;

img_url_rg.href = randomElement.g_url + '?agent=823594';

})
