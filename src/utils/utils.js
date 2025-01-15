// generic product options
export const genericProductOptions = [
  { value: 'frouta', label: 'Φρούτα', type: 'category' },
  { value: 'lachanika', label: 'Λαχανικά', type: 'category' },
  { value: 'kreata', label: 'Κρέατα', type: 'category' },
  { value: 'galaktokomika', label: 'Γαλακτοκομικά', type: 'category' },
  { value: 'kerasi', label: 'Κεράσι', category: 'frouta' },
  { value: 'lemoni', label: 'Λεμόνι', category: 'frouta' },
  { value: 'milo', label: 'Μήλο', category: 'frouta' },
  { value: 'rodakino', label: 'Ροδάκινο', category: 'frouta' },
  { value: 'mpanana', label: 'Μπανάνα', category: 'frouta' },
  { value: 'achladi', label: 'Αχλάδι', category: 'frouta' },
  { value: 'aktinidio', label: 'Ακτινίδιο', category: 'frouta' },
  { value: 'vanilia', label: 'Βανίλια', category: 'frouta' },
  { value: 'portokali', label: 'Πορτοκάλι', category: 'frouta' },
  { value: 'stafyli', label: 'Σταφύλι', category: 'frouta' },
  { value: 'karoto', label: 'Καρότο', category: 'lachanika' },
  { value: 'spanaki', label: 'Σπανάκι', category: 'lachanika' },
  { value: 'ntomata', label: 'Ντομάτα', category: 'lachanika' },
  { value: 'kremmydi', label: 'Κρεμμύδι', category: 'lachanika' },
  { value: 'lachano', label: 'Λάχανο', category: 'lachanika' },
  { value: 'piperia', label: 'Πιπεριά', category: 'lachanika' },
  { value: 'marouli', label: 'Μαρούλι', category: 'lachanika' },
  { value: 'melitzana', label: 'Μελιτζάνα', category: 'lachanika' },
  { value: 'kounoupidi', label: 'Κουνουπίδι', category: 'lachanika' },
  { value: 'patates', label: 'Πατάτες', category: 'lachanika' },
  { value: 'moschari', label: 'Μοσχάρι', category: 'kreata' },
  { value: 'arni', label: 'Αρνί', category: 'kreata' },
  { value: 'katsiki', label: 'Κατσίκι', category: 'kreata' },
  { value: 'choirino', label: 'Χοιρινό', category: 'kreata' },
  { value: 'kotopoulo', label: 'Κοτόπουλο', category: 'kreata' },
  { value: 'voutiro', label: 'Βούτυρο', category: 'galaktokomika' },
  { value: 'tyri', label: 'Τυρί', category: 'galaktokomika' },
  { value: 'giaourti', label: 'Γιαούρτι', category: 'galaktokomika' },
  { value: 'gala', label: 'Γάλα', category: 'galaktokomika' },
  { value: 'viologika', label: 'Βιολογικά', type: 'quality' },
  { value: 'nonviologika', label: 'Μη Βιολογικά', type: 'quality' },
  {
    value: 'viologika_miviologika',
    label: 'Βιολογικά/Μη Βιολογικά',
    type: 'quality',
  },
  { value: 'egxwria', label: 'Εγχώρια', type: 'origin' },
  { value: 'ekswterikou', label: 'Εξωτερικού', type: 'origin' },
  { value: 'egxwria_ekswterikou', label: 'Εγχώρια/Εξωτερικού', type: 'origin' },
  { value: 'syskevasmena', label: 'Συσκευασμένα', type: 'packing' },
  { value: 'xyma', label: 'Χύμα', type: 'packing' },
  { value: 'syskevasmena_xyma', label: 'Συσκευασμένα/Χύμα', type: 'packing' },
  {
    value: 'anatoliki_makedonia_kai_thraki',
    label: 'Ανατολική Μακεδονία και Θράκη',
    type: 'location',
  },
  {
    value: 'kentriki_makedonia',
    label: 'Κεντρική Μακεδονία',
    type: 'location',
  },
  { value: 'dytiki_makedonia', label: 'Δυτική Μακεδονία', type: 'location' },
  { value: 'hpeiros', label: 'Ήπειρος', type: 'location' },
  { value: 'thessalia', label: 'Θεσσαλία', type: 'location' },
  { value: 'sterea_ellada', label: 'Στερεά Ελλάδα', type: 'location' },
  { value: 'ionies_nhsoi', label: 'Ιόνιες Νήσοι', type: 'location' },
  { value: 'dytiki_ellada', label: 'Δυτική Ελλάδα', type: 'location' },
  { value: 'peloponnisos', label: 'Πελοπόννησος', type: 'location' },
  { value: 'attiki', label: 'Αττική', type: 'location' },
  { value: 'voreio_aigaio', label: 'Βόρειο Αιγαίο', type: 'location' },
  { value: 'notio_aigaio', label: 'Νότιο Αιγαίο', type: 'location' },
  { value: 'kriti', label: 'Κρήτη', type: 'location' },
];

