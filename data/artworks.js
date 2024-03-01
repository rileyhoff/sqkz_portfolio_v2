const artworks = [
  {
    "id": 0,
    "title": "Bernadett",
    "dimentions": "16 x 20in",
    "medium": "Oil on Canvas",
    "price": 1111,
    "detail_imgs": 4,
    "section": "paint",
    "subsection": 2022,
    "file": "bernadett_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 1,
    "title": "June",
    "dimentions": "12 x 16in",
    "medium": "Oil on Canvas",
    "price": 250,
    "detail_imgs": 2,
    "section": "paint",
    "subsection": 2022,
    "file": "June_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 2,
    "title": "Maia",
    "dimentions": "9 x 12in",
    "medium": "Oil on Canvas",
    "price": 0,
    "detail_imgs": 2,
    "section": "paint",
    "subsection": 2022,
    "file": "maia-2_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 3,
    "title": "November",
    "dimentions": "30 x 30in",
    "medium": "Oil on Canvas",
    "price": 500,
    "detail_imgs": 6,
    "section": "paint",
    "subsection": "q",
    "file": "November_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 4,
    "title": "Bobcat",
    "dimentions": "9 x 12in",
    "medium": "Oil with gold dust on Board",
    "price": 100,
    "detail_imgs": 1,
    "section": "paint",
    "subsection": 2022,
    "file": "bobcat_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 5,
    "title": "Mew",
    "dimentions": "9 x 12in",
    "medium": "Oil on Board",
    "price": 150,
    "detail_imgs": 1,
    "section": "paint",
    "subsection": "q",
    "file": "mew_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 6,
    "title": "Silver Tree",
    "dimentions": "9 x 12in",
    "medium": "Oil on Paper",
    "price": 100,
    "detail_imgs": 0,
    "section": "paint",
    "subsection": 2022,
    "file": "Silver-tree_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 7,
    "title": "Ioborda",
    "dimentions": "9 x 12in",
    "medium": "Oil on Canvas",
    "price": 250,
    "detail_imgs": 2,
    "section": "paint",
    "subsection": 2022,
    "file": "Ioborda_SQKZ_Riley-Hoff.jpg"
  },
  // {
  //   "id": 8,
  //   "title": "Iceland",
  //   "dimentions": "8 x 36in",
  //   "medium": "Oil on Canvas",
  //   "price": 300,
  //   "detail_imgs": 6,
  //   "section": "paint",
  //   "subsection": 2022,
  //   "file": "Iceland_SQKZ_Riley-Hoff.jpg"
  // },
  {
    "id": 9,
    "title": "Untitled",
    "dimentions": "26 x 26in",
    "medium": "Oil on Canvas",
    "price": 0,
    "detail_imgs": 3,
    "section": "paint",
    "subsection": 2022,
    "file": "Untitled-sunsets_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 10,
    "title": "Sunday",
    "dimentions": "18 x 12in",
    "medium": "Oil on Canvas",
    "price": 250,
    "detail_imgs": 3,
    "section": "paint",
    "subsection": 2022,
    "file": "Sunday_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 11,
    "title": "turns",
    "dimentions": "16 x 20in",
    "medium": "Oil on Canvas",
    "price": 1,
    "detail_imgs": 3,
    "section": "paint",
    "subsection": 2022,
    "file": "turns_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 12,
    "title": "Bowl",
    "dimentions": "14 x 14in",
    "medium": "Oil on Canvas",
    "price": 100,
    "detail_imgs": 2,
    "section": "paint",
    "subsection": 2022,
    "file": "bowl_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 13,
    "title": "Brothers",
    "dimentions": "9 x 12in",
    "medium": "Oil on Paper",
    "price": 75,
    "detail_imgs": 1,
    "section": "paint",
    "subsection": 2022,
    "file": "Brothers_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 14,
    "title": "Sandy Beach",
    "dimentions": "16 x 20in",
    "medium": "Oil on Canvas",
    "price": 1111,
    "detail_imgs": 2,
    "section": "paint",
    "subsection": 2022,
    "file": "Sandy-beach_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 15,
    "title": "Self Portrait with Olive Branch",
    "dimentions": "16 x 20in",
    "medium": "Oil on Canvas",
    "price": 250,
    "detail_imgs": 3,
    "section": "paint",
    "subsection": 2022,
    "file": "Self-portrait-olive_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 16,
    "title": "Central Park",
    "dimentions": "8 x 12in",
    "medium": "Oil on Canvas",
    "price": 150,
    "detail_imgs": 1,
    "section": "paint",
    "subsection": 2022,
    "file": "Central-park_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 17,
    "title": "Swan II",
    "dimentions": "10 x 14in",
    "medium": "Oil on Canvas",
    "price": 0,
    "detail_imgs": 2,
    "section": "paint",
    "subsection": 2022,
    "file": "swan2_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 18,
    "title": "ACIHR",
    "dimentions": "8 x 12in",
    "medium": "Oil on Canvas",
    "price": 200,
    "detail_imgs": 2,
    "section": "paint",
    "subsection": 2022,
    "file": "ACIHR_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 19,
    "title": "Fall",
    "dimentions": "8 x 12in",
    "medium": "Oil on Canvas",
    "price": 200,
    "detail_imgs": 1,
    "section": "paint",
    "subsection": 2022,
    "file": "Fall_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 20,
    "title": "Gelle Fra",
    "dimentions": "8 x 10in",
    "medium": "Oil on Board",
    "price": 0,
    "detail_imgs": 1,
    "section": "paint",
    "subsection": "q",
    "file": "GelleFra_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 21,
    "title": "Untitled.",
    "dimentions": "8 x 10in",
    "medium": "Oil on Board",
    "price": 0,
    "detail_imgs": 4,
    "section": "paint",
    "subsection": "q",
    "file": "untitledportrait1_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 22,
    "title": "Gigi with cut on her paw",
    "dimentions": "",
    "medium": "Oil on Board",
    "price": 0,
    "detail_imgs": 1,
    "section": "paint",
    "subsection": 2022,
    "file": "gigi-red-carpet_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 23,
    "title": "Summer in Winter",
    "dimentions": "",
    "medium": "Oil on Canvas",
    "price": 200,
    "detail_imgs": 1,
    "section": "paint",
    "subsection": "q",
    "file": "summerinwinter_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 24,
    "title": "Self Portrait with Guitar",
    "dimentions": "9 x 12in",
    "medium": "Oil on Paper",
    "price": 50,
    "detail_imgs": 1,
    "section": "paint",
    "subsection": 2022,
    "file": "self-portrait-with-guitar_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 25,
    "title": "Shell",
    "dimentions": "16 x 20in",
    "medium": "Oil on Canvas",
    "price": 250,
    "detail_imgs": 1,
    "section": "paint",
    "subsection": 2022,
    "file": "Shell_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 26,
    "title": "Maia",
    "dimentions": "9 x 12in",
    "medium": "Oil on Paper",
    "price": 0,
    "detail_imgs": 1,
    "section": "paint",
    "subsection": 2022,
    "file": "Maia_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 27,
    "title": "Dress Shoes",
    "dimentions": "9 x 12in",
    "medium": "Oil on Board",
    "price": 100,
    "detail_imgs": 2,
    "section": "paint",
    "subsection": 2022,
    "file": "dress-shoes_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 28,
    "title": "Hawaii",
    "dimentions": "15 x 19in",
    "medium": "Oil on Canvas",
    "price": 250,
    "detail_imgs": 3,
    "section": "paint",
    "subsection": 2022,
    "file": "Hawaii_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 29,
    "title": "Lands End II",
    "dimentions": "16 x 20in",
    "medium": "Oil on Canvas",
    "price": 250,
    "detail_imgs": 3,
    "section": "paint",
    "subsection": 2022,
    "file": "Lands-End-2_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 30,
    "title": "Gaze",
    "dimentions": "",
    "medium": "Oil on Canvas",
    "price": 150,
    "detail_imgs": 1,
    "section": "paint",
    "subsection": 2022,
    "file": "gaze_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 31,
    "title": "Sunburn",
    "dimentions": "22 x 18in",
    "medium": "Oil on Canvas",
    "price": 200,
    "detail_imgs": 3,
    "section": "paint",
    "subsection": "q",
    "file": "sunburn_SKQZ_Riley-Hoff.jpg"
  },
  {
    "id": 32,
    "title": "Pacific St",
    "dimentions": "24 x 30in",
    "medium": "Acrylic on Canvas",
    "price": 500,
    "detail_imgs": 2,
    "section": "paint",
    "subsection": 2019,
    "file": "Pacific-St_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 33,
    "title": "Toile",
    "dimentions": "16 x 20in",
    "medium": "Oil on Canvas",
    "price": 500,
    "detail_imgs": 5,
    "section": "paint",
    "subsection": "q",
    "file": "toile_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 34,
    "title": "Grand Army Plaza",
    "dimentions": "11 x 14in",
    "medium": "Oil on Paper",
    "price": 50,
    "detail_imgs": 1,
    "section": "paint",
    "subsection": 2022,
    "file": "grand-army-plaza_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 35,
    "title": "Secondary",
    "dimentions": "",
    "medium": "Oil on Canvas",
    "price": 0,
    "detail_imgs": 1,
    "section": "paint",
    "subsection": "q",
    "file": "secondary_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 36,
    "title": "Iris",
    "dimentions": "8 x 10in",
    "medium": "Oil on Board",
    "price": 150,
    "detail_imgs": 1,
    "section": "paint",
    "subsection": "q",
    "file": "iris_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 37,
    "title": "Untitled.",
    "dimentions": "20 x 17in",
    "medium": "Oil on Canvas",
    "price": 0,
    "detail_imgs": 2,
    "section": "paint",
    "subsection": "q",
    "file": "Untitled-Gold_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 38,
    "title": "Untitled.",
    "dimentions": "11 x 14in",
    "medium": "Oil on Paper",
    "price": 50,
    "detail_imgs": 2,
    "section": "paint",
    "subsection": 2022,
    "file": "cat_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 39,
    "title": "Chantal II",
    "dimentions": "14 x 14in",
    "medium": "Oil on Canvas",
    "price": 150,
    "detail_imgs": 1,
    "section": "paint",
    "subsection": "q",
    "file": "chantal 2_SKQZ_Riley-Hoff.jpg"
  },
  {
    "id": 40,
    "title": "Rodin",
    "dimentions": "8 x 10in",
    "medium": "Oil on Canvas",
    "price": 150,
    "detail_imgs": 2,
    "section": "paint",
    "subsection": "q",
    "file": "rodin_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 41,
    "title": "Bella at Home",
    "dimentions": "",
    "medium": "Oil on Canvas",
    "price": 0,
    "detail_imgs": 2,
    "section": "paint",
    "subsection": 2022,
    "file": "bella-at-home_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 42,
    "title": "Morning",
    "dimentions": "22 x 18in",
    "medium": "Acrylics on Canvas",
    "price": 500,
    "detail_imgs": 2,
    "section": "paint",
    "subsection": "thesis",
    "file": "Morning_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 43,
    "title": "Wine Still Life",
    "dimentions": "8 x 10in",
    "medium": "Oil on Board",
    "price": 1111,
    "detail_imgs": 1,
    "section": "paint",
    "subsection": "q",
    "file": "wine_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 44,
    "title": "Orchids",
    "dimentions": "14 x 18in",
    "medium": "Oil on Canvas Board",
    "price": 500,
    "detail_imgs": 6,
    "section": "paint",
    "subsection": "q",
    "file": "Orchids_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 45,
    "title": "Untitled",
    "dimentions": "12 x 9in",
    "medium": "Oil on Board",
    "price": 100,
    "detail_imgs": 2,
    "section": "paint",
    "subsection": "q",
    "file": "Untitled flower 2_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 46,
    "title": "Chantal",
    "dimentions": "8 x 12in",
    "medium": "Acrylics on Canvas",
    "price": 200,
    "detail_imgs": 2,
    "section": "paint",
    "subsection": 2019,
    "file": "Chantal_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 47,
    "title": "Dog on Tiles",
    "dimentions": "8 x 10in",
    "medium": "Oil on Board",
    "price": 150,
    "detail_imgs": 4,
    "section": "paint",
    "subsection": "q",
    "file": "dogontiles_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 48,
    "title": "Exit 2",
    "dimentions": "18 x 20in",
    "medium": "Oil on Canvas Panel",
    "price": 250,
    "detail_imgs": 1,
    "section": "paint",
    "subsection": "q",
    "file": "Exit2_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 49,
    "title": "Danville",
    "dimentions": "21 x 26in",
    "medium": "Acrylics on Canvas",
    "price": 1111,
    "detail_imgs": 2,
    "section": "paint",
    "subsection": "thesis",
    "file": "Danville_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 50,
    "title": "River",
    "dimentions": "8 x 12in",
    "medium": "Oil on Canvas",
    "price": 150,
    "detail_imgs": 1,
    "section": "paint",
    "subsection": "q",
    "file": "river_SKQZ_Riley-Hoff.jpg"
  },
  {
    "id": 51,
    "title": "Before",
    "dimentions": "8 x 10in",
    "medium": "Oil on Board",
    "price": 1111,
    "detail_imgs": 1,
    "section": "paint",
    "subsection": "q",
    "file": "Before_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 52,
    "title": "Untitled.",
    "dimentions": "14 x 14in",
    "medium": "Oil on Canvas",
    "price": 150,
    "detail_imgs": 1,
    "section": "paint",
    "subsection": "q",
    "file": "late_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 53,
    "title": "Jorja",
    "dimentions": "",
    "medium": "Oil on Paper",
    "price": 100,
    "detail_imgs": 1,
    "section": "paint",
    "subsection": "q",
    "file": "jorja_SKQZ_Riley-Hoff.jpg"
  },
  {
    "id": 54,
    "title": "Palm Oil",
    "dimentions": "14 x 14in",
    "medium": "Oil on Canvas",
    "price": 250,
    "detail_imgs": 1,
    "section": "paint",
    "subsection": "q",
    "file": "Palm-Oil_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 55,
    "title": "Distance",
    "dimentions": "10 x 14in",
    "medium": "Acrylics on Canvas",
    "price": 200,
    "detail_imgs": 0,
    "section": "paint",
    "subsection": 2019,
    "file": "Distance_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 56,
    "title": "Self Portrait with Dells",
    "dimentions": "8 x 10in",
    "medium": "Oil on Board",
    "price": 150,
    "detail_imgs": 1,
    "section": "paint",
    "subsection": "q",
    "file": "Self-Portrait-Dells_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 57,
    "title": "Lavender II",
    "dimentions": "8 x 8in",
    "medium": "Acrylics on Canvas",
    "price": 100,
    "detail_imgs": 3,
    "section": "paint",
    "subsection": "thesis",
    "file": "Lavender II_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 58,
    "title": "Self Portrait at Night",
    "dimentions": "8 x 10in",
    "medium": "Oil on Board",
    "price": 150,
    "detail_imgs": 3,
    "section": "paint",
    "subsection": "q",
    "file": "selfportraitatnight_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 59,
    "title": "Ray",
    "dimentions": "10 x 14in",
    "medium": "Acrylics on Canvas",
    "price": 200,
    "detail_imgs": 0,
    "section": "paint",
    "subsection": 2019,
    "file": "Ray_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 60,
    "title": "Engulf",
    "dimentions": "22 x 18in",
    "medium": "Acrylics on Canvas",
    "price": 0,
    "detail_imgs": 0,
    "section": "paint",
    "subsection": 2018,
    "file": "Engulf_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 61,
    "title": "Lavender",
    "dimentions": "24 x 16in",
    "medium": "Acrylics on Canvas",
    "price": 500,
    "detail_imgs": 3,
    "section": "paint",
    "subsection": "thesis",
    "file": "Lavender_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 62,
    "title": "Communication",
    "dimentions": "30 x 22in",
    "medium": "Acrylics on Canvas",
    "price": 0,
    "detail_imgs": 2,
    "section": "paint",
    "subsection": "thesis",
    "file": "Communication_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 63,
    "title": "Flower Still Life with Lavender",
    "dimentions": "10 x 14in",
    "medium": "Acrylics on Board",
    "price": 1111,
    "detail_imgs": 0,
    "section": "paint",
    "subsection": 2019,
    "file": "Flower Still Life with Lavender_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 64,
    "title": "Here",
    "dimentions": "20 x 20in",
    "medium": "Acrylics on Canvas",
    "price": 500,
    "detail_imgs": 3,
    "section": "paint",
    "subsection": "thesis",
    "file": "Here_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 65,
    "title": "Here II",
    "dimentions": "8 x 8in",
    "medium": "Acrylics on Canvas",
    "price": 100,
    "detail_imgs": 3,
    "section": "paint",
    "subsection": "thesis",
    "file": "Here II_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 66,
    "title": "Knife",
    "dimentions": "",
    "medium": "Oil on Paper",
    "price": 30,
    "detail_imgs": 1,
    "section": "paint",
    "subsection": 2022,
    "file": "knife_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 67,
    "title": "Lands End",
    "dimentions": "",
    "medium": "Oil on Paper",
    "price": 30,
    "detail_imgs": 1,
    "section": "paint",
    "subsection": 2022,
    "file": "lands-end_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 68,
    "title": "Dusk",
    "dimentions": "24 x 18in",
    "medium": "Acrylics on Board",
    "price": 250,
    "detail_imgs": 0,
    "section": "paint",
    "subsection": 2018,
    "file": "Dusk_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 69,
    "title": "Untitled.",
    "dimentions": "9 x 12in",
    "medium": "Oil on Paper",
    "price": 0,
    "detail_imgs": 1,
    "section": "paint",
    "subsection": 2022,
    "file": "bella-blue_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 70,
    "title": "Emerald",
    "dimentions": "",
    "medium": "Acrylics on Paper",
    "price": 200,
    "detail_imgs": 0,
    "section": "paint",
    "subsection": 2018,
    "file": "Emerald_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 71,
    "title": "Arizona II",
    "dimentions": "8 x 8in",
    "medium": "Acrylics on Canvas",
    "price": 100,
    "detail_imgs": 3,
    "section": "paint",
    "subsection": "thesis",
    "file": "Arizona II_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 72,
    "title": "Arizona",
    "dimentions": "22 x 18in",
    "medium": "Acrylics on Canvas",
    "price": 0,
    "detail_imgs": 3,
    "section": "paint",
    "subsection": "thesis",
    "file": "Arizona_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 73,
    "title": "Valentine",
    "dimentions": "10 x 10in",
    "medium": "Acrylics on Canvas",
    "price": 100,
    "detail_imgs": 0,
    "section": "paint",
    "subsection": 2019,
    "file": "Valentine_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 74,
    "title": "Rust",
    "dimentions": "8 x 10in",
    "medium": "Acylics on Canvas",
    "price": 1111,
    "detail_imgs": 1,
    "section": "paint",
    "subsection": 2018,
    "file": "Rust_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 75,
    "title": "Untitled (flowers)",
    "dimentions": "10 x 14in",
    "medium": "Acrylics on Canvas",
    "price": 100,
    "detail_imgs": 0,
    "section": "paint",
    "subsection": 2019,
    "file": "Untitled flowers_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 76,
    "title": "Marble",
    "dimentions": "10 x 8in",
    "medium": "Acrylics on Board",
    "price": 250,
    "detail_imgs": 1,
    "section": "paint",
    "subsection": 2019,
    "file": "Marble_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 77,
    "title": "Untitled (hands)",
    "dimentions": "10 x 14in",
    "medium": "Acrylics on Canvas",
    "price": 100,
    "detail_imgs": 0,
    "section": "paint",
    "subsection": 2019,
    "file": "Untitled hands_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 78,
    "title": "Still Life with Lime",
    "dimentions": "14 x 10in",
    "medium": "Acrylics on Canvas",
    "price": 1111,
    "detail_imgs": 0,
    "section": "paint",
    "subsection": 2019,
    "file": "Still Life with Lime_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 79,
    "title": "Morning II",
    "dimentions": "8 x 8in",
    "medium": "Acrylics on Canvas",
    "price": 100,
    "detail_imgs": 2,
    "section": "paint",
    "subsection": "thesis",
    "file": "Morning II_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 80,
    "title": "Self Portrait with Flowers",
    "dimentions": "22 x 18in",
    "medium": "Acrylics on Canvas",
    "price": 1111,
    "detail_imgs": 0,
    "section": "paint",
    "subsection": 2018,
    "file": "Self Portrait with Flowers_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 81,
    "title": "Gigi",
    "dimentions": "Unknown",
    "medium": "Acrylics on Canvas",
    "price": 0,
    "detail_imgs": 0,
    "section": "paint",
    "subsection": 2019,
    "file": "Gigi_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 82,
    "title": "Runner - Cover Art",
    "dimentions": "8 x 8in",
    "medium": "Charcoal on Paper",
    "price": 100,
    "detail_imgs": 0,
    "section": "draw",
    "subsection": 2024,
    "file": "Runner_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 83,
    "title": "Voices Stuck - Cover Art",
    "dimentions": "8 x 8in",
    "medium": "Charcoal and Graphite on Paper",
    "price": 100,
    "detail_imgs": 0,
    "section": "draw",
    "subsection": 2024,
    "file": "VS_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 84,
    "title": "Avoid the Wait - Cover Art",
    "dimentions": "8 x 8in",
    "medium": "Charcoal and Graphite on Paper",
    "price": 100,
    "detail_imgs": 0,
    "section": "draw",
    "subsection": 2024,
    "file": "ATW_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 85,
    "title": "Untitled",
    "dimentions": "5 x 7in",
    "medium": "Charcoal on Paper",
    "price": 100,
    "detail_imgs": 1,
    "section": "draw",
    "subsection": 2024,
    "file": "cat_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 86,
    "title": "Olive",
    "dimentions": "9 x 12in",
    "medium": "Graphite on Paper",
    "price": 50,
    "detail_imgs": 1,
    "section": "draw",
    "subsection": 2024,
    "file": "olive_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 87,
    "title": "Luxembourg",
    "dimentions": "15 x 24in",
    "medium": "Charcoal on Paper",
    "price": 250,
    "detail_imgs": 2,
    "section": "draw",
    "subsection": 2019,
    "file": "Luxembourg_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 88,
    "title": "Munich",
    "dimentions": "15 x 24in",
    "medium": "Charcoal on Paper",
    "price": 250,
    "detail_imgs": 2,
    "section": "draw",
    "subsection": 2019,
    "file": "Munich_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 89,
    "title": "My bed for a bit",
    "dimentions": "",
    "medium": "Charcoal on Paper",
    "price": 150,
    "detail_imgs": 1,
    "section": "draw",
    "subsection": 2019,
    "file": "My bed for a bit_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 90,
    "title": "Sense",
    "dimentions": "12 x 9in",
    "medium": "Charcoal on Paper",
    "price": 50,
    "detail_imgs": 1,
    "section": "draw",
    "subsection": 2022,
    "file": "Sense_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 91,
    "title": "Nothing.",
    "dimentions": "7.5 x 11in",
    "medium": "Charcoal on Paper",
    "price": 50,
    "detail_imgs": 1,
    "section": "draw",
    "subsection": 2019,
    "file": "Nothing_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 92,
    "title": "Lie",
    "dimentions": "24 x 30in",
    "medium": "Charcoal on Paper",
    "price": 100,
    "detail_imgs": 1,
    "section": "draw",
    "subsection": 2022,
    "file": "lie_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 93,
    "title": "Ilie",
    "dimentions": "9 x 12in",
    "medium": "Charcoal on Paper",
    "price": 0,
    "detail_imgs": 0,
    "section": "draw",
    "subsection": 2019,
    "file": "Ilie_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 94,
    "title": "Swan",
    "dimentions": "11 x 14in",
    "medium": "Charcoal on Paper",
    "price": 1111,
    "detail_imgs": 1,
    "section": "draw",
    "subsection": 2022,
    "file": "swan_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 95,
    "title": "Untitled.",
    "dimentions": "",
    "medium": "Charcoal on Paper",
    "price": 150,
    "detail_imgs": 1,
    "section": "draw",
    "subsection": 2022,
    "file": "Chive_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 96,
    "title": "Aimee",
    "dimentions": "9 x 12in",
    "medium": "Charcoal on Paper",
    "price": 100,
    "detail_imgs": 1,
    "section": "draw",
    "subsection": 2022,
    "file": "Aimee_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 97,
    "title": "Unititled.",
    "dimentions": "22 x 30in",
    "medium": "Charcoal on Paper",
    "price": 200,
    "detail_imgs": 2,
    "section": "draw",
    "subsection": 2019,
    "file": "untitled-palm-tree_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 98,
    "title": "jaiksen",
    "dimentions": "9 x 12in",
    "medium": "Charcoal on Paper",
    "price": 200,
    "detail_imgs": 1,
    "section": "draw",
    "subsection": 2022,
    "file": "jaiksen_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 99,
    "title": "Untitled.",
    "dimentions": "-",
    "medium": "Charcoal on Paper",
    "price": 100,
    "detail_imgs": 1,
    "section": "draw",
    "subsection": 2022,
    "file": "untitledportrait2_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 100,
    "title": "Bella, Profile",
    "dimentions": "11 x 14in",
    "medium": "Charcoal on Paper",
    "price": 0,
    "detail_imgs": 2,
    "section": "draw",
    "subsection": 2022,
    "file": "bella-profile_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 101,
    "title": "Night I",
    "dimentions": "9 x 12in",
    "medium": "Charcoal on Paper",
    "price": 50,
    "detail_imgs": 1,
    "section": "draw",
    "subsection": 2022,
    "file": "night1_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 102,
    "title": "Night II",
    "dimentions": "9 x 12in",
    "medium": "Charcoal on Paper",
    "price": 50,
    "detail_imgs": 1,
    "section": "draw",
    "subsection": 2022,
    "file": "night2_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 103,
    "title": "Night III",
    "dimentions": "9 x 12in",
    "medium": "Charcoal on Paper",
    "price": 50,
    "detail_imgs": 1,
    "section": "draw",
    "subsection": 2022,
    "file": "night3_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 104,
    "title": "Fiat",
    "dimentions": "9 x 12in",
    "medium": "Charcoal and Graphite on Paper",
    "price": 50,
    "detail_imgs": 1,
    "section": "draw",
    "subsection": 2022,
    "file": "Fiat_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 105,
    "title": "Clairity",
    "dimentions": "22 x 30in",
    "medium": "Charcoal on Paper",
    "price": 250,
    "detail_imgs": 0,
    "section": "draw",
    "subsection": 2019,
    "file": "Clairity_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 106,
    "title": "Timeline",
    "dimentions": "30 x 22in",
    "medium": "Charcoal on Paper",
    "price": 250,
    "detail_imgs": 0,
    "section": "draw",
    "subsection": 2019,
    "file": "Timeline_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 107,
    "title": "Raspberries",
    "dimentions": "31 x 22in, Diptych",
    "medium": "Charcoal on Paper",
    "price": 250,
    "detail_imgs": 2,
    "section": "draw",
    "subsection": 2018,
    "file": "Raspberries_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 108,
    "title": "Devotion",
    "dimentions": "22 x 30in",
    "medium": "Charcoal on Paper",
    "price": 250,
    "detail_imgs": 0,
    "section": "draw",
    "subsection": 2018,
    "file": "Devotion_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 109,
    "title": "Fracture",
    "dimentions": "22 x 22in",
    "medium": "Charcoal on Paper",
    "price": 250,
    "detail_imgs": 0,
    "section": "draw",
    "subsection": 2018,
    "file": "Fracture_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 110,
    "title": "Gigi on bed.",
    "dimentions": "9 x 12in",
    "medium": "Charcoal on Paper",
    "price": 0,
    "detail_imgs": 1,
    "section": "draw",
    "subsection": 2019,
    "file": "Gigi-on-Bed_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 111,
    "title": "Still I Wonder Why",
    "dimentions": "20 x 28in",
    "medium": "Charcoal on Paper",
    "price": 100,
    "detail_imgs": 0,
    "section": "draw",
    "subsection": 2018,
    "file": "Still I Wonder Why_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 112,
    "title": "Untitled Sketch",
    "dimentions": "",
    "medium": "Pencil on Paper",
    "price": 0,
    "detail_imgs": 0,
    "section": "draw",
    "subsection": 2019,
    "file": "Untitled Sketch_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 113,
    "title": "Untitled Collage",
    "dimentions": "12 x 12in",
    "medium": "Mixed Media",
    "price": 0,
    "detail_imgs": 4,
    "section": "misc",
    "subsection": "collage",
    "file": "Untitled-Collage_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 114,
    "title": "At Sea",
    "dimentions": "Unknown",
    "medium": "Collage",
    "price": 0,
    "detail_imgs": 0,
    "section": "misc",
    "subsection": "collage",
    "file": "At Sea_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 115,
    "title": "Last Night I",
    "dimentions": "",
    "medium": "Collage, Photography",
    "price": 0,
    "detail_imgs": 0,
    "section": "misc",
    "subsection": "ln",
    "file": "Last Night I_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 116,
    "title": "Last Night II",
    "dimentions": "",
    "medium": "Collage, Photography",
    "price": 0,
    "detail_imgs": 0,
    "section": "misc",
    "subsection": "ln",
    "file": "Last Night II_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 117,
    "title": "Last Night III",
    "dimentions": "",
    "medium": "Collage, Photography",
    "price": 0,
    "detail_imgs": 0,
    "section": "misc",
    "subsection": "ln",
    "file": "Last Night III_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 118,
    "title": "Last Night IV",
    "dimentions": "",
    "medium": "Collage, Photography",
    "price": 0,
    "detail_imgs": 0,
    "section": "misc",
    "subsection": "ln",
    "file": "Last Night IV_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 119,
    "title": "Last Night V",
    "dimentions": "",
    "medium": "Collage, Photography",
    "price": 0,
    "detail_imgs": 0,
    "section": "misc",
    "subsection": "ln",
    "file": "Last Night V_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 120,
    "title": "Last Night VI",
    "dimentions": "",
    "medium": "Collage, Photography",
    "price": 0,
    "detail_imgs": 0,
    "section": "misc",
    "subsection": "ln",
    "file": "Last Night VI_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 121,
    "title": "Teal",
    "dimentions": "2 x 7in",
    "medium": "Collage",
    "price": 0,
    "detail_imgs": 1,
    "section": "misc",
    "subsection": "collage",
    "file": "teal_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 122,
    "title": "Untitled Collage 6",
    "dimentions": "3.5 x 4in",
    "medium": "Collage",
    "price": 0,
    "detail_imgs": 1,
    "section": "misc",
    "subsection": "collage",
    "file": "colage6_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 123,
    "title": "Peitra",
    "dimentions": "Unknown",
    "medium": "Collage",
    "price": 0,
    "detail_imgs": 1,
    "section": "misc",
    "subsection": "collage",
    "file": "peitra_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 124,
    "title": "Untitled Collage 4",
    "dimentions": "Unknown",
    "medium": "Collage",
    "price": 0,
    "detail_imgs": 1,
    "section": "misc",
    "subsection": "collage",
    "file": "collage-IV_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 125,
    "title": "Untitled Collage 1",
    "dimentions": "Unknown",
    "medium": "Collage",
    "price": 0,
    "detail_imgs": 1,
    "section": "misc",
    "subsection": "collage",
    "file": "DSC_0672_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 126,
    "title": "Untitled Collage 7",
    "dimentions": "Unknown",
    "medium": "Collage",
    "price": 0,
    "detail_imgs": 1,
    "section": "misc",
    "subsection": "collage",
    "file": "collage-7_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 127,
    "title": "Untitled.",
    "dimentions": "Digital",
    "medium": "Photography",
    "price": 0,
    "detail_imgs": 0,
    "section": "misc",
    "subsection": "photo",
    "file": "aus-dog_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 128,
    "title": "$$$$",
    "dimentions": "",
    "medium": "Collage, Mixed Media",
    "price": 0,
    "detail_imgs": 0,
    "section": "misc",
    "subsection": "collage",
    "file": "moneyy_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 129,
    "title": "Untitled.",
    "dimentions": "Digital",
    "medium": "Photography",
    "price": 0,
    "detail_imgs": 0,
    "section": "misc",
    "subsection": "photo",
    "file": "glasses_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 130,
    "title": "Untitled.",
    "dimentions": "Digital",
    "medium": "Photography",
    "price": 0,
    "detail_imgs": 0,
    "section": "misc",
    "subsection": "photo",
    "file": "birthday_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 131,
    "title": "Untitled.",
    "dimentions": "Digital",
    "medium": "Photography",
    "price": 0,
    "detail_imgs": 0,
    "section": "misc",
    "subsection": "photo",
    "file": "newspaper_SQKZ_Riley-Hoff-14.jpg"
  },
  {
    "id": 132,
    "title": "Untitled.",
    "dimentions": "Digital",
    "medium": "Photography",
    "price": 0,
    "detail_imgs": 0,
    "section": "misc",
    "subsection": "photo",
    "file": "buttin_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 133,
    "title": "Untitled.",
    "dimentions": "Digital",
    "medium": "Photography",
    "price": 0,
    "detail_imgs": 0,
    "section": "misc",
    "subsection": "photo",
    "file": "Car_Datsun_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 134,
    "title": "Untitled.",
    "dimentions": "Digital",
    "medium": "Photography",
    "price": 0,
    "detail_imgs": 0,
    "section": "misc",
    "subsection": "photo",
    "file": "angel-gigi_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 135,
    "title": "Untitled.",
    "dimentions": "Digital",
    "medium": "Photography",
    "price": 0,
    "detail_imgs": 0,
    "section": "misc",
    "subsection": "photo",
    "file": "Eye_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 136,
    "title": "Untitled.",
    "dimentions": "Digital",
    "medium": "Photography",
    "price": 0,
    "detail_imgs": 0,
    "section": "misc",
    "subsection": "photo",
    "file": "Austria_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 137,
    "title": "Untitled.",
    "dimentions": "Digital",
    "medium": "Photography",
    "price": 0,
    "detail_imgs": 0,
    "section": "misc",
    "subsection": "photo",
    "file": "Subway_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 138,
    "title": "Untitled.",
    "dimentions": "Digital",
    "medium": "Photography",
    "price": 0,
    "detail_imgs": 0,
    "section": "misc",
    "subsection": "photo",
    "file": "Burlington-Self-Portait-1_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 139,
    "title": "Untitled.",
    "dimentions": "Digital",
    "medium": "Photography",
    "price": 0,
    "detail_imgs": 0,
    "section": "misc",
    "subsection": "photo",
    "file": "L_Great-Ocean-Road_SQKZ_Riley-Hoff_50.jpg"
  },
  {
    "id": 140,
    "title": "Untitled.",
    "dimentions": "Digital",
    "medium": "Photography",
    "price": 0,
    "detail_imgs": 0,
    "section": "misc",
    "subsection": "photo",
    "file": "Raspberries-1_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 141,
    "title": "Untitled.",
    "dimentions": "Digital",
    "medium": "Photography",
    "price": 0,
    "detail_imgs": 0,
    "section": "misc",
    "subsection": "photo",
    "file": "Raspberries-2_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 142,
    "title": "Untitled.",
    "dimentions": "Digital",
    "medium": "Photography",
    "price": 0,
    "detail_imgs": 0,
    "section": "misc",
    "subsection": "photo",
    "file": "sprig_SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 143,
    "title": "Self Portrait",
    "dimentions": "Digital",
    "medium": "Photography",
    "price": 0,
    "detail_imgs": 0,
    "section": "misc",
    "subsection": "photo",
    "file": "self Portrait__SQKZ_Riley-Hoff.jpg"
  },
  {
    "id": 144,
    "title": "Untitled.",
    "dimentions": "Digital",
    "medium": "Photography",
    "price": 0,
    "detail_imgs": 0,
    "section": "misc",
    "subsection": "photo",
    "file": "Brooklyn-Great-Army-Plaza_SQKZ_Riley-Hoff.jpg"
  }
]