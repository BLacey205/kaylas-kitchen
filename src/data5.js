
// Cook-along videos: one verified YouTube pick per recipe (checked live via vidIQ on 2026-10-09).
const VIDEOS = {
"fried-chicken": {
"id": "bnaY8RLqnWc",
"ch": "BBQ Southern Style",
"t": "Southern Fried Chicken The Best Way to Make It",
"m": 34
},
"chicken-dumplings": {
"id": "X8snVH3VC04",
"ch": "Bruce Mitchell",
"t": "Southern Chicken and Dumplings with Bruce Mitchell",
"m": 12
},
"shrimp-grits": {
"id": "cjlDBPlTqS0",
"ch": "Smokin' & Grillin with AB",
"t": "Shrimp and Grits",
"m": 8
},
"chicken-fried-steak": {
"id": "0t3ri607SlU",
"ch": "World of Flavor",
"t": "Chicken Fried Steak with Cream Gravy Recipe",
"m": 12
},
"smothered-pork-chops": {
"id": "imO7ef-IQsQ",
"ch": "Island Vibe Cooking",
"t": "How To Make Southern Smothered Pork Chops",
"m": 6
},
"meatloaf": {
"id": "iUgl5BLXcb8",
"ch": "Paula Deen",
"t": "Love & Best Dishes: Old-Fashioned Southern Meatloaf Recipe",
"m": 12
},
"pulled-pork": {
"id": "WYpeLSDLuTk",
"ch": "Smokestack Joe's ",
"t": "The BEST Way To Make Juicy PULLED PORK Eastern Carolina Style",
"m": 22
},
"gumbo": {
"id": "bE_su8zZ51k",
"ch": "Allrecipes",
"t": "How to Make Chicken & Sausage Gumbo",
"m": 11
},
"red-beans-rice": {
"id": "cSie0gBzsMI",
"ch": "Food Network",
"t": "Kenneth Temple's Red Beans and Rice",
"m": 22
},
"jambalaya": {
"id": "yLNWhfOeksI",
"ch": "Smokin' & Grillin with AB",
"t": "How to Make Authentic Jambalaya",
"m": 14
},
"fried-catfish": {
"id": "_mWx5Bz-fxQ",
"ch": "Food Network",
"t": "Kardea Brown's Cornmeal-Crusted Catfish",
"m": 3
},
"pot-roast": {
"id": "gbtnJ3G2zcc",
"ch": "Frannie Jo Savvy Sweet",
"t": "Old-Fashioned Southern Pot Roast",
"m": 18
},
"nashville-hot": {
"id": "mKu7Qg8wFKQ",
"ch": "Joshua Weissman Recipes ",
"t": "The Best Spicy Fried Chicken At Home (Nashville Hot)",
"m": 10
},
"smothered-chicken": {
"id": "kuRtO2Jn83k",
"ch": "Cooking With TK ",
"t": "How To Make Real Southern Smothered Chicken And Gravy| Soul Food Cooking",
"m": 15
},
"chicken-pot-pie": {
"id": "W0y7LsZujFI",
"ch": "Marie's Kitchen",
"t": "Best Ever Chicken Pot Pie from Scratch",
"m": 16
},
"etouffee": {
"id": "qHV57tyt5-g",
"ch": "Bruce Mitchell",
"t": "Crawfish Etouffee with Bruce Mitchell",
"m": 8
},
"oxtails": {
"id": "Bh-lnQLx2PA",
"ch": "Smokin' & Grillin with AB",
"t": "Smothered Oxtails with Brown Gravy",
"m": 18
},
"salmon-croquettes": {
"id": "0WAElrSBI3g",
"ch": "Soul Food Cooking",
"t": "Old School Southern Salmon Patties - How to Make The BEST Salmon Croquettes",
"m": 2
},
"lowcountry-boil": {
"id": "KqtxKcAzUuo",
"ch": "Southern Food Junkie",
"t": "How to make Low Country Boil",
"m": 4
},
"shrimp-po-boy": {
"id": "bwRkunoyJCc",
"ch": "Island Vibe Cooking",
"t": "The BEST Shrimp Po' Boy Recipe",
"m": 9
},
"mac-cheese": {
"id": "7dwFw6R7_dY",
"ch": "Smokin' & Grillin with AB",
"t": "The BEST Southern Baked Mac and Cheese",
"m": 11
},
"collard-greens": {
"id": "bDJsTui-R9c",
"ch": "I Heart Recipes",
"t": "Collard Greens Recipe Using Smoked Turkey",
"m": 5
},
"candied-yams": {
"id": "33zVFId6xr4",
"ch": "Island Vibe Cooking",
"t": "Candied Yams Oven Baked Southern Style",
"m": 6
},
"fried-okra": {
"id": "apW01cZvfQ4",
"ch": "All Wings Everything",
"t": "The Secret to Crispy Southern Fried Okra",
"m": 7
},
"hoppin-john": {
"id": "Wv4sT9n9cyA",
"ch": "Smokin' & Grillin with AB",
"t": "Hoppin' John & Black Eyed Peas - New Years Special Recipe!",
"m": 12
},
"fried-green-tomatoes": {
"id": "aPdGOOeb0D4",
"ch": "Paula Deen",
"t": "Love & Best Dishes: Southern Fried Green Tomatoes Recipe",
"m": 12
},
"potato-salad": {
"id": "-nNxJTdRJmw",
"ch": "April in the kitchen",
"t": "How to Make the Best Southern Potato Salad",
"m": 3
},
"coleslaw": {
"id": "V_x5uO8XYMk",
"ch": "Steph’s Stove by Stephanie Thomas",
"t": "Classic Southern Coleslaw - Sweet Tangy & Delicious - Steph’s Stove",
"m": 16
},
"cornbread-dressing": {
"id": "_2xC8YTtxa8",
"ch": "Camirra's Kitchen",
"t": "The BEST Southern CORNBREAD DRESSING Recipe! Grandma's Secret to the Perfect Dressing!",
"m": 14
},
"green-beans-potatoes": {
"id": "xRUA88nshiU",
"ch": "Soul Food Cooking",
"t": "Green Beans and Potatoes Recipe - How to Make Southern Green Beans and Potatoes",
"m": 4
},
"fried-cabbage": {
"id": "8WVvX82gHpA",
"ch": "Come Sit At My Table",
"t": "Southern Bacon-Fried Cabbage - A MUST for New Year’s Day - A Long Time Southern Custom",
"m": 30
},
"squash-casserole": {
"id": "bk7ZOJx_inQ",
"ch": "Paula Deen",
"t": "Love & Best Dishes: Southern Squash Casserole Recipe",
"m": 14
},
"corn-pudding": {
"id": "67uThoHPB-I",
"ch": "Beverly Black",
"t": "How To Make Southern Corn Pudding",
"m": 8
},
"butter-beans": {
"id": "GskAhJ8D-vM",
"ch": "OLD SCHOOL SOUL FOOD",
"t": "OLD SCHOOL BUTTER BEANS AND HAM HOCKS/SUNDAY DINNER RECIPE IDEAS SEGMENT",
"m": 8
},
"deviled-eggs": {
"id": "7IlVFAlqpG0",
"ch": "Paula Deen",
"t": "Love & Best Dishes: Traditional Southern Deviled Eggs Recipe",
"m": 6
},
"biscuits": {
"id": "ZHr4ne6v49I",
"ch": "Virginia Willis",
"t": "How to Make Classic Southern Buttermilk Biscuits with @ChefVirginiaWillis",
"m": 11
},
"skillet-cornbread": {
"id": "jSzFsETAVaQ",
"ch": "Charlie Andrews",
"t": "How to make Southern Cast Iron Skillet Cornbread",
"m": 8
},
"hushpuppies": {
"id": "6Q1FLISmziI",
"ch": "TheCooknShare",
"t": "Easy Southern Hush Puppies - Down Home Style",
"m": 4
},
"biscuits-gravy": {
"id": "rYf3yfftL_I",
"ch": "The Sauce and Gravy Channel",
"t": "How to Make Sausage Gravy for Biscuits and Gravy",
"m": 6
},
"cheese-grits": {
"id": "XJOx_Lx8qXE",
"ch": "Great Lakes Country",
"t": "Best Cheesy Southern Grits Recipe - Easy Authentic Grits and Cheese from Scratch",
"m": 7
},
"chicken-waffles": {
"id": "UluYgXkuPpc",
"ch": "Mr. Make It Happen",
"t": "How To Make Chicken & Waffles - Fried Chicken & Homemade Waffles Recipe #MrMakeItHappen",
"m": 8
},
"pimento-cheese": {
"id": "J-27Qvnh8ww",
"ch": "Paula Deen",
"t": "Love & Best Dishes: Bobby's Pimiento Cheese Recipe",
"m": 5
},
"peach-cobbler": {
"id": "y49q5y2130o",
"ch": "Paula Deen",
"t": "Love & Best Dishes: Southern Peach Cobbler Recipe",
"m": 14
},
"banana-pudding": {
"id": "0v4Hf0AoED4",
"ch": "Steph’s Stove by Stephanie Thomas",
"t": "Homemade Banana Pudding - Old Fashioned from Scratch Southern Recipe - Steph’s Stove",
"m": 15
},
"pecan-pie": {
"id": "Y9s7rRdExAE",
"ch": "Paula Deen",
"t": "Full Episode Fridays: The Forgotten Crust - Homemade Southern Pecan Pie Recipe",
"m": 21
},
"sweet-potato-pie": {
"id": "uKR9-1bdUKg",
"ch": "Paula Deen",
"t": "Holiday Cooking & Baking Recipes: Old-Fashioned Southern Sweet Potato Pie Recipe",
"m": 13
},
"red-velvet": {
"id": "At4GymbpiSU",
"ch": "Natashas Kitchen",
"t": "RED VELVET CAKE RECIPE with Cream Cheese Frosting",
"m": 12
},
"pound-cake": {
"id": "rWZQrsCLYUs",
"ch": "Paula Deen",
"t": "Love & Best Dishes: Classic Pound Cake Recipe",
"m": 14
},
"hummingbird-cake": {
"id": "U7FRWWd6oQQ",
"ch": "Cakes by MK",
"t": "The most flavor packed HUMMINGBIRD CAKE that stays moist for DAYS!",
"m": 7
},
"sweet-tea": {
"id": "28VYlDkbxzE",
"ch": "Paula Deen",
"t": "Love & Best Dishes: How to Make Sweet Tea Southern Style",
"m": 11
}
};
