import i1 from "../Images/1.jpeg"
import i2 from "../Images/2.jpeg";
import i3 from "../Images/3.jpeg";
import i4 from "../Images/4.jpeg";
import i5 from "../Images/5.jpeg";
import i6 from "../Images/6.jpeg";
import i7 from "../Images/7.jpeg";
import i8 from "../Images/8.jpeg";
import i9 from "../Images/9.jpeg";
import i10 from "../Images/10.jpeg";
export const fetchData = (t) => {
    const data = [
      {
        id: 2,
        disease: t("eb"),
        about: t("early-para"),
        image: i1,
        precaution: t("early-prec"),
        p: t("p1"),
      },
      {
        id: 4,
        disease: t("Late Blight"),
        about: t("late-para"),
        precaution: t("late-prec"),
        image: i2,
        p: t("p2"),
      },
      {
        id: 1,
        disease: t("Bacterial Spot"),
        about: t("bacterial-para"),
        image: i3,
        precaution: t("bacterial-prec"),
        p: t("p3"),
      },
      {
        id: 6,
        disease: t("Tomato Mosaic Virus"),
        about: t("tomato-para"),
        image: i4,
        precaution: t("tomato-prec"),
        p: t("p4"),
      },
      {
        id: 7,
        disease: t("Septoria Leaf Spot"),
        about: t("septoria-para"),
        image: i5,
        precaution: t("septoria-prec"),
        p: t("p5"),
      },
      {
        id: 3,
        disease: t("hl"),
        about: t("healthy-para"),
        image: i6,
        precaution: "None",
        p: t("p6"),
      },
      {
        id: 8,
        disease: t("Tomato Leaf Curl Virus"),
        about: t("leaf-para"),
        image: i7,
        precaution: t("leaf-prec"),
        p: t("p7"),
      },
      {
        id: 11,
        disease: t("Tomato Target Spot"),
        about: t("target-para"),
        image: i8,
        precaution: t("target-prec"),
        p: t("p8"),
      },
      {
        id: 12,
        disease: t("Tomato Spider Mites"),
        about: t("spider-para"),
        image: i9,
        precaution: t("spider-prec"),
        p:t('p9')
      },
      {
        id: 13,
        disease: t("Tomato Leaf Mould"),
        about: t("mould-para"),
        precaution: t("mould-prec"),
        image: i10,
        p:t('p10')
      },
    ];
      return data;
}
  