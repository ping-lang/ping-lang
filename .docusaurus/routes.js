
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/ping/',
  component: ComponentCreator('/ping/','23a'),
  exact: true,
},
{
  path: '/ping/blog',
  component: ComponentCreator('/ping/blog','672'),
  exact: true,
},
{
  path: '/ping/blog/2020/04/14/blog-plugin',
  component: ComponentCreator('/ping/blog/2020/04/14/blog-plugin','cb4'),
  exact: true,
},
{
  path: '/ping/blog/2020/04/14/large-blog-post',
  component: ComponentCreator('/ping/blog/2020/04/14/large-blog-post','e27'),
  exact: true,
},
{
  path: '/ping/blog/hello-world',
  component: ComponentCreator('/ping/blog/hello-world','74b'),
  exact: true,
},
{
  path: '/ping/blog/hola',
  component: ComponentCreator('/ping/blog/hola','e24'),
  exact: true,
},
{
  path: '/ping/blog/tags',
  component: ComponentCreator('/ping/blog/tags','30a'),
  exact: true,
},
{
  path: '/ping/blog/tags/blog',
  component: ComponentCreator('/ping/blog/tags/blog','864'),
  exact: true,
},
{
  path: '/ping/blog/tags/docusaurus',
  component: ComponentCreator('/ping/blog/tags/docusaurus','a2c'),
  exact: true,
},
{
  path: '/ping/blog/tags/facebook',
  component: ComponentCreator('/ping/blog/tags/facebook','bcc'),
  exact: true,
},
{
  path: '/ping/blog/tags/hello',
  component: ComponentCreator('/ping/blog/tags/hello','c29'),
  exact: true,
},
{
  path: '/ping/blog/tags/hola',
  component: ComponentCreator('/ping/blog/tags/hola','903'),
  exact: true,
},
{
  path: '/ping/blog/welcome',
  component: ComponentCreator('/ping/blog/welcome','106'),
  exact: true,
},
{
  path: '/ping/markdown-page',
  component: ComponentCreator('/ping/markdown-page','2d4'),
  exact: true,
},
{
  path: '/ping/docs',
  component: ComponentCreator('/ping/docs','d6e'),
  
  routes: [
{
  path: '/ping/docs/',
  component: ComponentCreator('/ping/docs/','adb'),
  exact: true,
},
{
  path: '/ping/docs/doc2',
  component: ComponentCreator('/ping/docs/doc2','626'),
  exact: true,
},
{
  path: '/ping/docs/doc3',
  component: ComponentCreator('/ping/docs/doc3','896'),
  exact: true,
},
{
  path: '/ping/docs/mdx',
  component: ComponentCreator('/ping/docs/mdx','288'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
