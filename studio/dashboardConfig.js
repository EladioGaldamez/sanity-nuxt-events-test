export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'sanity-nuxt-events-test-studio',
                  apiId: 'd519e64d-e639-4981-80bd-728ec331dd68'
                },
                {
                  buildHookId: '5e17667170ef932e4f3318d2',
                  title: 'Events Website',
                  name: 'sanity-nuxt-events-test-web',
                  apiId: '108407d1-75a1-47ae-8468-ad58a2caef9b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/EladioGaldamez/sanity-nuxt-events-test',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nuxt-events-test-web.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
