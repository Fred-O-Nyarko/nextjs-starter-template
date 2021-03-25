import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import PrivacyPolicy from "../../../../../../Pages/Policies&Conditions/PrivacyPolicy";
import TermsAndConditions from "../../../../../../Pages/Policies&Conditions/Terms&Conditions";
import ServiceConditions from "../../../../../../Pages/Policies&Conditions/ServiceConditions";
import { useHistory } from "react-router-dom";

export default function ScrollDialog(props: any) {

    const history = useHistory();


    const handleClose = (e: any) => {
        e.stopPropagation();
        // @ts-ignore
        history.goBack();
    };

    const descriptionElementRef = React.useRef<HTMLElement>(null);

    React.useEffect(() => {
        if (props.open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [props.open]);

    return (
        <div style={{ zIndex: 9999999 }}>
            <Dialog
                open={props.open}
                onClose={handleClose}
                scroll="paper"
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">
                    {props.data?.privacy
                        ? "Privacy Policy"
                        : props.data?.terms
                            ? "Terms and Conditions"
                            : props.data?.service
                                ? " Service Conditions"
                                : undefined}{" "}
                </DialogTitle>
                <DialogContent dividers>
                    <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}
                    >
                        {props.data?.privacy && <PrivacyPolicy />}
                        {props.data?.terms && <TermsAndConditions />}
                        {props.data?.service && <ServiceConditions />}
                        {/* {[...new Array(50)]
                            .map(
                                () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                            )
                            .join('\n')} */}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
