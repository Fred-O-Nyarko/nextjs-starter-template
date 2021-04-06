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
import { data, otherData } from "./data";
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

    const RenderFaqs = (props: any) => {
        const { question, answer } = props
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
                        {question}
                    </Typography>

                </AccordionSummary>
                <AccordionDetails>
                    <Typography align="left" color="textSecondary">
                        {answer}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        );
    };

    const RenderOtherFaqs = (props: any) => {
        const { question, answer } = props
        return (
            <React.Fragment>
                <Typography variant="h6" color="textSecondary" paragraph>
                    {question}
                </Typography>
                <Typography variant="subtitle2" gutterBottom paragraph>
                    {answer}
                </Typography>
            </React.Fragment>
        )
    }
    return (
        <React.Fragment>
            <section className={classes.hero}>
                <div className={classes.wrap}>
                    <Typography variant="h3" color="secondary">
                        Frequently Asked Questions
          </Typography>
                    <Typography variant="h6" className={classes.subtitle} paragraph>
                        We’ve got answers for your Questions.
          </Typography>

                    <div className={classes.root1}>
                        {data.map((faq, idx) => (
                            <RenderFaqs question={faq.question} answer={faq.answer} key={idx} />
                        ))}
                    </div>
                </div>
            </section>
            <div className={classes.wrap} style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                <Grid container direction="column" className={classes.others}>
                    <article>
                        <Typography variant="h4" color="textPrimary" gutterBottom>
                            Other frequently asked questions
          </Typography>
                        {otherData.map((faq, idx) => (
                            <RenderOtherFaqs question={faq.question} answer={faq.answer} key={idx} />
                        ))}
                    </article>
                </Grid>
            </div>
            <BackToTop />
            <Footer2 />
        </React.Fragment>
    );
};

export default FAQs;
