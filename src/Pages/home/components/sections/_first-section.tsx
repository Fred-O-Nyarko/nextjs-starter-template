import { Typography } from "@material-ui/core";
import React from "react";
import "./style.css";
import bakery from "../../../../_shared/assets/img/bakery.jpg";
import dining from "../../../../_shared/assets/img/dining.jpg";
import pet from "../../../../_shared/assets/img/pet.jpg";
import grocery from "../../../../_shared/assets/img/grocery.jpg";
import HTMLReneder from "react-html-renderer";

const TextSection = (props: any) => {
  const { headerText, subtitle, textAlign } = props;
  return (
    <section className={textAlign}>
      <article>
        <Typography
          className="font-weight-bold header-text wow fadeInUp"
          variant="h3"
          color="textPrimary"
          gutterBottom
        >
          {headerText}
        </Typography>
        <Typography
          variant="subtitle1"
          className="subtitle wow fadeIn"
          data-wow-delay="0.3s"
          paragraph
        >
          {subtitle}
        </Typography>
      </article>
    </section>
  );
};

const HTML = () => {
  const html = `
    <ul class="list">
      <li><strong>Try Luxury Dining</strong> -  This Collection gives you an opportunity to experience something you couldn't make at home.
      Treat yourself with our most delicious and affordable meal services.
      </li>
      <li>
        <strong>Try Comfort Dining</strong> – This is about quick service, affordability, and delicious warmth. 
        </li>
      </ul>
  `;
  return <HTMLReneder html={html} />;
};
const ImageWithTextSection = (props: any) => {
  const { imageUrl, subtitle, headerText } = props;
  return (
    <div className="callout-row">
      <div className="callout-img">
        <img src={imageUrl} alt=" " className="wow fadeIn" />
      </div>

      <div className="callout-caption">
        <article>
          <Typography
            className="font-weight-bold header-text wow fadeInUp"
            variant="h4"
            color="textPrimary"
            gutterBottom
          >
            {headerText}
          </Typography>
          <Typography
            variant="subtitle1"
            className="subtitle wow fadeIn"
            data-wow-delay="0.3s"
            paragraph
          >
            {subtitle}
          </Typography>
        </article>
      </div>
    </div>
  );
};
export default function FirstSection() {
  return (
    <section className="callouts section odd" role="main" id="firstSection">
      <TextSection
        headerText={"Get your orders delivered on time"}
        subtitle={`We know you have a packed schedule. That is 
        why PigeonBolt™ seeks to meet your delivery needs swiftly!`}
        textAlign={"text-center"}
      />
      <ImageWithTextSection
        headerText={"Hungry enough to PigeonIT"}
        subtitle={<HTML />}
        textAlign={"text-left"}
        imageUrl={dining}
      />
      <ImageWithTextSection
        headerText={"Grocery Shopping Done Right"}
        subtitle={`Do you believe you know grocery shopping? Think again. We deliever fresh, well packaged and protected produce with just a click.`}
        textAlign={"text-left"}
        imageUrl={grocery}
      />
      <ImageWithTextSection
        headerText={"Bakeries and Dessert Delight"}
        subtitle={`Get your midnight temptations from PigeonBolt Bakeries. You got nothing to lose, let us sweeten your day too.`}
        textAlign={"text-left"}
        imageUrl={bakery}
      />
      <ImageWithTextSection
        headerText={"Pet Needs "}
        subtitle={`Get the best pet supplies online delivered directly to your home with real-time tracking`}
        textAlign={"text-left"}
        imageUrl={pet}
      />
    </section>
  );
}
