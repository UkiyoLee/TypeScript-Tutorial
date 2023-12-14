---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

const coreMembers = [
  {
    avatar: 'https://www.github.com/UkiyoLee.png',
    name: 'UkiyoLee',
    title: '创建者',
    links: [
      { icon: 'github', link: 'https://github.com/UkiyoLee' },
    ]
  }
]
const partners = [];
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>贡献者名单</template>
  </VPTeamPageTitle>
  <VPTeamPageSection>
    <template #title>站长</template>
    <template #members>
      <VPTeamMembers size="medium" :members="coreMembers" />
    </template>
  </VPTeamPageSection>
  <VPTeamPageSection>
    <template #title>贡献者</template>
    <template v-if="partners && partners.length !== 0" #lead>以下是为本文档作出贡献的小伙伴</template>
    <template v-else #lead>欢迎小伙伴们积极参与本文档</template>
    <template v-if="partners && partners.length !== 0" #members>
      <VPTeamMembers size="small" :members="partners" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>