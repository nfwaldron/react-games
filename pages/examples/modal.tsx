/* eslint-disable no-console */
import React, { useState } from "react";
import { Modal } from "components/modal";

const ModalPage: React.FC = () => {
    const [isOpen, setOpen] = useState<boolean>(false);
    return (
        <div css={{ margin: 32 }}>
            <button css={{ marginLeft: 32 }}
                onClick={() => {
                        setOpen(true);
                }}
                value="traveler-selection-modal"
            >
                Mr. Anderson!
                </button>
            <Modal open={isOpen} onCloseRequested={() => setOpen(false)}>
                <div>Hello World</div>
            </Modal>
        </div>
    );
};

export default ModalPage;
