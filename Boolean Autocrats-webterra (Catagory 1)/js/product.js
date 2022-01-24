var data = Data()

function Data(){
const products = [ {
    "category" : "summer",
    "description" : "Beautiful candle stands and showpiece to brighten up your living space and uplift your mood with a decorative touch to any space.This tea light candle holder can perfectly stay in any room to light up your beautiful home with or without candles giving you a sense of loving and peaceful living atmosphere",
    "id" : 1,
    "image1" : "image/product1.png",
    "image2" : "image/product1-2.png",
    "name" : "3 step tealight candle stand for home decor",
    "old_price" : "1600",
    "price" : "1200",
    "rating" : 5
  }, {
    "category" : "interior",
    "description" : "Made with high durable quality Wood that gives you assurance of stability of item. Style - Antique style umbrella stand cum flower planter.",
    "id" : 2,
    "image1" : "image/product2.png",
    "image2" : "image/product2-2.png",
    "name" : "Wooden Umbrella Holder for the doorstep",
    "old_price" : "1500",
    "price" : "1300",
    "rating" : 5
  }, {
    "category" : "interior",
    "description" : "It is a Multiuse Decor Corner wall unit it can be used as display shelves in living and dining rooms or offices or as utility racks in kitchen.They act as a perfect place for keeping photoframes, small decorative vases, small statues or showpieces etc.",
    "id" : 3,
    "image1" : "image/product3.png",
    "image2" : "image/product3-2.png",
    "name" : "Wooden Corner 2 step Stand for home decor",
    "old_price" : "2200",
    "price" : "1900",
    "rating" : 5
  }, {
    "category" : "interior",
    "description" : "The harmonious combination of star design and walnut wood finished inside makes this industrial pendant light a classy decor, adding a rustic touch to your home.",
    "id" : 4,
    "image1" : "image/product4.png",
    "image2" : "image/product4-2.png",
    "name" : "Star decoractive top-light for decorative lighting",
    "old_price" : "2500",
    "price" : "2350",
    "rating" : 5
  }, {
    "category" : "exterior",
    "description" : "Wooden frame provides reliable strength; collapsible, folding design; compact; folds up to fit inside most car trunks Ideal For Both Adults & Kids, Perfect for Travelling / Camping / Home / Lawn / Terrace",
    "id" : 5,
    "image1" : "image/product5.png",
    "image2" : "image/product5-2.png",
    "name" : "Foldable Lawn chairs 2pc for outdoors and backyards",
    "old_price" : "1500",
    "price" : "1250",
    "rating" : 5
  }, {
    "category" : "gifting",
    "description" : "These baskets are made of 100% solid wood. Every piece is hand finished. Minor imperfections may sometimes occur due to the wood's natural form. These are considered part of the uniqueness and charm of the basket.",
    "id" : 6,
    "image1" : "image/product6.png",
    "image2" : "image/product6-2.png",
    "name" : "Wooden gift baskets for picnic or gifting",
    "old_price" : "3000",
    "price" : "2800",
    "rating" : 5
  }, {
    "category" : "exterior",
    "description" : "Practical outdoor table for a garden, terrace or balcony with space for 4. Easy to fold up in order to save space and is made of durable stained hardwood to last longer before any maintenance is needed. ",
    "id" : 7,
    "image1" : "image/product7.png",
    "image2" : "image/product7-2.png",
    "name" : "Foldable Outdoor table for picnics and outdoors",
    "old_price" : "1000",
    "price" : "950",
    "rating" : 4
  }, {
    "category" : "gifting",
    "description" : "Made of natural wood, our durable serving trays are practical to help you do the tasks you need while also salving nature by being bio-degradable. Adds a natural touch to any room",
    "id" : 8,
    "image1" : "image/product8.png",
    "image2" : "image/product8-2.png",
    "name" : "Trays for gifting to your loved ones and storage",
    "old_price" : "750",
    "price" : "700",
    "rating" : 4.5
  }, {
    "category" : "exterior",
    "description" : "This bench with storage frees up space on your patio or terrace. Besides it storing cushions and other outdoor things for you, it can be used as extra seating – and castors make it easy to move around.",
    "id" : 9,
    "image1" : "image/product9.png",
    "image2" : "image/product9-2.png",
    "name" : "Outdoor Moveable Storage bench for backyards / patios",
    "old_price" : "4000",
    "price" : "3400",
    "rating" : 4
  }, {
    "category" : "exterior",
    "description" : "Fold this sun lounger completely down to lie comfy and tan your back. Or recline it in 5 different positions to relax or read at an angle you like. Made of durable hardwood to add warmth and beauty.",
    "id" : 10,
    "image1" : "image/product10.png",
    "image2" : "image/product10-2.png",
    "name" : "Foldable Sun lounger, brown stained for pools / patios",
    "old_price" : "3000",
    "price" : "2500",
    "rating" : 5
  }, {
    "category" : "exterior",
    "description" : "This 2-seater garden bench is just as great with a garden dining table as on its own in the garden or on the patio. Perfectly matches outdoor tables in the wood style series.",
    "id" : 11,
    "image1" : "image/product11.png",
    "image2" : "image/product11-2.png",
    "name" : "Bench with backrest, outdoor, brown stained for backyards and patios",
    "old_price" : "5000",
    "price" : "4500",
    "rating" : 4.5
  }, {
    "category" : "summer",
    "description" : "Simple Loft Creative Retro Chandelier, Which Enhances The Look Of Your Ceiling With Its Beautiful Art effects, this special chandelier is really eye-catching in your room.",
    "id" : 12,
    "image1" : "image/product12.png",
    "image2" : "image/product12-2.png",
    "name" : "Simple Loft Creative Retro Chandelier",
    "old_price" : "2000",
    "price" : "1750",
    "rating" : 5
  }, {
    "category" : "exterior",
    "description" : "This shelving unit has room for plant pots and water jugs. Perfect on a smaller terrace – and add more units when you like. Made of acacia, just like the matching wood style outdoor furniture.",
    "id" : 13,
    "image1" : "image/product13.png",
    "image2" : "image/product13-2.png",
    "name" : "Outdoor Shelving unit , brown stained for backyards and patios",
    "old_price" : "3000",
    "price" : "2750",
    "rating" : 4.5
  } ]
  
return products
}
export default data;