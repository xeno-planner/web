import sh from 'shelljs';

const exec = sh.exec;

sh.cd('../backend');

exec('yarn');
exec('yarn migrate:dev --name ci');
exec('yarn pack:type');
exec('yarn start:dev');