// categories options
export const categoryOptions = [
  { value: 'frouta', label: 'Φρούτα' },
  { value: 'lachanika', label: 'Λαχανικά' },
  { value: 'kreata', label: 'Κρέατα' },
  { value: 'galaktokomika', label: 'Γαλακτοκομικά' },
];

// product options
export const productOptions = [
  { value: 'kerasi', label: 'Κεράσι' },
  { value: 'lemoni', label: 'Λεμόνι' },
  { value: 'milo', label: 'Μήλο' },
  { value: 'rodakino', label: 'Ροδάκινο' },
  { value: 'mpanana', label: 'Μπανάνα' },
  { value: 'achladi', label: 'Αχλάδι' },
  { value: 'aktinidio', label: 'Ακτινίδιο' },
  { value: 'vanilia', label: 'Βανίλια' },
  { value: 'portokali', label: 'Πορτοκάλι' },
  { value: 'stafyli', label: 'Σταφύλι' },
  { value: 'karoto', label: 'Καρότο' },
  { value: 'spanaki', label: 'Σπανάκι' },
  { value: 'ntomata', label: 'Ντομάτα' },
  { value: 'kremmydi', label: 'Κρεμμύδι' },
  { value: 'lachano', label: 'Λάχανο' },
  { value: 'piperia', label: 'Πιπεριά' },
  { value: 'marouli', label: 'Μαρούλι' },
  { value: 'melitzana', label: 'Μελιτζάνα' },
  { value: 'kounoupidi', label: 'Κουνουπίδι' },
  { value: 'patates', label: 'Πατάτες' },
  { value: 'moschari', label: 'Μοσχάρι' },
  { value: 'arni', label: 'Αρνί' },
  { value: 'katsiki', label: 'Κατσίκι' },
  { value: 'choirino', label: 'Χοιρινό' },
  { value: 'kotopoulo', label: 'Κοτόπουλο' },
  { value: 'voutiro', label: 'Βούτυρο' },
  { value: 'tyri', label: 'Τυρί' },
  { value: 'giaourti', label: 'Γιαούρτι' },
  { value: 'gala', label: 'Γάλα' },
];

// quality options
export const qualityOptions = [
  { value: 'viologika', label: 'Βιολογικά' },
  { value: 'nonviologika', label: 'Μη Βιολογικά' },
  { value: 'viologika_miviologika', label: 'Βιολογικά/Μη Βιολογικά' },
];

// origin options
export const originOptions = [
  { value: 'egxwria', label: 'Εγχώρια' },
  { value: 'ekswterikou', label: 'Εξωτερικού' },
  { value: 'egxwria_ekswterikou', label: 'Εγχώρια/Εξωτερικού' },
];

// packing options
export const packingOptions = [
  { value: 'syskevasmena', label: 'Συσκευασμένα' },
  { value: 'xyma', label: 'Χύμα' },
  { value: 'syskevasmena_xyma', label: 'Συσκευασμένα/Χύμα' },
];

// location options
export const locationOptions = [
  {
    value: 'anatoliki_makedonia_kai_thraki',
    label: 'Ανατολική Μακεδονία και Θράκη',
  },
  { value: 'kentriki_makedonia', label: 'Κεντρική Μακεδονία' },
  { value: 'dytiki_makedonia', label: 'Δυτική Μακεδονία' },
  { value: 'hpeiros', label: 'Ήπειρος' },
  { value: 'thessalia', label: 'Θεσσαλία' },
  { value: 'sterea_ellada', label: 'Στερεά Ελλάδα' },
  { value: 'ionies_nhsoi', label: 'Ιόνιες Νήσοι' },
  { value: 'dytiki_ellada', label: 'Δυτική Ελλάδα' },
  { value: 'peloponnisos', label: 'Πελοπόννησος' },
  { value: 'attiki', label: 'Αττική' },
  { value: 'voreio_aigaio', label: 'Βόρειο Αιγαίο' },
  { value: 'notio_aigaio', label: 'Νότιο Αιγαίο' },
  { value: 'kriti', label: 'Κρήτη' },
];

// get label from value
export const getLabel = value => {
  const option = genericProductOptions.find(option => option.value === value);
  return option ? option.label : value;
};
