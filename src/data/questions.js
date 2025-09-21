// Ratings:
// 0 = No evidence of symptom
// 1 = Mildly distressing/disabling
// 2 = Moderately distressing/disabling
// 3 = Severely distressing/disabling
// 8 = Interviewer unsure
// 9 = Not applicable / not asked

export const questions = [
  // --- Worries & Anxiety ---
  { id: 1,  text: "Do you tend to worry a lot?", category: "Worries" },
  { id: 2,  text: "Do you get frightened or nervous?", category: "Anxiety" },
  { id: 3,  text: "Have you had attacks of fear or panic?", category: "Panic attack" },

  // --- Concentration ---
  { id: 4,  text: "Is your concentration impaired in everyday activities?", category: "Concentration" },

  // --- Depression & Mood ---
  { id: 5,  text: "Have you been sad (depressed) recently?", category: "Depressed mood" },
  { id: 6,  text: "Have you lost interest in things you normally enjoy?", category: "Loss of interests" },
  { id: 7,  text: "Do you feel hopeless about the future?", category: "Hopelessness" },

  // --- Suicidal tendencies ---
  { id: 8,  text: "Have you felt that life wasn't worth living or thought of ending it?", category: "Recent suicidal tendencies" },
  { id: 9,  text: "Do you still have thoughts or plans to end your life?", category: "Present suicidal tendencies" },

  // --- Other key symptoms ---
  { id:10,  text: "Have you had trouble sleeping recently?", category: "Sleep" },
  { id:11,  text: "Do you worry excessively about your health or illness?", category: "Hypochondriasis" },
  { id:12,  text: "Do you check things repeatedly (taps, gas, lights)?", category: "Obsessions/compulsions" },
  { id:13,  text: "Do you have fears (like crowds or going out alone) that you know don’t make sense?", category: "Phobias" },
  { id:14,  text: "Do you believe people talk or laugh about you, or that TV/radio refers to you?", category: "Thought disorder – ideas of reference/delusions" },
  { id:15,  text: "Do you hear things other people cannot hear?", category: "Psychotic symptoms – auditory hallucinations" },
  { id:16,  text: "Do you drink alcohol daily or feel a strong desire to drink?", category: "Alcohol misuse" },
  { id:17,  text: "Do you use drugs not prescribed by a doctor (illicit drugs)?", category: "Drug misuse" },
  { id:18,  text: "Have you had long-standing psychological or emotional difficulties since teenage years?", category: "Personality problems" },
  { id:19,  text: "Have you experienced significant stress such as bereavement or relationship break-up?", category: "Level Of Stress" },
  { id:20,  text: "After a traumatic event, have you suffered from nightmares or flashbacks?", category: "Post-traumatic stress disorder (PTSD)" },
];

// 👉 User-facing rating options, including “Unsure” and “Not Applicable”
export const ratingOptions = [
  { label: "No Symptom",    value: 0 },
  { label: "Mild",          value: 1 },
  { label: "Moderate",      value: 2 },
  { label: "Severe",        value: 3 },
  { label: "Unsure",        value: 8 },
  { label: "Not Applicable",value: 9 },
];

// Example thresholds (you can fine-tune these if clinical guidance differs)
export const scoringRules = {
  Anxiety:      { mild: [1,4],  moderate: [5,8],  severe: [9, Infinity] },
  Depression:   { mild: [1,7],  moderate: [8,16], severe: [17, Infinity] },
  others1to3:   { mild: [1,1],  moderate: [2,2],  severe: [3,3] },
  others1to6:   { mild: [1,2],  moderate: [3,4],  severe: [5,6] },
  others1to9:   { mild: [1,3],  moderate: [4,6],  severe: [7,9] },
};
