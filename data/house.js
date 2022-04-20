var houses = `[{
	"name": "Happy Garden",
	"district": "Tuen Mun",
	"square": 1725,
	"type": "rental",
	"address": "Happy Path, Tuen Mun Road, 48264",
	"desc": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos minima eos debitis error nam esse distinctio doloribus excepturi mollitia omnis.",
	"src": "./img/estate1.jpeg",
	"price": 1003,
	"site" : "estate1.html",
	"agent": "Ameila@gmail.com",
	"agentName": "Amelia Lai",
	"comment": "Adorable storybook home in a fabulous location.Just a short stroll to the beach, local markets, restaurants & schools.Peaceful & quiet neighborhood, lush landscaping, lovingly cared for grounds.Sparkling Ocean views from the Master Bedroom Deck. Old school charm equipped with the modern day amenities such as A/C & updated plumbing,forced heating & many upgrades! Garage converted w/permits to be used as an expanded family room for great indoor/outdoor entertaining can easily become an ADU, just add a bath!",
	"commentSite": "estate1-comment.html"
 },
 {
	"name": "Prime Garden",
	"district": "Tuen Mun",
	"square": 600,
	"type": "rental",
	"address": "Stupid Path, Tuen Mun Road, 999",
	"desc": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos minima eos debitis error nam esse distinctio doloribus excepturi mollitia omnis.",
	"src": "./img/estate2.jpeg",
	"price": 7502,
	"site" : "estate2.html",
	"agent": "Age23nt@gmail.com",
	"agentName": "Atkin Wong",
	"comment": "Hardwood floor & slate flooring on first story; remodeled kitchen (black & white) w/quartz counters; remodeled bathrooms w/marble counters; VERY private/secluded setting.",
 	"commentSite": "estate2-comment.html"
 },
 {
 	"name": "Kowloon Garden",
 	"district": "Kowloon City",
	"square": 1725,
	"type": "rental",
	"address": "Anger Path, Kowloon Road, 3324",
	"desc": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos minima eos debitis error nam esse distinctio doloribus excepturi mollitia omnis.",
	"src": "./img/estate3.jpeg",
	"price": 8000,
	"site" : "estate3.html",
	"agent": "Agen51t@gmail.com",
	"agentName": "Joseph Lee",
	"comment": "Move in ready 2 bed / 2 bath condo!  Ground level entry / single story.  Easy floorplan.  Attached garage.  Laundry in unit.  Outdoor patio.  Complex features a great pool / spa area.  Don't miss out!  Please make sure to view the 3D virtual tour.",
 	"commentSite": "estate3-comment.html"
 },

 {
	"name": "Sadness Garden",
	"district": "Kowloon City",
	"square": 600,
	"type": "sale",
	"address": "Unknown Path, Kowloon Road, 4424",
	"desc": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos minima eos debitis error nam esse distinctio doloribus excepturi mollitia omnis.",
	"src": "./img/estate4.jpeg",
	"price": 5502,
	"site" : "estate4.html",
	"agent": "AgenXDD23t@gmail.com",
	"agentName": "Edison Ho",
	"comment": "Avella at Civita offers resort-style amenities with nearby shops and restaurants to come in the heart of Mission Valley. Residents can choose from any of our four contemporary, three-story townhomes with a rooftop terrace to enjoy the city lights. Home designs range from approximately 1,500 - 2,300 square feet with 3-4 bedrooms, 2.5-3.5 bathrooms, and attached 2-car garages. Excellent universities, world-renowned beaches, convenient shopping, upscale dining, and close proximity to major transportation hubs in San Diego make this community an excellent place to call home.",
 	"commentSite": "estate4-comment.html"
 },

 {
	"name": "Cool Garden",
	"district": "Wan Chai",
	"square": 1725,
	"type": "sale",
	"address": "Romance Path, WanChai Road, 32324",
	"desc": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos minima eos debitis error nam esse distinctio doloribus excepturi mollitia omnis.",
	"src": "./img/estate1.jpeg",
	"price": 15002,
	"site" : "estate5.html",
	"agent": "Agen5214t@gmail.com",
	"agentName": "Franky Chu",
	"comment": "AWESOME, Very Well Maintained HOME with Loads of Upgrades Including Real Wood Custom Kitchen Cabinets, Corian Counter Tops with Tile Backsplash, 1 Bedroom/ 1 Bathroom Downstairs with Custom Tile Shower Surround, Great for Mom and Dad, Office Etc. Spacious Living Room with Wood Burning Fireplace and a Wood Mantle, Recessed Lighting and a Large Dining Room Great for Holiday Dinners or Family Gatherings!!! Leased Solar with Low  Electricity Bills and NO QUALIFYING, YES, NO QUALIFYING!!",
 	"commentSite": "estate5-comment.html"
 },

 {
	"name": "WanChai Garden",
	"district": "Wan Chai",
	"square": 300,
	"type": "rental",
	"address": "King Fan Path, WanChai Road, 24424",
	"desc": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos minima eos debitis error nam esse distinctio doloribus excepturi mollitia omnis.",
	"src": "./img/estate2.jpeg",
	"price": 4502,
	"site" : "estate6.html",
	"agent": "Agen5214t@gmail.com",
	"agentName": "Franky Chu",
	"comment": "This bright and open end unit town home style condominium has no units above or below, very private. The interior has been luxuriously updated and feels like a brand new home! Colors are neutral, easy care and in the latest style. The Master Suite occupies the entire 2nd floor and has a charming vaulted ceiling. We love the large private rear yard, perfect for entertaining!",
 	"commentSite": "estate6-comment.html"
 }]`;

 function addFeaturedSection(){
      var data = JSON.parse(houses);
      var target = $(".featured-estate-container");

      $.each(data, function(key, value){
        target.append(`<div class="featured-estate">
                          <div class="estate-img-container">
                            <img src="` + value.src + `" alt="">
                            <a href="` + value.site + `" class="estate-search-icon"><i class="fas fa-eye"></i></a>
                          </div>` +
                         `<div class="featured-estate-info">
                            <h4>` + value.name + `</h4>
                            <p class="desc">` + value.desc + `</p>
                            <div class="featured-estate-footer">
                              <p>` + value.district + `</p>
                              <p>` + value.type + `</p>
                              <p>$` + value.price + `</p>
                            </div>
                         </div>
                        </div>`);
        });
 }
