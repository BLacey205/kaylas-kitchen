
const METHODS = [
{id:"fried",n:"Fried",eli:"Cooking in hot oil. Deep-frying floats the food in oil; pan-frying uses oil about halfway up. Hot oil turns the coating into a crisp shell that seals the juices in.",
temps:[["Chicken","325–350°F oil"],["Fish, shrimp, okra","350–375°F oil"],["Hushpuppies","350°F oil"],["Chicken is done at","165°F white, 175°F dark"]],
pts:["Pat food dry and rest coated pieces 10–15 minutes before frying.","Use a neutral, high-heat oil: peanut, vegetable or canola.","Fry in small batches and let the oil climb back up between batches.","Drain on a wire rack and salt right away while it's hot."],
combos:[{n:"Classic fried-chicken flour",f:"Chicken, pork chops, steak",sp:["paprika","garlic-powder","onion-powder","black-pepper","cayenne"],x:"flour, salt"},{n:"Cajun cornmeal crust",f:"Catfish, shrimp, okra, green tomatoes",sp:["cajun","black-pepper"],x:"fine cornmeal, a little flour, salt"},{n:"Nashville heat",f:"Chicken",sp:["cayenne","smoked-paprika","garlic-powder"],x:"brown sugar, ladle of hot frying oil"}]},
{id:"baked",n:"Baked and Oven-Roasted",eli:"Dry heat from the oven surrounds the food. It's how you make biscuits, casseroles and cakes, and you can oven-fry breaded food for less mess.",
temps:[["Biscuits","450°F"],["Skillet cornbread","425°F"],["Oven-fried chicken","425°F on a rack"],["Casseroles, mac and cheese","350°F"],["Cakes","325–350°F"]],
pts:["Preheat fully. An oven thermometer shows the real temperature.","Bake on the middle rack for even heat.","Glass and dark pans bake faster, so check early.","For crisp oven-fried food, bake on a rack over a sheet pan and mist the coating with oil."],
combos:[{n:"Herb-roast",f:"Whole chicken, pork loin",sp:["thyme","sage","garlic","black-pepper"],x:"butter, lemon"},{n:"Sweet bake",f:"Yams, cobblers, pies, cakes",sp:["cinnamon","nutmeg","vanilla"],x:"brown sugar, butter"},{n:"Cheesy casserole",f:"Mac and cheese, squash, broccoli",sp:["smoked-paprika","black-pepper"],x:"sharp cheddar, buttered crackers"}]},
{id:"grilled",n:"Grilled",eli:"Strong, direct heat from below. It cooks fast and adds char and a little smoke. Best for chops, chicken pieces, shrimp, vegetables and fruit.",
temps:[["Hot side of grill","450–550°F"],["Cool side of grill","300–350°F"],["Pork chops are done at","145°F, then rest"],["Chicken thighs are done at","175°F"],["Shrimp","2–3 min per side"]],
pts:["Set up two zones: sear over the hot side, finish over the cool side.","Clean and oil the grates so food releases.","Brush sugary barbecue sauce on only in the last few minutes so it doesn't burn.","Use a thermometer and rest meat 5 minutes."],
combos:[{n:"Southern barbecue rub",f:"Chicken, pork chops, ribs",sp:["paprika","black-pepper","garlic-powder","cayenne"],x:"brown sugar, salt"},{n:"Cajun butter",f:"Shrimp, fish, corn",sp:["cajun","garlic"],x:"melted butter, lemon"},{n:"Herb and garlic",f:"Steak, vegetables",sp:["thyme","garlic","black-pepper"],x:"olive oil, salt"}]},
{id:"smoked",n:"Smoked",eli:"Low heat and wood smoke over many hours. Tough, fatty cuts turn tender and pick up a deep smoky flavor and a pink smoke ring.",
temps:[["Smoker temperature","225–275°F"],["Pork shoulder is done at","195–203°F"],["Ribs","225–250°F, 5–6 hrs"],["Whole chicken","275°F to 165°F in the breast"],["Brisket is done at","200–205°F"]],
pts:["Use hardwood: hickory or oak for pork and beef, apple or pecan for chicken.","Thin, blue smoke is good. Thick white smoke tastes bitter.","Expect the stall around 160°F. Wrap in foil or butcher paper to push through.","Season the night before so the rub soaks in."],
combos:[{n:"Carolina pork",f:"Pork shoulder, ribs",sp:["paprika","black-pepper","cayenne","garlic-powder","red-pepper-flakes"],x:"brown sugar, salt; finish with vinegar sauce"},{n:"Smoked poultry",f:"Whole chicken, turkey, wings",sp:["poultry","smoked-paprika","garlic-powder"],x:"butter, salt"},{n:"Texas-style beef",f:"Brisket, beef ribs",sp:["black-pepper","garlic-powder"],x:"coarse salt (salt, pepper, garlic)"}]},
{id:"braised",n:"Braised and Smothered",eli:"Brown the meat, then cook it slowly, covered, in a little liquid or gravy until it's fork-tender. Smothering is the Southern version, usually in onion gravy.",
temps:[["Oven braise","300–325°F, covered"],["Stovetop","Bare simmer, small bubbles"],["Chuck roast, oxtails","3–4 hrs"],["Chicken thighs, pork chops","40–60 min"]],
pts:["Brown the meat well first. The browned bits flavor the gravy.","Deglaze the pan with stock and scrape up everything stuck to it.","Liquid should come partway up the meat, not cover it.","Keep it at a bare simmer. A hard boil makes meat stringy and dry."],
combos:[{n:"Onion gravy",f:"Chicken, pork chops, steak",sp:["black-pepper","garlic","thyme","poultry"],x:"sliced onion, stock, a light roux"},{n:"Island-style",f:"Oxtails, beef stew",sp:["allspice","thyme","garlic","black-pepper"],x:"tomato paste, Worcestershire"},{n:"Creole tomato",f:"Chicken, shrimp",sp:["cajun","bay","thyme","garlic"],x:"trinity, diced tomatoes"}]},
{id:"simmered",n:"Boiled and Simmered",eli:"Cooking in liquid. A rolling boil cooks seafood boils, pasta and eggs fast. A gentle simmer slowly turns beans, greens and gumbo rich and tender.",
temps:[["Rolling boil","212°F, big bubbles"],["Simmer","185–200°F, small bubbles"],["Dried beans","2–3 hrs at a simmer"],["Stone-ground grits","30–45 min at a low simmer"]],
pts:["Season boil water heavily. It should taste like the sea.","Simmer beans gently so the skins don't split.","Skim off fat and foam as it rises.","Add quick-cooking things like shrimp last."],
combos:[{n:"Seafood boil",f:"Shrimp, crab, crawfish, corn, potatoes",sp:["old-bay","bay"],x:"lemons, onion, salt"},{n:"Pot liquor",f:"Collards, butter beans, black-eyed peas",sp:["red-pepper-flakes","garlic"],x:"smoked turkey or ham hock, splash of vinegar"},{n:"Cajun pot",f:"Gumbo, red beans, jambalaya",sp:["cajun","thyme","bay","garlic","file"],x:"the trinity"}]},
{id:"skillet",n:"Skillet-Seared and Sautéed",eli:"Fast cooking in a hot pan with a little fat, usually cast iron. Great for shrimp, cabbage, greens, gravies and anything that needs a browned edge.",
temps:[["Pan heat","Medium-high, oil shimmers"],["Shrimp","1–2 min per side"],["Fried cabbage","About 15 min"],["Sausage gravy","Brown 8 min, simmer 5 min"]],
pts:["Preheat the pan before the food goes in.","Don't crowd the pan, or food steams instead of browning.","Leave food alone until it releases on its own.","Make a quick pan sauce from the browned bits with stock, lemon or cream."],
combos:[{n:"Shrimp and grits",f:"Shrimp, fish",sp:["cajun","garlic","green-onion"],x:"bacon fat, lemon"},{n:"Fried cabbage and greens",f:"Cabbage, collards, green beans",sp:["black-pepper","red-pepper-flakes","garlic"],x:"bacon, cider vinegar"},{n:"Breakfast gravy",f:"Sausage, biscuits",sp:["sage","black-pepper","red-pepper-flakes"],x:"pork sausage, milk"}]}
];

