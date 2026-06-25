import { BlogPost } from '@/lib/types';

export const blogPosts: BlogPost[] = [
  {
    id: 'blog-001',
    slug: 'the-story-of-araku-coffee',
    title: 'The Story of Araku: India\'s Most Exciting Coffee',
    subtitle: 'How tribal farmers in Andhra Pradesh created a coffee that won Paris',
    excerpt: 'Nestled in the Eastern Ghats, the Araku Valley produces a coffee so extraordinary that it won a golden cup award in Paris. We spent a week with the farmers to understand why.',
    content: `In the high valleys of the Eastern Ghats, where Andhra Pradesh meets Odisha, there is a coffee story unlike any other in the world.

The Araku Valley sits between 900 and 1100 metres above sea level, its slopes thick with silver oak, jackfruit, and pepper vines that shade the coffee bushes growing beneath. The region is home to sixteen tribal communities — Kondhs, Koya, Savara, and others — who have cultivated these hillsides for generations, though they only began growing Arabica coffee in the 1960s.

What happened next is one of Indian agriculture's great stories.

**The Golden Cup Moment**

In 2019, Araku coffee won the Golden Cup award at the Specialty Coffee Association's World of Coffee event in Paris — the first Indian coffee to ever do so. The judges noted "exceptional clarity, floral complexity, and a unique terroir expression." The bean that won came from tribal farms at 1050 metres altitude, shade-grown, hand-picked, and processed through a meticulous washed method.

The news barely made it to the mainstream Indian press. But within the specialty coffee world, it was seismic.

**The Farming Philosophy**

What makes Araku coffee exceptional isn't just altitude or variety — it's the integrated farming system. Each plot of land grows coffee alongside jackfruit, pepper, banana, and native trees. This polyculture approach creates a natural microclimate that protects the delicate Arabica plants from temperature extremes while adding complexity to the soil.

No synthetic fertilizers are used. The farms are certified organic. And every farmer is part of a cooperative — the Girijan Co-operative Corporation — that guarantees fair prices and collective processing infrastructure.

**Our Journey to Araku**

We made our first trip to Araku Valley in 2020, driving the winding road from Visakhapatnam through the Borra Caves region. Arjun, our founder, sat with a Kondh farmer named Ramaiah for three hours, learning how he identifies the perfect cherry — the precise shade of red, the weight in the palm, the subtle give when pressed.

That visit changed everything about how we think about coffee.

**What It Tastes Like**

Araku Arabica, when processed correctly, offers a cup of extraordinary complexity. In espresso, it presents dark caramel and praline with a hazelnut finish. In a filter preparation, jasmine florals emerge, followed by peach and a long, clean brown-sugar sweetness. As a cold brew steeped 72 hours, the chocolate notes deepen into something almost rum-like.

This is why we offer our Araku Valley Coffee Flight — three preparations, one extraordinary bean, a full education in what Indian coffee can be.

**The Future**

Today, Araku coffee commands prices comparable to high-end Colombian and Ethiopian microlots on the international market. A growing number of European specialty roasters are sourcing from the valley. Japanese buyers have been visiting since 2021.

Meanwhile, the tribal farmers who grow it are receiving a greater share of that value than at any point in history. The cooperative model is working.

At Latte Global Cafe, we'll continue serving Araku as long as the harvest allows. Come and taste what winning a Golden Cup in Paris feels like.`,
    category: 'coffee-culture',
    tags: ['Araku Coffee', 'Single-Origin', 'Specialty Coffee', 'India', 'Andhra Pradesh'],
    author: {
      id: 'author-001',
      name: 'Arjun Naidu',
      role: 'Founder & Head Barista',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&q=80',
      bio: 'Q-Grader, coffee educator, and the person responsible for your morning ritual.',
    },
    publishedAt: '2024-11-01',
    readTime: 8,
    featuredImage: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&h=700&fit=crop&q=80',
    featured: true,
  },
  {
    id: 'blog-002',
    slug: 'anatomy-of-a-perfect-pour-over',
    title: 'Anatomy of a Perfect Pour Over',
    subtitle: 'Every variable matters. Here\'s why we obsess over each one.',
    excerpt: 'From grind size to water temperature, bloom time to pour technique — we break down every variable in the pour-over process and explain why it matters to your cup.',
    content: `A pour-over coffee is perhaps the purest expression of coffee brewing — nothing between the barista and the cup except water, gravity, and attention.

At Latte Global Cafe, we brew twenty to forty pour-overs on a good Saturday. Each one takes four minutes of active attention. We consider each of these variables, every single time.

**The Bean**

Everything begins here. For pour-over, we prefer light to medium roast single-origins that have enough inherent complexity to reward the slow extraction process. A dark roast loses the terroir entirely — you taste the roast, not the origin. We currently offer Coorg and Araku Valley beans for pour-over, each telling a completely different story.

**The Grind**

For V60, we grind to a medium-fine consistency — coarser than espresso, finer than French press. The grind size determines flow rate: too fine and the water pools and over-extracts (bitterness); too coarse and water rushes through and under-extracts (sourness). We recalibrate the grinder every morning.

**Water Temperature**

We heat water to 93°C for most of our pour-overs. This is precise, not approximate. At 85°C, high notes are suppressed; at 97°C, bitter compounds over-extract. We use a temperature-controlled kettle and allow a 30-second rest after the kettle switches off to reach the exact temperature.

**The Bloom**

Before the main pour, we add 50ml of water for 30 grams of coffee and wait 45 seconds. This is the bloom — the CO₂ trapped in fresh coffee expands and escapes, creating a beautiful dome. If you see a vigorous bloom, the coffee is fresh. If nothing happens, the beans are stale. The bloom creates space for even extraction in the pours that follow.

**The Pour**

We pour in slow, concentric circles, starting from the centre and spiraling outward, then back in. This ensures even saturation and prevents channeling. The total brew takes 3 minutes to 3 minutes 30 seconds. Faster means under-extraction. Slower means over-extraction.

**The Cup**

Before serving, we warm the ceramic cup with hot water. A cold cup drops the brew temperature by 8-10°C instantly, altering the flavour. We pour the coffee at 87-89°C, knowing it will cool to 75°C in the cup — the optimal tasting temperature for perceiving the full flavour spectrum.

This is not obsession. This is respect for the farmer who grew the bean.

Come in for our weekend Pour Over Bar session — our baristas will explain every step as they brew for you. Saturday and Sunday, 9am to 12pm.`,
    category: 'coffee-culture',
    tags: ['Pour Over', 'Brewing Technique', 'V60', 'Specialty Coffee', 'Guide'],
    author: {
      id: 'author-003',
      name: 'Rohan Pillai',
      role: 'Senior Barista & Trainer',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&q=80',
      bio: 'Senior Barista, trainer, and the person who taught 400 people how to make latte art.',
    },
    publishedAt: '2024-10-20',
    readTime: 6,
    featuredImage: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&h=700&fit=crop&q=80',
    featured: false,
  },
  {
    id: 'blog-003',
    slug: 'meeras-cardamom-french-toast-recipe',
    title: 'Chef Meera\'s Cardamom French Toast',
    subtitle: 'The full recipe behind our most-requested brunch dish',
    excerpt: 'After hundreds of requests, Chef Meera shares the complete recipe for our signature Cardamom French Toast — including the overnight custard soak technique and saffron compote.',
    content: `Some recipes are secrets. This one belongs to everyone.

After receiving over two hundred messages asking for this recipe — from customers in Vizag, from people who visited once and thought about it for weeks, from a journalist in Mumbai who drove six hours just to eat it — Chef Meera decided it was time to share.

Here is the full recipe for our Cardamom French Toast with Saffron-Mango Compote.

**Serves: 4 | Prep: 15 min + overnight | Cook: 20 min**

**For the Custard:**
- 4 free-range eggs, room temperature
- 240ml whole milk
- 80ml heavy cream
- 45g raw cane sugar
- 1 tsp pure vanilla bean paste (not extract)
- 1.5 tsp freshly ground green cardamom (approximately 12 pods)
- Pinch of fine sea salt

**For the Toast:**
- 8 thick slices (2.5cm) artisan brioche loaf, ideally day-old
- 60g clarified brown butter (ghee works beautifully)
- Cardamom sugar for dusting (1 tsp ground cardamom + 2 tbsp caster sugar)

**For the Saffron-Mango Compote:**
- 2 large Alphonso mangoes, peeled and diced (Kesar or Dasheri work too)
- A generous pinch of Kashmiri saffron, bloomed in 2 tbsp warm water for 15 minutes
- 2 tbsp raw honey
- Juice of half a lime
- 1 tsp fresh ginger, finely grated

**For the Masala Cream:**
- 200ml double cream
- 1 tbsp icing sugar
- 0.5 tsp ground cardamom
- 2-3 drops rose water

**Method:**

1. **The Night Before:** Whisk together eggs, milk, cream, sugar, vanilla, cardamom, and salt until fully combined. Pour into a wide, shallow dish. Place brioche slices in a single layer and pour custard over. Turn once. Cover and refrigerate overnight. The bread will absorb all the liquid.

2. **The Compote:** Combine mango, saffron water, honey, lime, and ginger in a small saucepan. Cook on medium-low heat for 10 minutes until the mango softens but still holds texture. Taste and adjust honey. Can be made 2 days ahead.

3. **The Masala Cream:** Whip cold double cream with icing sugar, cardamom, and rose water to soft peaks. Refrigerate.

4. **Cooking the Toast:** Heat a heavy cast-iron skillet or non-stick pan on medium-high. Add half the brown butter. Carefully lift the custard-soaked brioche (it will be fragile) and cook for 3-4 minutes per side until deeply golden with a slight char at the edges. Do not rush. The custard must set completely inside.

5. **Serving:** Plate two slices, dust generously with cardamom sugar, add a spoonful of warm compote, and a quenelle of masala cream. A few dried rose petals and a fresh mint sprig if you like.

**Chef Meera's Notes:**
The quality of the brioche is everything. A supermarket loaf will not achieve the result. Find an artisan bakery. Day-old bread absorbs the custard better than fresh. The overnight soak is non-negotiable. And please use real vanilla bean paste — vanilla extract is not the same dish.

We hope this recipe brings our kitchen into yours.`,
    category: 'recipes',
    tags: ['Recipe', 'Brunch', 'French Toast', 'Cardamom', 'Breakfast'],
    author: {
      id: 'author-002',
      name: 'Meera Sharma',
      role: 'Head Chef & Culinary Director',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&q=80',
      bio: 'Le Cordon Bleu Paris trained. Indian Accent apprentice. Now cooking in Vizag with her whole heart.',
    },
    publishedAt: '2024-09-15',
    readTime: 7,
    featuredImage: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=1200&h=700&fit=crop&q=80',
    featured: true,
  },
  {
    id: 'blog-004',
    slug: 'inside-our-coffee-sourcing-philosophy',
    title: 'Inside Our Coffee Sourcing Philosophy',
    subtitle: 'Why we pay above Fair Trade prices, and why it matters',
    excerpt: 'At Latte Global Cafe, we know the names of the farmers behind every bean we serve. Here\'s why direct trade isn\'t just an ethical choice — it\'s what makes the coffee taste better.',
    content: `We have a simple rule at Latte Global Cafe: we will not serve a coffee unless we can tell you exactly where it came from, who grew it, and what they were paid.

This is not a marketing position. It is how we purchase coffee.

**Why Direct Trade?**

The global coffee supply chain is long and complex. A coffee bean might pass through a local middleman, a regional exporter, an international broker, a shipping company, and an importer before reaching a roaster — and then another step to us. Each intermediary takes a margin. By the time the farmer is paid, they typically receive 2-8% of what you pay for your cup.

We find this unacceptable. We also find that it produces worse coffee.

When you work directly with farmers, you can pay for quality. You can return each year. You can fund specific improvements — better drying beds, shade trees, fermentation tanks. And the farmers, knowing they have a committed buyer at a premium price, invest in better practices.

The result is a measurably better bean.

**Our Current Sourcing Partners:**

*Araku Valley, Andhra Pradesh:* We work with the Integrated Tribal Development Agency co-operative through an annual direct purchasing agreement. We pay 40% above the Fair Trade floor price.

*Chikmagalur, Karnataka:* Our house blend Arabica comes from the third-generation Srinivasan family estate in Bababudangiri. Arjun visits twice a year — once at harvest, once post-processing.

*Madikeri, Coorg:* The washed Arabica for our pour-over comes from the Kumar Estate, a 30-acre holding that has been farming coffee for seventy years. We're their only direct buyer in South India.

*Yercaud, Tamil Nadu:* Our Filter Kaapi blend includes chicory grown by a women's collective in Shevaroy Hills.

**The Transparency Promise**

Every coffee on our menu has a QR code on the menu card. Scan it and you'll see: the farm name, the farmer's name (with their permission), the altitude, the processing method, the harvest date, and what we paid per kilogram.

This is the cafe we wanted to be when we opened our doors. We're glad you found us.`,
    category: 'behind-scenes',
    tags: ['Sourcing', 'Direct Trade', 'Sustainability', 'Coffee Farming', 'Transparency'],
    author: {
      id: 'author-001',
      name: 'Arjun Naidu',
      role: 'Founder & Head Barista',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&q=80',
      bio: 'Q-Grader, coffee educator, and the person responsible for your morning ritual.',
    },
    publishedAt: '2024-08-30',
    readTime: 9,
    featuredImage: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1200&h=700&fit=crop&q=80',
    featured: false,
  },
  {
    id: 'blog-005',
    slug: 'hosting-the-perfect-cafe-work-session',
    title: 'How to Make the Most of Your Cafe Work Session',
    subtitle: 'A guide for freelancers, remote workers, and anyone who thinks better with coffee',
    excerpt: 'At Latte Global, we\'ve hosted thousands of productive work sessions. Here\'s what we\'ve observed about the optimal setup, ordering strategy, and etiquette for a great cafe work day.',
    content: `More of our tables are occupied by laptops than any other accessory. We love having you work here. This post is our guide to making that work session everything it should be.

**The Perfect Arrival Time**

Weekday mornings between 9am and 11am are the sweet spot. The breakfast rush has cleared, the lunch crowd hasn't arrived, and the cafe hums at a productive frequency. You'll get your favourite table, faster service, and better wifi.

Avoid: 12-2pm (lunch peak), Saturday mornings (our busiest period).

**The Ordering Strategy**

Start with something that requires attention: a pour-over, a cortado, or our Filter Kaapi. These are drinks that reward you for slowing down and noticing them — a perfect way to ease into focused work.

After two to three hours, switch to something lighter: herbal tea, sparkling water with citrus. This natural rhythm prevents the caffeine crash that comes from front-loading your entire day's intake in the first hour.

Never skip food. The Avocado Chettinad Toast or the Global Buddha Bowl provides sustained energy without the post-lunch slump.

**The Table Etiquette Principles**

At Latte Global, we ask for a minimum order of one beverage per table per hour during peak times (weekends and 12-3pm weekdays). We think this is entirely fair.

Please use headphones for calls and audio. One call in the corner, taken quietly, is fine. A standing meeting at your table, conducted at speaking volume, affects everyone around you.

**The Space**

We have specific zones for different work styles:

*The Library Corner* (indoor, back left): Low noise, single seats and small tables, best for deep focus.

*The Terrace* (outdoor, first floor): Good for calls and collaborative work. Sea breeze included.

*The Long Table* (indoor, centre): 8 seats, ideal for small team sessions or solo workers who like ambient energy.

*The Bar* (ground floor): Single seats facing the brew bar. Watch the baristas work. The most inspiring spot in the house.

We're glad to be your office away from home. See you tomorrow morning.`,
    category: 'lifestyle',
    tags: ['Remote Work', 'Productivity', 'Cafe Life', 'Guide', 'Vizag'],
    author: {
      id: 'author-001',
      name: 'Arjun Naidu',
      role: 'Founder & Head Barista',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&q=80',
      bio: 'Q-Grader, coffee educator, and the person responsible for your morning ritual.',
    },
    publishedAt: '2024-08-10',
    readTime: 5,
    featuredImage: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=1200&h=700&fit=crop&q=80',
    featured: false,
  },
  {
    id: 'blog-006',
    slug: 'vizag-monsoon-menu-2024',
    title: 'Our Monsoon Menu 2024: Celebrating the Rains',
    subtitle: 'New seasonal additions inspired by the Bay of Bengal monsoon',
    excerpt: 'The monsoon transforms Vizag — the air, the light, the mood. Our seasonal menu responds with warming spices, coastal ingredients, and flavors that belong only to this moment.',
    content: `The Vizag monsoon is a kind of magic. The Bay of Bengal turns silver-grey, the palm trees bend in the wind off the water, the air smells of petrichor and salt, and the city slows down to something close to peace.

Every monsoon, our kitchen team reimagines the menu in response to the season. Here is what we've added for 2024.

**Andhra Spiced Corn Soup**

Fresh corn from coastal farms, roasted on an open flame and blended with coconut milk, local spices, and a thread of saffron cream. Served in a hand-thrown ceramic bowl with a wedge of sourdough and a drizzle of chili oil. This is the soup for watching rain from the terrace.

**Rain-and-Rum Cold Brew**

Our 18-hour cold brew concentrate mixed with dark sugar cane jaggery syrup, a squeeze of tamarind, and garnished with a twist of orange peel. Non-alcoholic. The name refers to the monsoon atmosphere, not the contents. Deeply refreshing on a grey afternoon.

**Papdi Chaat Salad**

We had no intention of putting chaat on our menu. Then Meera made this. Heirloom tomatoes, cucumber, pomegranate, crispy papdi, whipped sev, fresh herbs, and a tamarind-date-chili dressing that does things to your palate that should probably be illegal. Our most-photographed dish this season.

**Ginger-Lemon Honey Tea**

Fresh Bangalore ginger, cold-pressed and strained, simmered with raw honey, Meyer lemon zest, and Darjeeling second flush. Available hot and cold. The official drink of Vizag's monsoon.

These dishes are available from July through September, while seasonal ingredients are at their best. 

Come in when it's raining. We'll have a table and a warm cup waiting.`,
    category: 'behind-scenes',
    tags: ['Seasonal Menu', 'Monsoon', 'New Dishes', 'Vizag', 'Chef\'s Table'],
    author: {
      id: 'author-002',
      name: 'Meera Sharma',
      role: 'Head Chef & Culinary Director',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&q=80',
      bio: 'Le Cordon Bleu Paris trained. Indian Accent apprentice. Now cooking in Vizag with her whole heart.',
    },
    publishedAt: '2024-07-15',
    readTime: 5,
    featuredImage: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=1200&h=700&fit=crop&q=80',
    featured: true,
  },
];

export const getFeaturedPosts = (): BlogPost[] =>
  blogPosts.filter((p) => p.featured);

export const getPostBySlug = (slug: string): BlogPost | undefined =>
  blogPosts.find((p) => p.slug === slug);

export const getRelatedPosts = (currentSlug: string, category: string): BlogPost[] =>
  blogPosts
    .filter((p) => p.slug !== currentSlug && p.category === category)
    .slice(0, 3);
