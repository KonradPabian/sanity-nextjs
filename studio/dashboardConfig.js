export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '629cde0afd786762d2ac9a61',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-studio-qsv432mv',
                  apiId: '656f41a1-6c77-4c86-8d32-378dd35123ac'
                },
                {
                  buildHookId: '629cde0b7ea535641769c5a5',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-web-xkp6u1hi',
                  apiId: '6eab6956-8fe1-4c8d-8945-9e6ea7bdaa17'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/KonradPabian/sanity-nextjs',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-web-xkp6u1hi.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
