// Define the Manhwa class constructor
function Manhwa(title, href, last_chapter_read, newest_chapter, notes, rating, type) {
    this.title = title;
    this.href = href;
    this.last_chapter_read = last_chapter_read;
    this.newest_chapter = newest_chapter;
    this.notes = notes;
    this.rating = rating;
    this.type = type;
}
  
// Create an array of Manhwa instances
// Format = new Manhwa("Title", "href", last_chapter_read, newest_chapter, "notes", "rating", "rating_tag")
var manhwas = [
    // new Manhwa("", "", "", "(4/8/23): ", "", "", ""),
    new Manhwa("Han Dae Sung Returned From Hell", "https://aquamanga.com/read/han-dae-sung-returned-from-hell/", "0", "(4/8/23): 27", "", "0", "unread"),
    new Manhwa("Bad Boy", "https://mangaclash.com/manga/bad-boy/", "19", "(4/8/23): 127", "I Dropped", "79", ""),
    new Manhwa("The Dark Mage’s Return to Enlistment", "https://www.asurascans.com/manga/the-dark-mages-return-to-enlistment/", "6", "(4/8/23): 8", "", "89", ""),
    new Manhwa("Max Level Player", "https://aquamanga.com/read/max-level-player/", "20", "(4/8/23): 21", "", "89", ""),
    new Manhwa("Top Tier Providence", "https://realmscans.com/m270323/series/top-tier-providence/", "91", "(4/8/23): 96", "", "85", ""),
    new Manhwa("The Little Brother Is The Academy’s Hotshot", "https://realmscans.com/m270323/series/my-little-brother-is-the-academys-hotshot/", "24", "(4/8/23): 25", "", "86", ""),
    new Manhwa("I am a Cultivation Bigshot", "https://realmscans.com/m270323/series/i-am-a-cultivation-bigshot/", "215", "(4/8/23): 217", "", "85", ""),
    new Manhwa("My Wife Is From a Thousand Years Ago", "https://aquamanga.com/read/my-wife-is-from-a-thousand-years-ago/", "157", "(4/8/23): 158", "Romance", "94", ""),
    new Manhwa("My Disciples Are All Big Villains", "https://aquamanga.com/read/my-disciples-are-all-big-villains/", "5", "(4/8/23): 53", "", "84", ""),
    new Manhwa("The Return of the Prodigious Swordmaster", "https://www.asurascans.com/manga/the-return-of-the-prodigious-swordmaster/", "17", "(4/8/23): 20 (Dropped on Asura)", "", "88", ""),
    new Manhwa("Who Killed the Murim Lord?", "https://astrascans.com/manga/who-killed-the-murim-lord/", "6", "(4/8/23): 36", "Basically unread, just started", "0", "unread"),
    new Manhwa("Legendary Ranker's Comeback", "https://www.asurascans.com/manga/legendary-rankers-comeback/", "3", "(4/8/23): 3", "Basically unread, just started", "0", "unread"),
    new Manhwa("The Book Eating Magician", "https://mangagg.com/comic/the-book-eating-magician-series", "51", "(4/8/23): 85", "", "90", ""),
    new Manhwa("Trapped in a Webnovel as a Good-For-Nothing", "https://ww5.mangakakalot.tv/manga/manga-jo987097", "0", "(3/13/23): 127", "", "0", "unread"),
    new Manhwa("The Duke's Redemption", "https://reaperscans.com/comics/3927-the-dukes-redemption", "0", "(3/13/23): 35", "", "0", "unread"),
    new Manhwa("Everyone Else is a Returnee", "https://www.asurascans.com/manga/everyone-else-is-a-returnee/", "25", "(3/13/23): 25", "", "89", ""),
    new Manhwa("Dangerous Dungeon Escape", "https://www.asurascans.com/manga/dangerous-dungeon-escape/", "0", "(3/13/23): 15.5 [Dropped on AsuraScans]", "", "0", "unread"),
    new Manhwa("Drug-Eating Genius Mage", "https://www.asurascans.com/manga/drug-eating-genius-mage/", "23", "(4/8/23): 25", "", "87", ""),
    new Manhwa("I'm Trapped In This Day For One Thousand Years", "https://aquamanga.com/read/i-m-trapped-in-this-day-for-one-thousand-years/", "16", "(3/13/23): 16.1", "", "79", ""),
    new Manhwa("I Have Become The Demonic Ancestor", "https://aquamanga.com/read/i-have-become-the-demonic-ancestor/", "31", "(3/13/23): 41", "", "79", ""),
    new Manhwa("I Used to be a Boss", "https://iusedtobeaboss.com/", "20", "(3/13/23): 21", "", "89", ""),
    new Manhwa("Divine Urban God", "https://aquamanga.com/read/divine-urban-god/", "51", "(3/13/23): 51", "Story generic and plot bad being overall kind of bad but okay reading if there's nothing else", "70", ""),
    new Manhwa("Hard Carry Support", "https://reaperscans.com/comics/3913-hard-carry-support", "22", "(4/8/23): 22", "", "90", ""),
    new Manhwa("The Constellations are My Disciples", "https://cosmicscans.com/manga/the-constellations-are-my-disciples/", "16", "(3/13/23): 16", "", "89", ""),
    new Manhwa("FFF-Class Trashero", "https://ww2.fff-classtrashero.com/", "43", "(2/22/23): 141", "Didn't actually read up to 43, i watched a YouTube summary that looked okay ", "75", ""),
    new Manhwa("I'm Stuck on the Same Day for a Thousand Years", "https://aquamanga.com/read/i-m-stuck-on-the-same-day-for-a-thousand-years/", "12", "(2/22/23): 14", "", "87", ""),
    new Manhwa("Moon-Shadow Sword Emperor", "https://flamescans.org/series/1677063722-moon-shadow-sword-emperor/", "20", "(2/22/23): 22", "", "88", ""),
    new Manhwa("Eternal Club", "https://realmscans.com/d1102/series/eternal-club/", "165", "(3/13/23): 165", "Cool concept, gets a bit repetitive but still interesting to see where it goes", "89", ""),
    new Manhwa("Astral Pet Store", "https://nightscans.org/series/astral-pet-store/", "1", "(2/22/23): 45)", "", "Unknown", "unknown-rating"),
    new Manhwa("Demon's Crest", "https://reaperscans.com/comics/2834-demons-crest", "14", "(2/22/23): 15", "SAO creater, but weird concept with children", "80", ""),
    new Manhwa("Baek XX", "https://void-scans.com/manga/baek-xx/", "9", "(2/22/23): 11", "", "90", ""),
    new Manhwa("I Became A Part Time Employee For Gods", "https://aquamanga.com/read/i-became-a-part-time-employee-for-gods/", "24", "(3/13/23): 24", "", "91", ""),
    new Manhwa("The Demon Prince goes to the Academy", "https://reaperscans.com/comics/4770-the-demon-prince-goes-to-the-academy", "24", "(4/8/2023): 25", "", "89", ""),
    new Manhwa("Heavenly Grand Archive's Young Master", "https://www.asurascans.com/manga/heavenly-grand-archives-young-master/", "16", "(4/8/2023): 19", "", "89", ""),
    new Manhwa("Lurking in the City", "https://mangakakalot.com/chapter/bu924860", "140", "(2/15/2023):", "", "60", "hiatus"),
    new Manhwa("SSS-Class Gacha Hunter", "https://www.asurascans.com/manga/1672760368-sss-class-gacha-hunter/", "45", "(2/15/2023): ", "", "82", ""),
    new Manhwa("Invincible Sword Domain", "https://manhwatop.com/manga/invincible-sword-domain/", "110", "(2/15/2023): ", "", "55", ""),
    new Manhwa("Doctor's Rebirth", "https://www.asurascans.com/manga/1672760368-doctors-rebirth/", "107", "(2/15/2023): ", "", "88", ""),
    new Manhwa("Carnivorous Hunter", "https://www.asurascans.com/manga/1672760368-carnivorous-hunter/", "50", "(2/15/2023): ", "", "82", ""),
    new Manhwa("Apocalyptic Thief", "https://www.topmanhua.com/manhua/apocalyptic-thief/", "128", "(2/15/2023): ", "", "72", ""),
    new Manhwa("My Wife is Actually the Empress?", "https://www.topmanhua.com/manhua/my-wife-is-actually-the-empress/", "98", "(2/15/2023): ", "", "85", ""),
    new Manhwa("Seoul Station Druid", "https://reaperscans.com/comics/1185-seoul-station-druid", "85", "(2/15/2023): ", "", "77", ""),
    new Manhwa("Drug Devourer", "https://www.asurascans.com/manga/1672760368-drug-devourer/", "20", "(2/15/2023): ", "", "85", ""),
    new Manhwa("My Daughter is a Dragon!", "https://www.asurascans.com/manga/1672760368-my-daughter-is-a-dragon/", "40", "(2/15/2023): ", "", "77", ""),
    new Manhwa("Super Evolution", "https://www.asurascans.com/manga/1672760368-super-evolution/", "86", "(2/15/2023): ", "", "66", ""),
    new Manhwa("So They Prohesized, I’m the Future King", "https://aquamanga.com/read/they-say-im-the-future-king/", "0", "(2/15/2023): ", "", "0", "unread"),
    new Manhwa("I’ve Been Trapped on the Same Day for Over 3000 Years", "https://aquamanga.com/read/i-have-been-stuck-on-the-same-day-for-3000-years/", "0", "(3/13/2023): 40", "", "0", "unread"),
    new Manhwa("Infinite Mage", "https://www.asurascans.com/manga/1672760368-infinite-mage/", "29", "(4/8/2023): 30", "", "90", ""),
    new Manhwa("Monster Pet Evolution", "https://manhuaus.com/manga/monster-pet-evolution/", "22", "(2/15/2023): ", "", "68", ""),
    new Manhwa("Pick Me Up, Infinite Gatcha", "https://www.asurascans.com/manga/1672760368-pick-me-up-infinite-gacha/", "33", "(4/8/2023): 35", "", "91", ""),
    new Manhwa("The Lazy Swordmaster" , "https://void-scans.com/manga/the-lazy-swordmaster/", "33", "(2/15/2023): ", "", "75", ""),
    new Manhwa("Tale of a Scribe Who Retires to the Countryside", "https://en.leviatanscans.com/home/manga/tale-of-a-scribe-who-retires-to-the-countryside/", "113", "(2/15/2023): ", "", "78", ""),
    new Manhwa("Memorize", "https://aquamanga.com/read/memorize/", "100", "(2/15/2023): ", "", "75", ""),
    new Manhwa("Tomb Raider King", "https://tomb-raiderking.com/", "348", "(2/15/2023): ", "", "84", ""),
    new Manhwa("Past Life Returner/Past Life Regressor (Remake 2022)", "https://reaperscans.com/comics/4450-past-life-returner", "32", "(4/8/2023): 35", "", "89", ""),
    new Manhwa("Dr. Player", "https://www.asurascans.com/manga/1672760368-dr-player/", "21", "(2/15/2023): ", "", "93", ""),
    new Manhwa("Star Instructor Master Baek", "https://www.asurascans.com/manga/1672760368-star-instructor-master-baek/", "~2?", "(2/15/2023): ", "", "75", ""),
    new Manhwa("The Tutorial is Too Hard", "https://www.asurascans.com/manga/1672760368-the-tutorial-is-too-hard/", "92", "(2/15/2023): ", "", "77", ""),
    new Manhwa("Relife Player", "https://www.asurascans.com/manga/1672760368-relife-player/", "20", "(2/15/2023): ", "", "90", ""),
    new Manhwa("Poison-Eating Healer", "https://www.asurascans.com/manga/1672760368-poison-eating-healer/", "20", "(2/15/2023): ", "", "89", ""),
    new Manhwa("Boundless Necromancer", "https://www.asurascans.com/manga/1672760368-boundless-necromancer/", "24", "(4/8/2023): 26", "", "90", ""),
    new Manhwa("The Live", "https://www.asurascans.com/manga/1672760368-the-live/", "121", "(2/15/2023): ", "", "88", ""),
    new Manhwa("The Earth Savior Selection", "https://aquamanga.com/read/the-earth-savior-selection/", "55", "(2/15/2023): ", "", "89", ""),
    new Manhwa("To Hell with being a Saint", "https://www.asurascans.com/manga/1672760368-to-hell-with-being-a-saint-im-a-doctor/", "43", "(2/15/2023): ", "", "90", ""),
    new Manhwa("Youngest Scion of the Mages", "https://www.asurascans.com/manga/1672760368-youngest-scion-of-the-mages/", "21", "(2/15/2023): ", "", "90", ""),
    new Manhwa("Dungeons & Artifacts", "https://www.webtoons.com/en/action/dungeons-and-artifacts/list?title_no=2575&page=1", "0", "(2/15/2023): ", "", "0", "unread"),
    new Manhwa("I’ll Be Taking a Break for Personal Reasons", "https://www.asurascans.com/manga/1672760368-ill-be-taking-a-break-for-personal-reasons/", "23", "(2/15/2023): ", "", "89", ""),
    new Manhwa("Rise from the Rubble", "https://www.asurascans.com/manga/1672760368-rise-from-the-rubble/", "129", "(2/15/2023): ", "", "77", ""),
    new Manhwa("World’s Strongest Troll", "https://www.asurascans.com/manga/1672760368-worlds-strongest-troll/", "19", "(2/22/2023): 21", "", "90", ""),
    new Manhwa("Demon Lord’s Martial Arts Ascension", "https://www.asurascans.com/manga/1672760368-demon-lords-martial-arts-ascension/", "24", "(2/15/2023): ", "", "89", ""),
    new Manhwa("Clever Cleaning Life of the Returned Genius Hunter", "https://manhuaus.com/manga/clever-cleaning-life-of-the-returned-genius-hunter/", "29", "(2/22/2023): 30", "", "90", ""),
    new Manhwa("Nine Heavens Swordmaster", "https://mangabtt.com/manga/heavenly-inquisition-sword-nine-heavens-swordmaster-46676", "24", "(2/15/2023): ", "", "89", ""),
    new Manhwa("Plundering the Heavens", "https://drakescans.com/series/plundering-the-heavens2/#", "0", "(2/15/2023): ", "", "0", ""),
    new Manhwa("I’m Not That Kind of Talent", "https://www.asurascans.com/manga/1672760368-im-not-that-kind-of-talent/", "20", "(2/22/2023): 21", "", "93", ""),
    new Manhwa("Life of a Magic Academy Mage", "https://www.asurascans.com/manga/1672760368-life-of-a-magic-academy-mage/", "17", "(2/15/2023): ", "", "82", ""),
    new Manhwa("Reincarnation of the Murim Clan’s Former Ranker", "https://elarcpage.com/series/reincarnation-of-the-murim-clans-former-ranker/", "70", "(2/15/2023): ", "", "85", ""),
    new Manhwa("I Regressed to My Ruined Family", "https://www.asurascans.com/manga/1672760368-i-regressed-to-my-ruined-family/" , "23", "(2/15/2023): ", "", "90", ""),
    new Manhwa("My Insanely Competent Underlings", "https://www.asurascans.com/manga/1672760368-my-insanely-competent-underlings/", "13", "(2/15/2023): ", "", "89", ""),
    new Manhwa("Reincarnation of the Strongest Sword God", "https://www.asurascans.com/manga/1672760368-reincarnation-of-the-strongest-sword-god/", "14", "(2/15/2023): ", "", "90", ""),
    new Manhwa("Reaper of the Drifting Moon", "https://www.asurascans.com/manga/1672760368-reaper-of-the-drifting-moon/", "30", "(2/15/2023): ", "", "90", ""),
    new Manhwa("Reincarnated Escort Warrior", "https://www.asurascans.com/manga/1672760368-reincarnated-escort-warrior/", "24", "(2/15/2023): ", "", "90", ""),
    new Manhwa("On My Way to Kill God", "https://www.asurascans.com/manga/1672760368-on-my-way-to-kill-god/", "6", "(2/15/2023): ", "", "92", ""),
    new Manhwa("Champion’s Path to Murim", "https://www.asurascans.com/manga/1672760368-champions-path-to-murim/", "22", "(2/15/2023): ", "", "89", ""),
    new Manhwa("Never Die Extra", "https://www.asurascans.com/manga/1672760368-never-die-extra/", "21", "(2/15/2023): ", "", "92", ""),
    new Manhwa("Worn and Torn Newbie", "https://www.asurascans.com/manga/1672760368-worn-and-torn-newbie/", "0", "(2/15/2023): ", "", "0", "unread"),
    new Manhwa("Warrior High School", "https://www.asurascans.com/manga/1672760368-warrior-high-school-dungeon-raid-course/", "37", "(4/8/2023): 40", "", "90", ""),
    new Manhwa("Return of the Shattered Constellation", "https://www.asurascans.com/manga/1672760368-return-of-the-shattered-constellation/", "49", "(2/15/2023): ", "", "93", ""),
    new Manhwa("Archmage Transcending Through Regression", "https://www.asurascans.com/manga/1672760368-archmage-transcending-through-regression/", "42", "(4/8/2023): 45", "", "89", ""),
    new Manhwa("Worthless Regression", "https://www.asurascans.com/manga/1672760368-worthless-regression/", "42", "(2/15/2023): ", "", "80", ""),
    new Manhwa("Transmigrating to the Otherworld Once More", "https://www.asurascans.com/manga/1672760368-transmigrating-to-the-otherworld-once-more/", "30", "(2/15/2023): ", "", "90", ""),
    new Manhwa("The Greatest Estate Developer", "https://www.asurascans.com/manga/1672760368-the-greatest-estate-developer/", "69", "(2/15/2023): ", "Best Comedy", "95", ""),
    new Manhwa("Youngest Son of the NamGung Clan", "https://aquamanga.com/read/youngest-son-of-the-namgung-clan/", "24", "(2/15/2023): ", "", "85", ""),
    new Manhwa("Legend of the Northern Blade", "https://www.northernblade.online/", "70", "(2/15/2023): ", "", "86", ""),
    new Manhwa("Chronicles Of The Martial God’s Return", "https://www.asurascans.com/manga/1672760368-chronicles-of-the-martial-gods-return/", "45", "(2/15/2023): ", "", "91", ""),
    new Manhwa("Helmut: The Forsaken Child", "https://www.asurascans.com/manga/1672760368-helmut-the-forsaken-child/", "27", "(2/15/2023): ", "", "88", ""),
    new Manhwa("Existence", "https://www.asurascans.com/manga/1672760368-existence/", "7", "(2/15/2023): ", "Best Intro Chapters", "92", ""),
    new Manhwa("I Became the Tyrant of a Defense Game", "https://reaperscans.com/comics/2422-i-became-the-tyrant-of-a-defense-game", "17", "(2/15/2023): ", "Great Start so far", "93", ""),
    new Manhwa("My School Life Pretending To Be a Worthless Person", "https://www.asurascans.com/manga/1672760368-my-school-life-pretending-to-be-a-worthless-person/", "23", "(2/15/2023): ", "Got boring/repetitive after first 10 chapters", "85", ""),
    new Manhwa("Return of the SSS-Class Ranker", "https://www.asurascans.com/manga/1672760368-return-of-the-sss-class-ranker/", "18", "(2/15/2023): ", "", "92", ""),
    new Manhwa("Standard of Reincarnation", "https://www.asurascans.com/manga/1672760368-standard-of-reincarnation/", "54", "(4/8/2023): 54 (S1 End)", "", "91", ""),
    new Manhwa("I’m the Only One Loved by the Constellations!", "https://www.asurascans.com/manga/1672760368-im-the-only-one-loved-by-the-constellations/", "0", "(2/15/2023): ", "", "0", "unread"),
    new Manhwa("The Constellation That Returned From Hell", "https://www.asurascans.com/manga/1672760368-the-constellation-that-returned-from-hell/", "111", "(2/15/2023): ", "", "92", ""),
    new Manhwa("My Path to Killing Gods in Another World", "https://www.asurascans.com/manga/1672760368-my-path-to-killing-gods-in-another-world/", "0", "(2/15/2023): ", "Didn't Like on first 2 chapters read in the past", "0", ""),
    new Manhwa("Absolute Sword Sense", "https://www.asurascans.com/manga/1672760368-absolute-sword-sense/", "11", "(2/15/2023): ", "", "90", "hiatus"),
    new Manhwa("One-of-a-Kind Irregular", "https://reaperscans.com/comics/3959-one-of-a-kind-irregular", "33", "(2/15/2023): ", "", "70", ""),
    new Manhwa("Player Who Returned 10,000 Years Later", "https://www.asurascans.com/manga/1672760368-player-who-returned-10000-years-later/", "50", "(4/8/2023): 52", "", "92", ""),
    new Manhwa("Is this Hero for Real?", "https://reaperscans.com/comics/9783-is-this-hero-for-real", "40", "(2/15/2023): ", "", "Unknown", "unknown-rating"),
    new Manhwa("Solo Spell Caster", "https://www.solospellcaster.online/", "53", "(2/15/2023): ", "", "Unknown", "unknown-rating"),
    new Manhwa("Transcension Academy", "https://reaperscans.com/comics/6603-transcension-academy", "23", "(2/15/2023): ", "", "90", ""),
    new Manhwa("Return to Player", "https://reaperscans.com/comics/7710-return-to-player", "24", "(2/15/2023): ", "", "Unknown", "unknown-rating"),
    new Manhwa("Ending Maker", "https://reaperscans.com/comics/7182-ending-maker", "27", "(2/15/2023): ", "", "89", ""),
    new Manhwa("Player from Today Onwards", "https://reaperscans.com/comics/2809-player-from-today-onwards", "46", "(2/15/2023): ", "", "Unknown", "unknown-rating"),
    new Manhwa("Superhuman Battlefield", "https://reaperscans.com/comics/6030-superhuman-battlefield", "19", "(2/15/2023): ", "", "84", ""),
    new Manhwa("The World after the Fall", "https://theworldafterfall.com/", "31", "(2/15/2023): ", "Light Novel = Chapter 76", "93", ""),
    new Manhwa("I Obtained a Mythic Item", "https://reaperscans.com/comics/9411-i-obtained-a-mythic-item", "10", "(2/15/2023): ", "", "92", ""),
    new Manhwa("Archmage Streamer", "https://reaperscans.com/comics/3742-archmage-streamer", "42", "(2/15/2023): ", "", "89", ""),
    new Manhwa("Damn Reincarnation", "https://reaperscans.com/comics/6887-damn-reincarnation", "40", "(2/15/2023): ", "", "91", ""),
    new Manhwa("I Became a Renowned Family’s Sword Prodigy", "https://www.asurascans.com/manga/1672760368-i-became-a-renowned-familys-sword-prodigy/", "15", "(2/15/2023): ", "", "88", ""),
    new Manhwa("Hero has Returned", "https://manhuafast.com/manga/hero-has-returned/", "23", "(2/15/2023): ", "Crazy story, dropped on asurascans however", "87", ""),
    new Manhwa("The Novel's Extra (Remake)", "https://www.asurascans.com/manga/1672760368-the-novels-extra-remake/", "50", "(3/13/2023): 50", "", "91", ""),
    new Manhwa("I Reincarnated As The Crazed Heir", "https://www.asurascans.com/manga/1672760368-i-reincarnated-as-the-crazed-heir/", "63", "(2/15/2023): ", "", "86", ""),
    new Manhwa("Lightning Degree", "https://lightningdegree.com/", "146", "(3/13/2023): 152", "", "93", ""),
    new Manhwa("Regressor Instruction Manual", "https://www.asurascans.com/manga/1672760368-regressor-instruction-manual/", "73", "(3/13/2023): 77", "", "95", ""),
    new Manhwa("Sword Fanatic Wanders Through The Night", "https://www.asurascans.com/manga/1672760368-sword-fanatic-wanders-through-the-night/", "6", "(2/15/2023): ", "", "88", ""),
    new Manhwa("Overpowered Sword", "https://www.asurascans.com/manga/1672760368-overpowered-sword/", "20", "(2/15/2023): ", "", "86", ""),
    new Manhwa("Academy’s Undercover Professor", "https://www.asurascans.com/manga/1672760368-academys-undercover-professor/", "26", "(2/15/2023): ", "", "93", ""),
    new Manhwa("Sleeping Ranker", "https://www.asurascans.com/manga/1672760368-sleeping-ranker/", "31", "(2/15/2023): 61.5", "", "90", ""),
    new Manhwa("Ganzi Monster", "https://aquamanga.com/read/ganzi-monster-aqua/", "38", "(2/17/2023): 58", "", "85", ""),
    new Manhwa("SSS-Class Suicide Hunter", "https://www.asurascans.com/manga/1672760368-sss-class-suicide-hunter/", "80", "(2/17/2023): 80", "Season 2 End (7/14/2022)", "93", ""),
    new Manhwa("Maxed out Leveling", "https://www.asurascans.com/manga/1672760368-maxed-out-leveling/", "42", "(2/17/2023): 53", "Season 1 End (7/24/2022)", "90", ""),
    new Manhwa("Ranker's Return", "https://reaperscans.com/comics/6415-rankers-return", "50", "(2/17/2023): 91", "It says its a remake but on Reaperscans it doesn't", "89", ""),
    new Manhwa("Villain to Kill", "https://w4.villain-to-kill.online/", "54", "(2/17/2023): 84", "", "85", ""),
    new Manhwa("The Heavenly Demon Can’t Live a Normal Life", "https://www.asurascans.com/manga/1672760368-the-heavenly-demon-cant-live-a-normal-life/", "46", "66", "Light novel = 58", "85", ""),
    new Manhwa("Arcane Sniper", "https://reaperscans.com/comics/1356-arcane-sniper", "93", "(2/17/2023): 97", "", "92", ""),
    new Manhwa("The Challenger", "https://reaperscans.com/comics/3439-the-challenger", "52", "(2/17/2023): 52", "League of Legends LOL", "87", ""),
    new Manhwa("Swordmaster's Youngest Son", "https://www.asurascans.com/manga/1672760368-swordmasters-youngest-son/", "64", "(4/8/2023): 66", "", "88", ""),
    new Manhwa("Is this Hunter for Real?", "https://reaperscans.com/comics/8806-is-this-hunter-for-real", "44", "(2/17/2023): 60", "", "86", ""),
    new Manhwa("Return of The Frozen Player", "https://reaperscans.com/comics/7868-return-of-the-frozen-player", "51", "(2/17/2023): 69", "", "90", ""),
    new Manhwa("The Immortal Emperor Luo Wuji has Returned", "https://aquamanga.com/read/the-immortal-emperor-luo-wuji-has-returned/", "133", "(2/17/2023): 190", "", "85", ""),
    new Manhwa("Eternal Supreme/The Ultimate of All Ages", "https://www.topmanhua.com/manhua/the-eternal-supreme/", "88", "(2/17/2023): 170", "", "84", ""),
    new Manhwa("Martial Peak", "https://manhuaplus.com/manga/martial-peak/", "145", "(2/17/2023): 3064", "", "88", ""),
    new Manhwa("Max Level Returner", "https://max-level-returner.online/", "165 or 96", "(2/17/2023): 187", "", "Unknown", "unknown-rating"),
    new Manhwa("A Returner's Magic Should be Special", "https://areturnermagic.com/", "123", "(2/17/2023): 219", "", "88", ""),
    new Manhwa("Trash of the Count’s Family", "https://www.asurascans.com/manga/1672760368-trash-of-the-counts-family/", "81", "(2/17/2023): 92.5", "", "91", ""),
    new Manhwa("The Return of the Crazy Demon", "https://www.asurascans.com/manga/1672760368-the-return-of-the-crazy-demon/", "46", "(2/17/2023): 63.5", "10/10 on AsuraScans", "Unknown", "unknown-rating"),
    new Manhwa("Legendary Youngest Son of the Marquis House", "https://www.asurascans.com/manga/1672760368-legendary-youngest-son-of-the-marquis-house-manhwa/", "60", "(4/8/2023): 62", "", "90", ""),
    new Manhwa("Talent-Swallowing Magician", "https://www.asurascans.com/manga/1672760368-talent-swallowing-magician/", "31", "(2/17/2023): 50.5", "9.8/10 on AsuraScans", "Unknown", "unknown-rating"),
    new Manhwa("My Daughter is the Final Boss", "https://www.asurascans.com/manga/1672760368-my-daughter-is-the-final-boss/", "24", "(2/17/2023): 63", "", "Unknown", "unknown-rating"),
    new Manhwa("Player Who Can’t Level Up", "https://theplayerthatcantlevelup.com/", "86", "(2/17/2023): 99", "", "89", ""),
    new Manhwa("Heavenly Martial God", "https://www.asurascans.com/manga/1672760368-heavenly-martial-god/", "55", "(2/17/2023): 65", "", "Unknown", "unknown-rating"),
    new Manhwa("The Dark Magician Transmigrates After 66666 Years", "https://www.asurascans.com/manga/1672760368-the-dark-magician-transmigrates-after-66666-years/", "55", "(3/13/2023): 79", "", "84", ""),
    new Manhwa("I Am The Fated Villain", "https://www.asurascans.com/manga/1672760368-i-am-the-fated-villain/", "31", "(2/17/2023): 69", "", "Unknown", "unknown-rating"),
    new Manhwa("Reformation of the Deadbeat Noble", "https://www.asurascans.com/manga/1672760368-reformation-of-the-deadbeat-noble/", "86", "(3/13/2023): 86 (S2 End)", "", "91", ""),
    new Manhwa("Your Talent is Mine", "https://www.asurascans.com/manga/1672760368-your-talent-is-mine/", "32", "(2/17/2023): 48", "", "Unknown", "unknown-rating"),
    new Manhwa("Book of Lagier", "https://www.asurascans.com/manga/1672760368-the-book-of-lagier/", "35", "(2/17/2023): 64", "", "Unknown", "unknown-rating"),
    new Manhwa("Survival Story of a Sword King in a Fantasy World", "https://survivaloftheswordking.com/", "127", "(2/17/2023): 156", "", "91", ""),
    new Manhwa("It Starts with a Kingpin Account", "https://aquamanga.com/read/it-starts-with-a-kingpin-account/", "147", "(2/17/2023): 200", "", "85", ""),
    new Manhwa("Dungeon Reset", "https://reaperscans.com/comics/8713-dungeon-reset", "59", "(2/17/2023): 146", "", "91", ""),
    new Manhwa("The S-Classes that I Raised", "https://www.asurascans.com/manga/1672760368-the-s-classes-that-i-raised/", "30", "(2/17/2023): 73", "", "Unknown", "unknown-rating"),
    new Manhwa("Second Life Ranker", "https://w3.secondliferanker.com/", "138", "(2/17/2023): 147", "", "92", ""),
    new Manhwa("The Lord’s Coins Aren’t Decreasing?!", "https://www.asurascans.com/manga/1672760368-the-lords-coins-arent-decreasing/", "87", "(3/13/2023): 87", "", "90", ""),
    new Manhwa("Return of the Unrivaled Spear Knight", "https://www.asurascans.com/manga/1672760368-return-of-the-unrivaled-spear-knight/", "85", "(3/13/2023): 85", "", "89", ""),
    new Manhwa("Reincarnation of the Suicidal Battle God", "https://www.asurascans.com/manga/1672760368-reincarnation-of-the-suicidal-battle-god/", "68", "(4/8/2023): 71", "", "90", ""),
    new Manhwa("Return of the Broken Constellation", "https://reaperscans.com/comics/3323-return-of-the-broken-constellation", "29", "(2/17/2023): 60.5", "", "89", ""),
    new Manhwa("Demonic Emperor", "https://manhuaplus.com/manga/demon-magic-emperor/", "300", "(2/17/2023): 362", "Light novel = 264", "89", ""),
    new Manhwa("Seoul Station Necromancer", "https://reaperscans.com/comics/6767-seoul-station-necromancer", "48", "(2/17/2023): 80", "", "89", ""),
    new Manhwa("Soul Land 4", "https://www.webnovel.com/comic/soul-land-iv-ultimate-fighting_13589756106428301", "305.5", "(2/17/2023): 357", "", "89", ""),
    new Manhwa("Leveling with the Gods", "https://reaperscans.com/comics/6198-leveling-with-the-gods", "73", "(4/8/2023): 75", "", "90", ""),
    new Manhwa("I'm the Max Level Newbie/Solo Max-Level Newbie", "https://reaperscans.com/comics/2225-im-the-max-level-newbie", "78", "(3/13/2023): 90", "", "91", ""),
    new Manhwa("Omniscient Reader", "https://www.asurascans.com/manga/omniscient-readers-viewpoint/", "131", "(2/17/2023): 145", "", "94", ""),
    new Manhwa("The Advanced Player of the Tutorial Tower", "https://www.asurascans.com/manga/1672760368-the-tutorial-tower-of-the-advanced-player/", "106", "(2/17/2023): 151", "", "90", ""),
    new Manhwa("Return of the 8th Class Magician", "https://www.asurascans.com/manga/1672760368-return-of-the-8th-class-magician/", "73?", "Completed: 81", "", "90", "completed"),
    new Manhwa("Return of the Disaster Class Hero", "https://www.asurascans.com/manga/1672760368-return-of-the-disaster-class-hero/", "36", "(2/17/2023): 48.5", "", "90", ""),
    new Manhwa("Overgeared", "https://reaperscans.com/comics/4073-overgeared", "123", "(2/17/2023): 164", "", "93", ""),
    new Manhwa("Mercenary Enrollment", "https://reaperscans.com/comics/6251-mercenary-enrollment", "127", "(4/8/2023): 130", "", "92", ""),
    new Manhwa("The Great Mage Returns After 4000 Years", "https://reaperscans.com/comics/7319-the-great-mage-returns-after-4000-years", "123", "(2/17/2023): 157", "", "90", ""),
    new Manhwa("Nanomachine", "https://nano-machine.online/", "129", "(2/17/2023): 142", "", "92", ""),
    new Manhwa("The Max Level Hero has Returned", "https://maxlevelherohasreturned.com/", "104", "(2/17/2023): 118", "", "90", ""),
    new Manhwa("The Beginning After the End", "https://thebeginningaftertheend.online/", "160", "(2/17/2023): 175", "Light Novel = ", "95", ""),
    new Manhwa("Return of the Mount Hua Sect", "https://www.asurascans.com/manga/1672760368-return-of-the-mount-hua-sect/", "72", "(2/17/2023): 72.5", "", "96", ""),
    new Manhwa("Leviathan", "https://leviathanmanga.com/", "Completed", "Completed: 215", "Kinda dark and scary", "90", "completed"),
    new Manhwa("Mookhyang The Origin", "href", "Completed", "Completed: 47", "Weird cliffhanger since it's a prequel", "87", "completed"),
    new Manhwa("I am the Sorcerer King", "https://thesorcererking.online/", "Completed", "Completed: 144", "", "90", "completed"),
    new Manhwa("Solo Leveling", "https://leveling-solo.org/", "Completed (Main) | Side Story: 184", "Completed (main): 179", "New Side Stories!! (2/22/2023): 186", "96", "completed")
];

