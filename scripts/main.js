
$(function() {

    // Populate using an object literal
	WTF.init({

         heading: [
            "Imagine, in the year 02029:",
            "In the next 0100 years, we'll see:",
			 "This is our future:",
		 ],
		
		response: [
			"What else might the future bring?",
			"Show us another!",
             
		],
		
		template: [
             "@who in @context world, @verb with @adjective @noun.",
			
         ],
		
		who: [
			"Artists",
			 "Lovers",
			 "Thinkers",
			 "New species",
			 "Family",
			 "People",
			 "Wage laborers",
			 "Communities",
			 "Radicals",
			 "Ancestors",
			 "Explorers",
			 "Astronauts",
			 "Scientists",
			 "Agricultural robots",
			 "Change-makers",
			 "Everyone",
			 "Niblings",
			 "Abolitionists",
			 "Youth",
			 "Workers",
			 "Educators",
			 "Global citizens",
			 "Arcologists",
			 "Super humans",
			 "Healers",
			 "Androids",
			 "Solarpunks",
			 "Cultured meat",
			 "Earthlings",
			 "Microbes",
			 "Elders",
			 "Farmers",
			 "Children",
			 "Activist-scholars",
			 "Community organizers",
			 "Algorithms",
			 "Chatbots",
			 "Data",
			 "Activists",
			"Worker co-ops",
			"Community arts organizations",
			"Politicians",
			"Judges",
			"Institutions",
			"Public banks",
			"Citizens' assemblies",
			"Oracles",
			"Journalists",
			"Biomorphic forms",
			"Parameters",
			"Memes",
			"Cities",
			
		],
		
		context: [
            "a weird", 
			"an anticipatory", 
			"a leisurely", 
			"an efflorescent", 
			"a forgiving", 
			"a gezellig", 
			"a strange", 
			"a hygge", 
			"a communal", 
			"a borderless", 
			"a polysemic", 
			"a verdant", 
			"a lush", 
			"a warm", 
			"a soft", 
			"a decentralized",
			"an open-source", 
			"a cooperative", 
			"a collaborative", 
			"a bright", 
			"an empowering", 
			"an inspiring", 
			"a loving", 
			"a healing", 
			"an imaginative", 
			"a tolerant", 
			"a loving", 
			"a comfortable", 
			"a dynamic", 
			"a joyful", 
			"a compelling", 
			"a fulfilling", 
			"a virtual", 
			"an expansive", 
			"a just", 
			"a fun", 
			"an inclusive", 
			"an interconnected", 
			"a rhizomatic", 
			"a sustainable", 
			"a pleasurable", 
			"a post-carceral", 
			"a beautiful", 
			"a friendly", 
			"a community-oriented", 
			"an optimistic", 
			"a compassionate", 
			"an ethical", 
			"a prosperous", 
			"a peaceful", 
			"an equitable", 
			"an egalitarian", 
			"a radically open", 
			"a prefigurative", 
			"an unexpected", 
			"a care-full", 
			"a natural", 
			"a renewable", 
			"a generative", 
			"a holistic", 
			"a safe", 
			"a participatory", 
			"a democratic", 
			"a pluralistic", 
			"an artful", 
			"a delicious", 
			"a liberatory", 
			"an emancipatory", 
			"a post-peak oil",
			"a desirable",
			"a disjunctive",
			"a liminal",
			"a sublime",
			
		],
	
		verb: [
			"laughing",
			"sharing",
			"running",
			"gathering",
			"gardening", "blogging", "harvesting", "organizing", "eating", "dreaming", "philosophizing", "peacemaking", "rendering", "speaking", "dancing", "sleeping", "ritualizing", "smelling", "vacationing", "living", "celebrating", "crafting", "creating", "touching", "tasting", "hearing", "seeing", "telecommunicating", "designing", "piloting", "singing", "browsing", "chatting", "building", "gaming", "hacking", "microblogging", "syncing", "thinking", "helping", "making", "exercising", "reflecting", "thriving", "flourishing", "cooking", "procreating", "flocking",
			"posting", "waging love", "calibrating", "hosting", "conversing", "coexisting", "cohousing", "composting", "relaxing", "maintaining", "compromising", "negotiating", "taking our-selfies", "working in solidarity", "collectivelly bargaining","painting","printmaking","programming","juxtaposed","relating","manifesting","subverting","problematizing","investigating","embracing","aestheticizing","reinventing","unpacking","recontexualizing", "revolutionizing","repurposing","gesturing","mark-making","fluxing","reproducing","oscillating",
		],
		
		adjective: [
			"a healthy", 
			"a four-dimensional", 
			"an audio reactive", 
			"a collaborative", 
			"a time-warping", 
			"a decentralized", 
			"a green", 
			"a polyglottal", 
			"a lab grown", 
			"a biodegradable", 
			"an artisanal", 
			"a bioluminescent", 
			"a musical", 
			"a resilient", 
			"a museum-quality", 
			"an organic", 
			"a plant-based", 
			"a fresh", 
			"a universal", 
			"a composted", 
			"a teleported", 
			"a nourishing", 
			"a sentient", 
			"a post-capitalist", 
			"a cross-platform", 
			"a crowdsourced", 
			"a distributed", 
			"a dynamic", 
			"a generative", 
			"a haptic", 
			"an integrated", 
			"an ultra-lightweight", 
			"a locally-produced", 
			"a decommodified", 
			"a motion controlled", 
			"an open-source", 
			"an optimized", 
			"a micro", 
			"a nano", 
			"a swarming", 
			"a smart", 
			"an emergent", 
			"an adaptive", 
			"a ubiquitous", 
			"an augmented", 
			"a hyper-local", 
			"a distributed", 
			"a neural-sensing", 
			"a transcranial", 
			"a weather-controlled", 
			"a cryogenic", 
			"a hydrogen fuel cell-powered", 
			"a quantum", 
			"a meta", 
			"a synthetic", 
			"a solar", 
			"a solar-powered", 
			"a translucent", 
			"a holographic", 
			"a flexible", 
			"a volumetric", 
			"a retinal", 
			"a bionic", 
			"a head-mounted", 
			"a fusion-powered", 
			"a wireless", 
			"a zero-emission", 
			"an ultra-high-definition", 
			"an ambient", 
			"a sentient", 
			"a intelligent", 
			"a blockchain", 
			"a civic", 
			"a mobile", 
			"a multimodal", 
			"a biometric", 
			"a contactless", 
			"a semantic", 
			"a ocular", 
			"a hybrid", 
			"a nomadic", 
			"a post-gender", 
			"a de-extinct", 
			"a personalized", 
			"a genetic", 
			"a therapeutic", 
			"an animated", 
			"a life-extending", 
			"a stem cell", 
			"a birth controlling", 
			"a regenerative", 
			"a brain-reading", 
			"a stealth", 
			"an ultrasonic", 
			"a responsive", 
			"an autonomous", 
			"a cybernetic", 
			"an in vitro", 
			"a post-scarcity", 
			"a post-human",
			"a post-consumer",
			"an upcycled",
			"a union-made",
			"a neural-networked",
			" a single photon",
			"a realistically utopian",
			"a counter-hegemonic",
			"a poststructural",
			"a feminist","a developmentally-appropriate",
			"a transdisciplinary",
			"an interactive",
			"a metacognitive",
			"a visionary",
			"a neo-Art Nouveau",
			"an auratic",
			"a figurative",
			"a geothermal",
			"a multistrata",
			
		],
		
		noun: [
			"permaculture farm", "wearable", "gestural interface", "camera", "health checkup screen", "infrastructure bank", "tool", "slime kit", "wand", "soil", "tree", "earth", "microchip", "building", "medicinal herb", "water purifier", "gas mask", "moon", "bionic limb", "cyborg", "communication device", "necklace", "submarine", "printer", "food item", "daylight machine", "wind turbine", "vertical farm", "tiny house", "greenhouse", "bioshelter", "replicator", "cloaking device", "carbon nanotube", "computer", "laser", "cryptocurrency", "DNA editor", "wetware accelerator", "space elevator", "apparatus", "digital assistant", "subvocal processor", "womb", "prosthetic", "implant", "being", "lifeform", "vaccine", "transplant", "exoskeleton", "basic income", "work of art", "poem", "pedagogy","zeitgeist","organism","biodigester"
		],
		
	});

    // Populate using a JSON file
    // WTF.init( 'sample.json' );

    // Populate using a Google spreadsheet ID (you must publish it first!)
    // @see https://support.google.com/drive/answer/37579?hl=en
    //WTF.init( '0AvG1Hx204EyydF9ub1M2cVJ3Z1VGdDhTSWg0ZV9LNGc' );

});