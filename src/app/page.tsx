import Image from 'next/image';
import styles from './page.module.css';
import { Select } from '@mui/base/Select';
import { Option } from '@mui/base/Option';

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>CodeRefactory - рефакторинг кода</h1>
        <input type='text' />
        <Select>
          <Option value='python'>python</Option>
          <Option value='typesctipt'>typesctipt</Option>
        </Select>
      </div>
    </main>
  );
}
