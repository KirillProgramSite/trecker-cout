import React, { ReactElement } from 'react';
import styles from './Modal.module.css'



interface ModalProps {
    visible: boolean,
    title: string,
    content: ReactElement | string,
    onClose: () => void,
}

const Modal: React.FC<ModalProps> = ({ visible = false, title = '', content = '', onClose }) => {
    if (!visible) return null

    return (
        <div className={styles.modal} onClick={onClose}>
            <div className={styles.modal_dialog} onClick={e => e.stopPropagation()}>
                <div className={styles.modal_header}>
                    <h3 className={styles.modal_title}>{title}</h3>
                    <span className={styles.modal_close} onClick={onClose}>
                        &times;
                    </span>
                </div>
                <div className={styles.modal_body}>
                    <div className={styles.modal_content}>{content}</div>
                </div>
            </div>
        </div>
    );
};

export default Modal