const METHOD_OF = {
"fried-chicken":"fried","chicken-dumplings":"simmered","shrimp-grits":"skillet","chicken-fried-steak":"fried","smothered-pork-chops":"braised","meatloaf":"baked","pulled-pork":"smoked","gumbo":"simmered","red-beans-rice":"simmered","jambalaya":"simmered","fried-catfish":"fried","pot-roast":"braised","nashville-hot":"fried","smothered-chicken":"braised","chicken-pot-pie":"baked","etouffee":"simmered","oxtails":"braised","salmon-croquettes":"fried","lowcountry-boil":"simmered","shrimp-po-boy":"fried",
"mac-cheese":"baked","collard-greens":"simmered","candied-yams":"baked","fried-okra":"fried","hoppin-john":"simmered","fried-green-tomatoes":"fried","potato-salad":"simmered","cornbread-dressing":"baked","green-beans-potatoes":"simmered","fried-cabbage":"skillet","squash-casserole":"baked","corn-pudding":"baked","butter-beans":"simmered","deviled-eggs":"simmered",
"biscuits":"baked","skillet-cornbread":"baked","hushpuppies":"fried","biscuits-gravy":"skillet","cheese-grits":"simmered","chicken-waffles":"fried",
"peach-cobbler":"baked","banana-pudding":"simmered","pecan-pie":"baked","sweet-potato-pie":"baked","red-velvet":"baked","pound-cake":"baked","hummingbird-cake":"baked"
};

