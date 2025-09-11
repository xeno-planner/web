import dotenv from 'dotenv';
// @ts-expect-error TL to fix types
import sh from 'shelljs';

dotenv.config();
const exec = sh.exec;

sh.cd(process.env.BACKEND_PROJECT_PATH ?? '../backend');

exec('docker compose up');
