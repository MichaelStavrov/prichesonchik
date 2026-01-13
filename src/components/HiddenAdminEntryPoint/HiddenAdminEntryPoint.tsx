import React, { useState } from 'react';
import styles from './HiddenAdminEntryPoint.module.scss';
import { Button, Input } from 'antd';
import { useRouter } from 'next/navigation';

const entryPass = 'Nadson88.';

const HiddenAdminEntryPoint = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const router = useRouter();

  const onEntry = () => {
    if (inputValue === entryPass) {
      router.push('admin');
    }
  };

  const onOpenModal = () => {
    setIsOpenModal(true);
  };

  const onCloseModal = () => {
    setIsOpenModal(false);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <div className={styles.entryBtn} onClick={onOpenModal} />
      {isOpenModal && (
        <div className={styles.modal}>
          <Input.Password
            className={styles.input}
            value={inputValue}
            onChange={onChange}
          />
          <div className={styles.controls}>
            <Button
              style={{ color: 'black', padding: 0 }}
              type='link'
              onClick={onEntry}
            >
              Войти
            </Button>
            <Button
              style={{ color: 'black', padding: 0 }}
              type='link'
              onClick={onCloseModal}
            >
              Закрыть
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default HiddenAdminEntryPoint;
