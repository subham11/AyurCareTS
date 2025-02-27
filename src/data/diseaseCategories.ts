export interface Category {
  id: string;
  name: string;
  icon: any;
  subcategories: { name: string; icon: any }[];
}

export const diseaseCategories: Category[] = [
  {
    id: "1",
    name: "Digestive Disorders",
    icon: require("../../assets/icons/digestive.png"),
    subcategories: [
      { name: "Indigestion/Acidity/Heartburn", icon: require("../../assets/icons/indigestion.png")},
      { name: "Digestive Discomfort", icon: require("../../assets/icons/digestiveDiscomfort.png")},
      { name: "Constipation", icon: require("../../assets/icons/constipation.png")},
      { name: "Bloating/Gas", icon: require("../../assets/icons/bloating.png")},
      { name: "Loss of Appetite", icon: require("../../assets/icons/loss-of-appetite.png")},
    ],
  },
  {
    id: "2",
    name: "Muscle Disorders",
    icon: require("../../assets/icons/muscle.png"),
    subcategories: [
      { name: "Joint Pain/Arthritis", icon: require("../../assets/icons/pain-in-joints.png")},
      { name: "Back Pain", icon: require("../../assets/icons/pain.png")},
      { name: "Muscle Spasms/Stiffness", icon: require("../../assets/icons/muscle-pain.png")},
      { name: "Gout", icon: require("../../assets/icons/gout.png")},
    ],
  },
  {
    id: "3",
    name: "Respiratory Disorders",
    icon: require("../../assets/icons/respiratory.png"),
    subcategories: [
      { name: "Cold/Cough/Flu", icon: require("../../assets/icons/digestive.png")},
      { name: "Allergies", icon: require("../../assets/icons/digestive.png")},
      { name: "Sinusitis", icon: require("../../assets/icons/digestive.png")},
      { name: "Asthma", icon: require("../../assets/icons/digestive.png")},
      { name: "Bronchitis", icon: require("../../assets/icons/digestive.png")},
    ],
  },
  {
    id: "4",
    name: "Skin Disorders",
    icon: require("../../assets/icons/skin.png"),
    subcategories: [
      { name: "Eczema", icon: require("../../assets/icons/digestive.png")},
      { name: "Psoriasis", icon: require("../../assets/icons/digestive.png")},
      { name: "Acne", icon: require("../../assets/icons/digestive.png")},
      { name: "Urticaria", icon: require("../../assets/icons/digestive.png")},
    ],
  },
  {
    id: "5",
    name: "Stress/Lifestyle Disorders",
    icon: require("../../assets/icons/stress.png"),
    subcategories: [
      { name: "Anxiety/Stress", icon: require("../../assets/icons/digestive.png")},
      { name: "Insomnia", icon: require("../../assets/icons/digestive.png")},
      { name: "Fatigue/Low Energy", icon: require("../../assets/icons/digestive.png")},
    ],
  },
  {
    id: "6",
    name: "Women's Health",
    icon: require("../../assets/icons/women.png"),
    subcategories: [
      { name: "Menstrual Problems", icon: require("../../assets/icons/digestive.png")},
      { name: "Menopause", icon: require("../../assets/icons/digestive.png")},
      { name: "PCOS", icon: require("../../assets/icons/digestive.png")},
    ],
  },
  {
    id: "7",
    name: "Metabolic Disorders",
    icon: require("../../assets/icons/metabolic.png"),
    subcategories: [
      { name: "Type 2 Diabetes", icon: require("../../assets/icons/digestive.png")},
      { name: "Obesity", icon: require("../../assets/icons/digestive.png")},
      { name: "Thyroid", icon: require("../../assets/icons/digestive.png")},
    ],
  },
  {
    id: "8",
    name: "Sexual Disorders",
    icon: require("../../assets/icons/sexual.png"),
    subcategories: [
      { name: "ED/Impotence", icon: require("../../assets/icons/digestive.png")},
      { name: "PE", icon: require("../../assets/icons/digestive.png")},
      { name: "Low Libido/Weakness", icon: require("../../assets/icons/digestive.png")},
      { name: "FSD", icon: require("../../assets/icons/digestive.png")},
      { name: "Infertility", icon: require("../../assets/icons/digestive.png")},
    ],
  },
  {
    id: "9",
    name: "Neurological Disorders",
    icon: require("../../assets/icons/neurology.png"),
    subcategories: [
      { name: "Headache/Migraine", icon: require("../../assets/icons/digestive.png")},
      { name: "Anxiety", icon: require("../../assets/icons/digestive.png")},
      { name: "Insomnia", icon: require("../../assets/icons/digestive.png")},
      { name: "Nerve Pain/Neuropathy", icon: require("../../assets/icons/digestive.png")},
      { name: "Paralysis/Paresis", icon: require("../../assets/icons/digestive.png")},
      { name: "Epilepsy", icon: require("../../assets/icons/digestive.png")},
      { name: "Tremors", icon: require("../../assets/icons/digestive.png")},
      { name: "Cognitive Decline", icon: require("../../assets/icons/digestive.png")},
    ],
  },
];
