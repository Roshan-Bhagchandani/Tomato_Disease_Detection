import i1 from "../Images/1.jpeg"
import i2 from "../Images/2.jpeg";
import i3 from "../Images/3.jpeg";
import i4 from "../Images/4.jpeg";
import i5 from "../Images/5.jpeg";
import i6 from "../Images/6.jpeg";
import i7 from "../Images/7.jpeg";
import i8 from "../Images/8.jpeg";
import i9 from "../Images/9.jpeg";

export const fetchData = (t) => {
    const data = [
      {
        id: 1,
        disease: "Tomato Early Blight",
        about: t("early-para"),
        image: i1,
        precaution: t("early-prec"),
      },
      {
        id: 2,
        disease: t("Late Blight"),
        about: t("late-para"),
        precaution: t("late-prec"),
        image:i2
      },
      {
        id: 3,
        disease: t("Bacterial Spot"),
        about: t("bacterial-para"),
        image: i3,
        precaution: t('bacterial-prec')
      },
      {
        id: 4,
        disease: t("Tomato Mosaic Virus"),
        about: t("tomato-para"),
        image: i4,
        precaution:t('tomato-prec')
      },
      {
        id: 5,
        disease: t("Septoria Leaf Spot"),
        about: t("septoria-para"),
        image: i5,
        precaution:t('septoria-prec')
      },
      {
        id: 6,
        disease: t("Healthy Leaf"),
        about: t("septoria-para"),
      },
      {
        id: 7,
        disease: t("Tomato Leaf Curl Virus"),
        about: t("septoria-para"),
      },
      {
        id: 8,
        disease: t("Tomato Target Spot"),
        about: t("septoria-para"),
      },
      {
        id: 9,
        disease: t("Tomato Spider Mites"),
        about: t("septoria-para"),
      },
      {
        id: 10,
        disease: t("Tomato Leaf Mould"),
        about: t("septoria-para"),
      },
    ];
      return data;
}
  