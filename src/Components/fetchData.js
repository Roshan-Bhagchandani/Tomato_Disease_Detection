
export const fetchData = (t) => {
    const data = [
        {
          id : 1,
          disease: t("Early Blight"),
          about: t("early-para"),
        },
        {
          id : 2,
          disease: t("Late Blight"),
          about: t("late-para"),
        },
        {
          id : 3,
          disease: t("Bacterial Spot"),
          about: t("bacterial-para"),
        },
        {
          id : 4, 
          disease: t("Tomato Mosaic Virus"),
          about: t("tomato-para"),
        },
        {
          id : 5,
          disease: t("Septoria Leaf Spot"),
          about: t("septoria-para"),
        },
      ];
      return data;
}
  