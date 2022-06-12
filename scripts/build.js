import { copyFile, mkdir } from 'fs/promises';
import esbuild from 'esbuild';


const isMain = import.meta.url === `file://${process.argv[1]}`;

export async function build(updateHook) {
  const watch = updateHook && { onRebuild(error, result) {
    if (error)
    {
      console.error(error);
      return;
    }
    console.log(Date.now());
    updateHook();
  },
  };

  await mkdir('dist', { recursive: true });
  return await Promise.all([
    esbuild.build({
      entryPoints: ['style.js'],
      format: 'esm',
      bundle: true,
      minify: true,
      sourcemap: true,
      outdir: 'dist',
      watch,
    }),
    copyFile('index.html', 'dist/index.html'),
  ]);
}

if (isMain) {
  await build();
}
