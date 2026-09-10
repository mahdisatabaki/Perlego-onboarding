// Demo content for the ICP 1 "Exam in 2 days" prototype.
// Everything here is static. There is no backend, no search, no AI call.

export type Chapter = {
  id: string;
  order: number;
  bookTitle: string;
  bookSubtitle?: string;
  bookAuthor: string;
  year: string;
  format: string;
  chapterTitle: string;
  readMinutes: number;
  excerpt: string;
  pageRef: string;
  spineColor: string;
  isFree: boolean;
  matchedTopics: string[];
  body: string[];
};

export const TOPIC_PRESETS: string[] = [
  "Working memory, encoding, the forgetting curve",
  "Retrieval cues, context-dependent memory, consolidation",
  "Levels of processing, interference theory, long-term potentiation",
];

export const TOTAL_READ_MINUTES = 78;

export const ASSISTANT_ANSWER =
  "Encoding depth, not repetition time, is what predicts retention. Shallow processing of surface features produces traces that fade within hours, while semantic processing that links material to what you already know produces traces that survive for days. For an exam in two days, this means generating your own examples will outperform re-reading the chapter, even if re-reading feels more productive.";

export const ASSISTANT_CITATION = "Cognition: Memory in Practice · Ch. 4, p. 112";

export const CHAPTERS: Chapter[] = [
  {
    id: "c1",
    order: 1,
    bookTitle: "Cognition: Memory in Practice",
    bookSubtitle: "A Student's Guide to Encoding and Retrieval",
    bookAuthor: "R. Halloway",
    year: "2021",
    format: "eBook · PDF",
    chapterTitle: "Encoding and the levels of processing",
    readMinutes: 12,
    pageRef: "Ch. 4, p. 112",
    spineColor: "#714cf9",
    isFree: true,
    matchedTopics: ["encoding", "Levels of processing"],
    excerpt:
      "Craik and Lockhart proposed that memory is not a set of separate stores but a by-product of the depth at which information is processed. Shallow, structural encoding produces fragile traces; semantic encoding, which connects material to existing knowledge, produces traces that survive far longer.",
    body: [
      "The levels-of-processing framework began as a challenge to the modal model of memory. Rather than treating short-term and long-term memory as distinct containers through which information passes, Craik and Lockhart argued that retention is a direct consequence of how deeply an item is analysed at the moment of encoding.",
      "Processing was described along a continuum. At the shallow end, the learner attends only to surface features: whether a word is printed in capitals, how many letters it contains, whether it rhymes with another word. At the deep end, the learner analyses meaning, relating the item to what is already known.",
      "The empirical support came from incidental learning experiments. Participants were given an orienting task that forced a particular level of analysis, and were not told a memory test would follow. Those asked semantic questions consistently recalled far more than those asked structural or phonemic questions, despite spending no longer on the task.",
      "This finding matters because it separates retention from rehearsal time. Simply repeating an item, what Craik and Lockhart called maintenance rehearsal, keeps it available but does not reliably deepen the trace. Elaborative rehearsal, which builds connections to existing knowledge, does.",
      "The framework was not without criticism. The principal objection is circularity: depth is inferred from how well material is remembered, and retention is then explained by depth. Attempts to define depth independently, through processing time or physiological measures, have been only partially successful.",
      "A more productive refinement came from the concept of transfer-appropriate processing. Retention depends not on depth alone but on the match between the processing performed at encoding and the processing demanded at retrieval. A rhyme-based encoding task can outperform a semantic one, provided the test itself is rhyme-based.",
      "For revision, the practical implication is direct. Reading material repeatedly is maintenance rehearsal and produces weaker retention than the effort suggests. Generating your own examples, explaining a concept in your own words, or connecting it to material you already know are all forms of elaborative encoding, and they produce traces that survive to the examination.",
    ],
  },
  {
    id: "c2",
    order: 2,
    bookTitle: "The Working Mind",
    bookSubtitle: "Attention, Capacity and Control",
    bookAuthor: "S. Adeyemi",
    year: "2019",
    format: "eBook · PDF",
    chapterTitle: "Working memory and the central executive",
    readMinutes: 18,
    pageRef: "Ch. 2, p. 41",
    spineColor: "#1ad3b0",
    isFree: false,
    matchedTopics: ["Working memory"],
    excerpt:
      "Baddeley and Hitch replaced the unitary short-term store with a multi-component system: a phonological loop for verbal material, a visuospatial sketchpad for imagery, and a central executive that allocates attention between them. The episodic buffer was added later to explain how the components integrate.",
    body: [
      "The working memory model arose from a simple observation: if short-term memory were a single store, then filling it with a concurrent task should abolish reasoning performance. It does not.",
      "Each component has a measurable signature. The phonological loop shows the word-length effect and is disrupted by articulatory suppression; the sketchpad is disrupted by concurrent spatial tracking but not by irrelevant speech.",
    ],
  },
  {
    id: "c3",
    order: 3,
    bookTitle: "Cognition: Memory in Practice",
    bookSubtitle: "A Student's Guide to Encoding and Retrieval",
    bookAuthor: "R. Halloway",
    year: "2021",
    format: "eBook · PDF",
    chapterTitle: "Forgetting: decay, interference and the retention curve",
    readMinutes: 14,
    pageRef: "Ch. 7, p. 198",
    spineColor: "#ff5400",
    isFree: false,
    matchedTopics: ["the forgetting curve", "interference theory"],
    excerpt:
      "Ebbinghaus's retention curve shows the steepest loss occurring within the first hours after learning, then flattening. Modern accounts attribute most of this loss not to passive decay but to interference from competing material learned before and after the target.",
    body: [
      "Ebbinghaus tested himself on nonsense syllables to remove the influence of prior meaning, and plotted retention against elapsed time. The resulting curve is negatively accelerated: rapid initial loss, then a long shallow tail.",
      "Proactive interference describes earlier learning disrupting later material; retroactive interference describes the reverse. Both are reduced when the competing sets are made contextually distinct.",
    ],
  },
  {
    id: "c4",
    order: 4,
    bookTitle: "Context and Recall",
    bookSubtitle: "Environment, Cue and Memory",
    bookAuthor: "M. Lindqvist",
    year: "2020",
    format: "eBook · PDF",
    chapterTitle: "Retrieval cues and context-dependent memory",
    readMinutes: 16,
    pageRef: "Ch. 5, p. 88",
    spineColor: "#ed6fff",
    isFree: false,
    matchedTopics: ["Retrieval cues", "context-dependent memory"],
    excerpt:
      "The encoding specificity principle holds that a cue aids retrieval to the degree that it was encoded alongside the target. This explains why recall is better in the environment where learning occurred, and why recognition can succeed where free recall fails.",
    body: [
      "Tulving and Thomson demonstrated that a cue present at encoding can outperform a strong semantic associate that was not, even when the associate is more obviously related to the target.",
      "Godden and Baddeley's underwater study remains the clearest environmental demonstration: divers recalled more when tested in the same environment in which they had learned.",
    ],
  },
  {
    id: "c5",
    order: 5,
    bookTitle: "The Working Mind",
    bookSubtitle: "Attention, Capacity and Control",
    bookAuthor: "S. Adeyemi",
    year: "2019",
    format: "eBook · PDF",
    chapterTitle: "Consolidation and long-term potentiation",
    readMinutes: 18,
    pageRef: "Ch. 9, p. 241",
    spineColor: "#ffd400",
    isFree: false,
    matchedTopics: ["consolidation", "long-term potentiation"],
    excerpt:
      "Consolidation describes the process by which a labile trace becomes durable. At the synaptic level this is associated with long-term potentiation; at the systems level, with a gradual transfer of dependence from the hippocampus to the neocortex, much of it occurring during sleep.",
    body: [
      "Long-term potentiation is a persistent strengthening of synaptic transmission following high-frequency stimulation, and is widely treated as a cellular model of learning.",
      "Systems consolidation operates over a far longer timescale, and retrograde amnesia gradients following hippocampal damage provide the principal evidence for it.",
    ],
  },
];

export function getChapter(id: string): Chapter | undefined {
  return CHAPTERS.find((c) => c.id === id);
}

// Splits the user's pasted topics into individual tags.
export function parseTopics(input: string): string[] {
  return input
    .split(/[,\n;]/)
    .map((t) => t.trim())
    .filter(Boolean);
}
