import { defineConfig } from 'vitepress'
import path from 'path';
import fs from 'fs';
import { menucnmap } from '../constant';

const getFilesInDirectory = (directory) => {
  return new Promise((resolve, reject) => {
    fs.readdir(directory, (error, files) => {
      if (error) {
        return reject(error);
      }
 
      const fullPathFiles = files.map(file => path.join(directory, file));
 
      Promise.all(fullPathFiles.map(filePath => new Promise((resolve, reject) => {
        
        fs.stat(filePath, async (error, stats) => {
          if (error) {
            return reject(error);
          }
          
          resolve({ 
            // path: filePath,
            // stats,
            text: stats.isFile() ?
             `题目${path.basename(filePath, '.md').replace(/[^0-9]/g, '')}` 
             : `${menucnmap[filePath.split(path.sep).pop()]}`,
            link: stats.isFile() ? filePath.split(path.sep).join('/').replace('docs', '') : undefined,
            items: stats.isFile() ? undefined : (await getFilesInDirectory(filePath)),
            collapsed: !stats.isFile(),
          });
        });
      }))).then(fileInfo => resolve(fileInfo)).catch(reject);
    });
  });

}

// https://vitepress.dev/reference/site-config
export default async() => {

  return  defineConfig({
    title: "H.Blog",
    description: "A CS Learning Site",
    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Examples', link: '/ds/linear-list/sqlist/sqlist-01' }
      ],
      sidebar: [
        {
          text: 'DS',
          items: (await getFilesInDirectory('./docs/ds/'))
          // [
          //   { text: '线性表', collapsed: false, items: [
          //     { text: "顺序表-01题", link: '/ds/linear-list/sqlist-01.md'},
          //     { text: "顺序表-02题", link: '/ds/linear-list/sqlist-02.md'},
          //   ] },
          // ]
        },
        {
          text: 'example',
          collapsed: true,
          items:[
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' }
          ]
        }
      ],
  
      socialLinks: [
        { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
      ]
    },
    markdown: {
      lineNumbers: true,
      // container: {
      //   tipLabel: '提示',
      //   warningLabel: '警告',
      //   dangerLabel: '危险',
      //   infoLabel: '信息',
      //   detailsLabel: '详细信息'
      // }
    }
  })  
}