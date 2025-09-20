// This one line dynamically finds all your card images
const imageModules = import.meta.glob('../assets/Cards/*.jpg', { eager: true });

// This is your static data: names, keywords, etc.
// Note: I've changed the 'image' key to 'imageFile' to be clearer
const staticTarotData = [
  // Major Arcana
  { id: 'major-00', name: 'The Fool', imageFile: 'RWS_Tarot_00_Fool.jpg', keywords: ['beginnings', 'innocence', 'spontaneity'], type: 'major' },
  { id: 'major-01', name: 'The Magician', imageFile: 'RWS_Tarot_01_Magician.jpg', keywords: ['manifestation', 'resourcefulness', 'power'], type: 'major' },
  { id: 'major-02', name: 'The High Priestess', imageFile: 'RWS_Tarot_02_High_Priestess.jpg', keywords: ['intuition', 'unconscious', 'inner voice'], type: 'major' },
  { id: 'major-03', name: 'The Empress', imageFile: 'RWS_Tarot_03_Empress.jpg', keywords: ['femininity', 'beauty', 'nurturing'], type: 'major' },
  { id: 'major-04', name: 'The Emperor', imageFile: 'RWS_Tarot_04_Emperor.jpg', keywords: ['authority', 'structure', 'control'], type: 'major' },
  { id: 'major-05', name: 'The Hierophant', imageFile: 'RWS_Tarot_05_Hierophant.jpg', keywords: ['tradition', 'conformity', 'morality'], type: 'major' },
  { id: 'major-06', name: 'The Lovers', imageFile: 'RWS_Tarot_06_Lovers.jpg', keywords: ['love', 'harmony', 'relationships'], type: 'major' },
  { id: 'major-07', name: 'The Chariot', imageFile: 'RWS_Tarot_07_Chariot.jpg', keywords: ['control', 'willpower', 'victory'], type: 'major' },
  { id: 'major-08', name: 'Strength', imageFile: 'RWS_Tarot_08_Strength.jpg', keywords: ['courage', 'patience', 'compassion'], type: 'major' },
  { id: 'major-09', name: 'The Hermit', imageFile: 'RWS_Tarot_09_Hermit.jpg', keywords: ['soul-searching', 'introspection', 'solitude'], type: 'major' },
  { id: 'major-10', name: 'Wheel of Fortune', imageFile: 'RWS_Tarot_10_Wheel_of_Fortune.jpg', keywords: ['good luck', 'karma', 'cycles'], type: 'major' },
  { id: 'major-11', name: 'Justice', imageFile: 'RWS_Tarot_11_Justice.jpg', keywords: ['fairness', 'truth', 'cause and effect'], type: 'major' },
  { id: 'major-12', name: 'The Hanged Man', imageFile: 'RWS_Tarot_12_Hanged_Man.jpg', keywords: ['suspension', 'restriction', 'letting go'], type: 'major' },
  { id: 'major-13', name: 'Death', imageFile: 'RWS_Tarot_13_Death.jpg', keywords: ['endings', 'change', 'transformation'], type: 'major' },
  { id: 'major-14', name: 'Temperance', imageFile: 'RWS_Tarot_14_Temperance.jpg', keywords: ['balance', 'moderation', 'patience'], type: 'major' },
  { id: 'major-15', name: 'The Devil', imageFile: 'RWS_Tarot_15_Devil.jpg', keywords: ['bondage', 'addiction', 'materialism'], type: 'major' },
  { id: 'major-16', name: 'The Tower', imageFile: 'RWS_Tarot_16_Tower.jpg', keywords: ['sudden change', 'upheaval', 'chaos'], type: 'major' },
  { id: 'major-17', name: 'The Star', imageFile: 'RWS_Tarot_17_Star.jpg', keywords: ['hope', 'faith', 'rejuvenation'], type: 'major' },
  { id: 'major-18', name: 'The Moon', imageFile: 'RWS_Tarot_18_Moon.jpg', keywords: ['illusion', 'fear', 'anxiety'], type: 'major' },
  { id: 'major-19', name: 'The Sun', imageFile: 'RWS_Tarot_19_Sun.jpg', keywords: ['positivity', 'fun', 'warmth'], type: 'major' },
  { id: 'major-20', name: 'Judgement', imageFile: 'RWS_Tarot_20_Judgement.jpg', keywords: ['rebirth', 'inner calling', 'absolution'], type: 'major' },
  { id: 'major-21', name: 'The World', imageFile: 'RWS_Tarot_21_World.jpg', keywords: ['completion', 'integration', 'accomplishment'], type: 'major' },
  // Wands
  { id: 'wands-01', name: 'Ace of Wands', imageFile: 'Wands01.jpg', keywords: ['inspiration', 'power', 'creation'], type: 'minor', suit: 'wands' },
  { id: 'wands-02', name: 'Two of Wands', imageFile: 'Wands02.jpg', keywords: ['planning', 'decisions', 'progress'], type: 'minor', suit: 'wands' },
  { id: 'wands-03', name: 'Three of Wands', imageFile: 'Wands03.jpg', keywords: ['expansion', 'foresight', 'overseas'], type: 'minor', suit: 'wands' },
  { id: 'wands-04', name: 'Four of Wands', imageFile: 'Wands04.jpg', keywords: ['celebration', 'harmony', 'homecoming'], type: 'minor', suit: 'wands' },
  { id: 'wands-05', name: 'Five of Wands', imageFile: 'Wands05.jpg', keywords: ['conflict', 'competition', 'disagreement'], type: 'minor', suit: 'wands' },
  { id: 'wands-06', name: 'Six of Wands', imageFile: 'Wands06.jpg', keywords: ['success', 'public recognition', 'victory'], type: 'minor', suit: 'wands' },
  { id: 'wands-07', name: 'Seven of Wands', imageFile: 'Wands07.jpg', keywords: ['challenge', 'perseverance', 'protection'], type: 'minor', suit: 'wands' },
  { id: 'wands-08', name: 'Eight of Wands', imageFile: 'Wands08.jpg', keywords: ['speed', 'action', 'air travel'], type: 'minor', suit: 'wands' },
  { id: 'wands-09', name: 'Nine of Wands', imageFile: 'Wands09.jpg', keywords: ['resilience', 'courage', 'persistence'], type: 'minor', suit: 'wands' },
  { id: 'wands-10', name: 'Ten of Wands', imageFile: 'Wands10.jpg', keywords: ['burden', 'responsibility', 'hard work'], type: 'minor', suit: 'wands' },
  { id: 'wands-11', name: 'Page of Wands', imageFile: 'Wands11.jpg', keywords: ['enthusiasm', 'exploration', 'free spirit'], type: 'minor', suit: 'wands' },
  { id: 'wands-12', name: 'Knight of Wands', imageFile: 'Wands12.jpg', keywords: ['energy', 'passion', 'adventure'], type: 'minor', suit: 'wands' },
  { id: 'wands-13', name: 'Queen of Wands', imageFile: 'Wands13.jpg', keywords: ['courage', 'confidence', 'determination'], type: 'minor', suit: 'wands' },
  { id: 'wands-14', name: 'King of Wands', imageFile: 'Wands14.jpg', keywords: ['natural-born leader', 'vision', 'entrepreneur'], type: 'minor', suit: 'wands' },
  // Cups
  { id: 'cups-01', name: 'Ace of Cups', imageFile: 'Cups01.jpg', keywords: ['new love', 'compassion', 'creativity'], type: 'minor', suit: 'cups' },
  { id: 'cups-02', name: 'Two of Cups', imageFile: 'Cups02.jpg', keywords: ['unified love', 'partnership', 'mutual attraction'], type: 'minor', suit: 'cups' },
  { id: 'cups-03', name: 'Three of Cups', imageFile: 'Cups03.jpg', keywords: ['celebration', 'friendship', 'community'], type: 'minor', suit: 'cups' },
  { id: 'cups-04', name: 'Four of Cups', imageFile: 'Cups04.jpg', keywords: ['meditation', 'contemplation', 'apathy'], type: 'minor', suit: 'cups' },
  { id: 'cups-05', name: 'Five of Cups', imageFile: 'Cups05.jpg', keywords: ['regret', 'failure', 'disappointment'], type: 'minor', suit: 'cups' },
  { id: 'cups-06', name: 'Six of Cups', imageFile: 'Cups06.jpg', keywords: ['revisiting the past', 'childhood', 'nostalgia'], type: 'minor', suit: 'cups' },
  { id: 'cups-07', name: 'Seven of Cups', imageFile: 'Cups07.jpg', keywords: ['opportunities', 'choices', 'wishful thinking'], type: 'minor', suit: 'cups' },
  { id: 'cups-08', name: 'Eight of Cups', imageFile: 'Cups08.jpg', keywords: ['disappointment', 'abandonment', 'withdrawal'], type: 'minor', suit: 'cups' },
  { id: 'cups-09', name: 'Nine of Cups', imageFile: 'Cups09.jpg', keywords: ['wishes fulfilled', 'contentment', 'satisfaction'], type: 'minor', suit: 'cups' },
  { id: 'cups-10', name: 'Ten of Cups', imageFile: 'Cups10.jpg', keywords: ['divine love', 'harmonious', 'alignment'], type: 'minor', suit: 'cups' },
  { id: 'cups-11', name: 'Page of Cups', imageFile: 'Cups11.jpg', keywords: ['creative opportunities', 'curiosity', 'possibility'], type: 'minor', suit: 'cups' },
  { id: 'cups-12', name: 'Knight of Cups', imageFile: 'Cups12.jpg', keywords: ['romance', 'charm', 'imagination'], type: 'minor', suit: 'cups' },
  { id: 'cups-13', name: 'Queen of Cups', imageFile: 'Cups13.jpg', keywords: ['compassionate', 'caring', 'intuitive'], type: 'minor', suit: 'cups' },
  { id: 'cups-14', name: 'King of Cups', imageFile: 'Cups14.jpg', keywords: ['emotionally balanced', 'compassionate', 'diplomatic'], type: 'minor', suit: 'cups' },
  // Swords
  { id: 'swords-01', name: 'Ace of Swords', imageFile: 'Swords01.jpg', keywords: ['breakthroughs', 'new ideas', 'mental clarity'], type: 'minor', suit: 'swords' },
  { id: 'swords-02', name: 'Two of Swords', imageFile: 'Swords02.jpg', keywords: ['difficult decisions', 'stalemate', 'avoidance'], type: 'minor', suit: 'swords' },
  { id: 'swords-03', name: 'Three of Swords', imageFile: 'Swords03.jpg', keywords: ['heartbreak', 'emotional pain', 'sorrow'], type: 'minor', suit: 'swords' },
  { id: 'swords-04', name: 'Four of Swords', imageFile: 'Swords04.jpg', keywords: ['rest', 'relaxation', 'meditation'], type: 'minor', suit: 'swords' },
  { id: 'swords-05', name: 'Five of Swords', imageFile: 'Swords05.jpg', keywords: ['conflict', 'disagreement', 'competition'], type: 'minor', suit: 'swords' },
  { id: 'swords-06', name: 'Six of Swords', imageFile: 'Swords06.jpg', keywords: ['transition', 'rite of passage', 'releasing baggage'], type: 'minor', suit: 'swords' },
  { id: 'swords-07', name: 'Seven of Swords', imageFile: 'Swords07.jpg', keywords: ['betrayal', 'deception', 'getting away with something'], type: 'minor', suit: 'swords' },
  { id: 'swords-08', name: 'Eight of Swords', imageFile: 'Swords08.jpg', keywords: ['negative thoughts', 'self-imprisonment', 'victim mentality'], type: 'minor', suit: 'swords' },
  { id: 'swords-09', name: 'Nine of Swords', imageFile: 'Swords09.jpg', keywords: ['anxiety', 'worry', 'fear'], type: 'minor', suit: 'swords' },
  { id: 'swords-10', name: 'Ten of Swords', imageFile: 'Swords10.jpg', keywords: ['painful endings', 'deep wounds', 'betrayal'], type: 'minor', suit: 'swords' },
  { id: 'swords-11', name: 'Page of Swords', imageFile: 'Swords11.jpg', keywords: ['new ideas', 'curiosity', 'thirst for knowledge'], type: 'minor', suit: 'swords' },
  { id: 'swords-12', name: 'Knight of Swords', imageFile: 'Swords12.jpg', keywords: ['ambitious', 'action-oriented', 'fast-thinking'], type: 'minor', suit: 'swords' },
  { id: 'swords-13', name: 'Queen of Swords', imageFile: 'Swords13.jpg', keywords: ['independent', 'unbiased judgement', 'clear boundaries'], type: 'minor', suit: 'swords' },
  { id: 'swords-14', name: 'King of Swords', imageFile: 'Swords14.jpg', keywords: ['mental clarity', 'intellectual power', 'authority'], type: 'minor', suit: 'swords' },
  // Pentacles
  { id: 'pents-01', name: 'Ace of Pentacles', imageFile: 'Pents01.jpg', keywords: ['manifestation', 'new opportunity', 'prosperity'], type: 'minor', suit: 'pentacles' },
  { id: 'pents-02', name: 'Two of Pentacles', imageFile: 'Pents02.jpg', keywords: ['multiple priorities', 'time management', 'adaptability'], type: 'minor', suit: 'pentacles' },
  { id: 'pents-03', name: 'Three of Pentacles', imageFile: 'Pents03.jpg', keywords: ['teamwork', 'collaboration', 'learning'], type: 'minor', suit: 'pentacles' },
  { id: 'pents-04', name: 'Four of Pentacles', imageFile: 'Pents04.jpg', keywords: ['saving money', 'security', 'conservation'], type: 'minor', suit: 'pentacles' },
  { id: 'pents-05', name: 'Five of Pentacles', imageFile: 'Pents05.jpg', keywords: ['financial loss', 'poverty', 'isolation'], type: 'minor', suit: 'pentacles' },
  { id: 'pents-06', name: 'Six of Pentacles', imageFile: 'Pents06.jpg', keywords: ['giving', 'receiving', 'charity'], type: 'minor', suit: 'pentacles' },
  { id: 'pents-07', name: 'Seven of Pentacles', imageFile: 'Pents07.jpg', keywords: ['long-term view', 'sustainable results', 'perseverance'], type: 'minor', suit: 'pentacles' },
  { id: 'pents-08', name: 'Eight of Pentacles', imageFile: 'Pents08.jpg', keywords: ['apprenticeship', 'skill development', 'mastery'], type: 'minor', suit: 'pentacles' },
  { id: 'pents-09', name: 'Nine of Pentacles', imageFile: 'Pents09.jpg', keywords: ['abundance', 'luxury', 'self-sufficiency'], type: 'minor', suit: 'pentacles' },
  { id: 'pents-10', name: 'Ten of Pentacles', imageFile: 'Pents10.jpg', keywords: ['wealth', 'financial security', 'family'], type: 'minor', suit: 'pentacles' },
  { id: 'pents-11', name: 'Page of Pentacles', imageFile: 'Pents11.jpg', keywords: ['manifestation', 'financial opportunity', 'skill development'], type: 'minor', suit: 'pentacles' },
  { id: 'pents-12', name: 'Knight of Pentacles', imageFile: 'Pents12.jpg', keywords: ['hard work', 'productivity', 'routine'], type: 'minor', suit: 'pentacles' },
  { id: 'pents-13', name: 'Queen of Pentacles', imageFile: 'Pents13.jpg', keywords: ['nurturing', 'practical', 'down-to-earth'], type: 'minor', suit: 'pentacles' },
  { id: 'pents-14', name: 'King of Pentacles', imageFile: 'Pents14.jpg', keywords: ['wealth', 'business', 'leadership'], type: 'minor', suit: 'pentacles' },
];

// This part combines the static data with the dynamic image paths
export const tarotData = staticTarotData.map(card => {
  const imagePathKey = `../assets/Cards/${card.imageFile}`;
  return {
    ...card,
    // The 'image' property will now be the final, working URL for the image
    image: imageModules[imagePathKey]?.default || '',
  };
});