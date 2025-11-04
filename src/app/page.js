"use client"

import { useState } from "react";
import styles from "./page.module.scss";

export default function Home() {
    const [focus, setFocus] = useState(false)
    const [inputValue, setInputValue] = useState("")

    const checkStatus = () => {
        return inputValue.length > 0 || focus
    }

    return (
        <div>
            <div 
                className={styles.inputContainer}
                style={{ padding: checkStatus() ? '.3rem' : '0' }}
            >
                <div 
                    className={styles.inputParent}
                    style={{
                        border: focus ? '2px solid #7871FF' : 'none',
                        outline: focus? '3px solid #7871ff96' : '',
                        padding: checkStatus() ? '.5rem 1rem' : '1rem'
                    }}
                >
                    <div className={styles.inputLeft}>
                        <div 
                            style={{
                                display: checkStatus() ? 'block' : 'none',
                                color: '#7D77FF',
                                fontSize: '12px'
                            }}
                        >
                            Correo electronico
                        </div>
                        <input 
                            className={styles.input} 
                            placeholder="Escribe tu correo electronico"
                            onChange={(e) => setInputValue(e.target.value)}
                            onFocus={() => setFocus(true)}
                            onBlur={() => setFocus(false)}
                        />
                    </div>
                    <div className={styles.inputRight}>
                        {focus && 
                            <div style={{ backgroundColor: '#30305E'}}><span>X</span></div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
