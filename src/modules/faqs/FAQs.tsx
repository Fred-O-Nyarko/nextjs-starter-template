import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Grid,
    Typography,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import React from "react";
import Footer2 from "../_shared/components/Footer";
import useStyles from "./styles";

const BackToTop = () => {
    return (
        <React.Fragment>
            <a href="/" className="back-to-top">
                <i className="fa fa-chevron-up"></i>
            </a>
        </React.Fragment>
    );
};



const FAQs = () => {
    const classes = useStyles();
    // const [expanded, setExpanded] = React.useState<string | false>(false);

    // const handleChange = (panel: string) => (
    //     event: React.ChangeEvent<{}>,
    //     isExpanded: boolean
    // ) => {
    //     setExpanded(isExpanded ? panel : false);
    // };

    const RenderAccordion = () => {
        return (
            <Accordion
            // expanded={expanded === "panel1"}
            // onChange={handleChange("panel1")}
            >
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading} align="left">
                        General settings
          </Typography>

                </AccordionSummary>
                <AccordionDetails>
                    <Typography align="left">
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                        Aliquam eget maximus est, id dignissim quam.
          </Typography>
                </AccordionDetails>
            </Accordion>
        );
    };
    const faqs = Array(7).fill(0);
    return (
        <React.Fragment>
            <section className={classes.hero}>
                <div className={classes.wrap}>
                    <Typography variant="h3" color="secondary">
                        Frequently Asked Questions
          </Typography>
                    <Typography variant="h6" className={classes.subtitle} paragraph>
                        Lorem Ipsum Dolor sit amet par elsque sil vous a la dire comci
          </Typography>

                    <div className={classes.root1}>
                        {faqs.map((faq, idx) => (
                            <RenderAccordion />
                        ))}
                    </div>
                </div>
            </section>
            <div className={classes.wrap} style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                <Grid container direction="column" className={classes.others}>
                    <article>
                        <Typography variant="h4" color="textSecondary" gutterBottom>
                            Other frequently asked questions
          </Typography>
                        <Typography variant="h6" color="textSecondary" paragraph>
                            How do I do something else?
          </Typography>
                        <Typography variant="subtitle2" gutterBottom paragraph>
                            This is an example of a WordPress post, you could edit this to put
                            information about yourself or your site so readers know where you
                            are coming from. You can create as many posts as you like in order
                            to share with your readers what exactly is on your mind.
          </Typography>
                        <Typography variant="h6" color="textSecondary" paragraph>
                            How do I do something else?
          </Typography>
                        <Typography variant="subtitle2" gutterBottom paragraph>
                            This is an example of a WordPress post, you could edit this to put
                            information about yourself or your site so readers know where you
                            are coming from. You can create as many posts as you like in order
                            to share with your readers what exactly is on your mind.
          </Typography>
                    </article>
                </Grid>
            </div>
            <BackToTop />
            <Footer2 />
        </React.Fragment>
    );
};

export default FAQs;
