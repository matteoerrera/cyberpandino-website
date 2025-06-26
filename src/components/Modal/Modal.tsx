import React, { useEffect } from "react";
import "./Modal.scss";
import { ModalProps } from "./Modal.types";
import Button from "../Button";
import { showDialog } from "../../helpers/showDialog";
import { closeDialog } from "../../helpers/closeDialog";
import * as motion from "motion/react-client"


const Modal: React.FC<ModalProps> = (props) => {

  // Monitoro la visibilita della modale per bloccare lo scroll
  useEffect(() => {
    props.visibility ? 
      showDialog()
    : 
      closeDialog()
  }, [props.visibility]);

  // Quando esco dalla modale, rimuovo il blocco allo scroll
  useEffect(() => {
    return () => {
      closeDialog()
    }
  }, []);

  
  return (
      <div
        className="componentModal" data-visibility={props.visibility}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.1 },
          }}
          className="content"
        >     
          <h3>{props.title}</h3>
          <form 
            onSubmit={(e) => {e.preventDefault(); props.onSubmit(e)}}
            className="body"
          >
            {props.content}
            <div className="row items-center justify-between gap-4 mt-4">
              <Button
                label={props.labelClose}
                onClick={props.onClose}
                variant="secondary"
                type="button"
              />
              {props.labelSubmit && <Button 
                label={props.labelSubmit}
                variant="primary"
                type="submit"
              />}
            </div>
          </form>
          
        </motion.div>
      </div>
  );
};

export default Modal;