// Get a reference to the "manhwa-list" div
var manhwalistDiv = document.getElementById("manhwa-list");

// Loop through the array and create an <a> element for each Manhwa instance
manhwas.forEach(function(manhwa) {
    var a = document.createElement("a");
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.href = manhwa.href;
    a.classList.add("item");
    if (!manhwa.type == "") {
        a.classList.add(manhwa.type);
    }
    var h3 = document.createElement("h3");
    h3.textContent = manhwa.title;
    a.appendChild(h3);

    var p1 = document.createElement("p");
    p1.textContent = "Last Chapter Read: " + manhwa.last_chapter_read;
    a.appendChild(p1);

    var p2 = document.createElement("p");
    p2.textContent = "Newest Chapter " + manhwa.newest_chapter;
    a.appendChild(p2);

    var p3 = document.createElement("p");
    p3.textContent = "Notes: " + manhwa.notes;
    a.appendChild(p3);

    var p4 = document.createElement("p");
    p4.classList.add("rating");
    p4.textContent = "Rating So Far: " + manhwa.rating + "/100";
    a.appendChild(p4);

    var div1 = document.createElement("div");
    div1.classList.add("progress-bar");

    var div2 = document.createElement("div");
    div2.classList.add("progress");
    
    if (manhwa.rating == "Unknown") {
        div2.style.width = "50%";
    } else {
        div2.style.width = manhwa.rating + "%"; // Change the width here to reflect the actual rating percentage
    }
    div2.style.height = "100%";
    var bar_color = "#ff3a3a";
    if (manhwa.rating == "Unknown") {
        bar_color = "#9bf5df";
    } else if (manhwa.rating*1 >= 90) {
        bar_color = "#81ff87";
    } else if (80 <= manhwa.rating*1 && manhwa.rating*1 < 90) {
        bar_color = "#ccfd5a";
    } else if (70 <= manhwa.rating*1 && manhwa.rating*1 < 80) {
        bar_color = "#fd9e68";
    } else if (60 <= manhwa.rating*1 && manhwa.rating*1 < 70) {
        bar_color = "#f86a6a";
    }
    div2.style.backgroundColor = bar_color;
    div2.style.borderRadius = "5px";
    div1.appendChild(div2);

    a.appendChild(div1);
    
    // Add the new HTML element to the "manhwa-list" div
    manhwalistDiv.appendChild(a);
});

let all_manhwaDiv = document.getElementById("all-manhwa");
let lastchildDiv = all_manhwaDiv.lastChild;
let total = document.createElement("p");
total.setAttribute("id", "count");
total.textContent = "Total Count: " + manhwas.length;
all_manhwaDiv.insertBefore(total, lastchildDiv.previousSibling);