const ALT = {
"fried-chicken":[["baked","Oven-fried: coat the same way, mist with oil and bake on a rack at 425°F for 40–45 minutes, turning once."],["smoked","Rub with the same spice mix and smoke at 275°F to 165°F in the breast, then crisp the skin over a hot grill."],["grilled","Use the flour seasoning as a dry rub on thighs and grill over two zones to 175°F."]],
"smothered-pork-chops":[["grilled","Grill the chops with the barbecue rub to 145°F and spoon the onion gravy over at the table."],["baked","Brown the chops, cover them with the gravy and bake at 325°F for about 1 hour."]],
"meatloaf":[["smoked","Smoke at 250°F for about 3 hours to 160°F inside, brushing on the glaze for the last 30 minutes."]],
"pulled-pork":[["braised","No smoker? Braise in a covered Dutch oven with 1 cup stock at 300°F for 5–6 hours. Add smoked paprika to the rub."]],
"pot-roast":[["smoked","Smoke the seasoned chuck at 250°F to about 165°F, then braise it covered with the vegetables until tender."]],
"smothered-chicken":[["baked","Brown the chicken, pour the gravy over, cover and bake at 350°F for 45 minutes."],["grilled","Grill the thighs with poultry seasoning and serve with the onion gravy made on the stove."]],
"fried-catfish":[["baked","Bake the cornmeal-coated fillets on an oiled rack at 425°F for 15–18 minutes."],["skillet","Blackened: brush with melted butter, coat heavily in Cajun seasoning and sear in a smoking-hot cast-iron skillet 2–3 minutes per side."]],
"shrimp-grits":[["grilled","Skewer Cajun-seasoned shrimp and grill 2 minutes per side, then spoon over the grits."]],
"nashville-hot":[["baked","Oven-fry on a rack at 425°F, then brush on a paste made with melted butter instead of frying oil."],["grilled","Grill the thighs and brush with the hot paste right off the fire."]],
"salmon-croquettes":[["baked","Bake on an oiled sheet pan at 400°F for about 15 minutes, flipping halfway."]],
"shrimp-po-boy":[["grilled","Grill Cajun-seasoned shrimp instead of frying them for a lighter po' boy."]],
"lowcountry-boil":[["grilled","Divide everything into foil packets with butter and Old Bay. Grill or bake at 400°F for 25–30 minutes."]],
"fried-okra":[["grilled","Toss whole pods in oil and Cajun seasoning and grill 2–3 minutes per side."],["baked","Roast sliced okra with oil, salt and cayenne at 425°F for about 20 minutes."]],
"fried-green-tomatoes":[["baked","Bake the breaded slices on an oiled rack at 425°F for about 20 minutes, turning once."]],
"mac-cheese":[["smoked","Smoke the assembled pan at 250°F for about 1 hour for a smoky, golden top."]],
"collard-greens":[["skillet","Quick version: sauté thin ribbons in bacon fat with garlic and red pepper flakes for 8–10 minutes."]],
"candied-yams":[["grilled","Grill thick sweet potato slices until tender and brush with butter, brown sugar and cinnamon."]],
"fried-cabbage":[["grilled","Grill cabbage wedges brushed with bacon fat, black pepper and red pepper flakes."],["smoked","Core a whole cabbage, fill it with butter and seasoning, wrap the bottom in foil and smoke at 250°F for about 3 hours."]],
"chicken-waffles":[["baked","Oven-fry the tenders on a rack at 425°F for 18–20 minutes."]],
"hushpuppies":[["baked","Bake the batter in a greased mini-muffin pan at 425°F for 12–15 minutes."]],
"deviled-eggs":[["smoked","Smoke peeled hard-boiled eggs at 225°F for 30 minutes before you fill them."]],
"peach-cobbler":[["grilled","Bake it in a cast-iron skillet on a covered grill at 350°F, or grill peach halves and spoon the batter topping over in the skillet."]]
};
