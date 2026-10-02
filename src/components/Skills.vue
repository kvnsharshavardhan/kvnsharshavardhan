<template>
  <div class="ma-0">
    <div v-for="(categorizedSkill, index) in categorizedSkills" :key="index">
      <div class="ma-3">
        <h4>
          {{ categorizedSkill.name }}
        </h4>
      </div>
      <v-row class="d-flex justify-start align-center ma-0" style="width: 100%">
        <v-col md="2" cols="3" v-for="skill in categorizedSkill.skills" :key="skill.name"
          class="skill d-flex justify-center align-center ma-3">
          <div class="pa-4 d-flex justify-center align-center flex-column">
            <img :src="skill.url" height="40" width="40" />
            <div class="mt-4">
              {{ skill.name }}
            </div>
          </div>
        </v-col>
      </v-row>
    </div>

    <!-- <v-row>
      <v-tabs v-model="tab">
        <v-tab v-for="(categorizedSkill, index) in categorizedSkills" :key="index">
          {{ categorizedSkill.name }}
        </v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item v-for="(categorizedSkill, index) in categorizedSkills" :key="index">
          <v-row class="d-flex justify-start align-center ma-0" style="width: 100%">
            <v-col md="2" cols="3" class="skill d-flex justify-center align-center ma-3"
              v-for="skill in categorizedSkill.skills" :key="skill.name">
              <div class="pa-4 d-flex justify-center align-center flex-column">
                <img :src="skill.url" height="40" width="40" />
                <div class="mt-4">
                  {{ skill.name }}
                </div>
              </div>
            </v-col>
          </v-row>
        </v-tab-item>
      </v-tabs-items>
    </v-row> -->
  </div>
</template>

<script>
import dotNetLogo from "../assets/logos/dot-net.png";
import cSharpLogo from "../assets/logos/CSharp.png";
import sqlServerLogo from "../assets/logos/ms-sql-server.png";
import vueLogo from "../assets/logos/vue.js.png";
import jiraLogo from "../assets/logos/Common/jira.png";

export default {
  data() {
    return {
      skills: [
        {
          name: ".Net",
          url: dotNetLogo,
          category: "Backend"
        },
        {
          name: "C#",
          url: cSharpLogo,
          category: "Backend"
        },
        {
          name: "Python",
          url: "https://firebasestorage.googleapis.com/v0/b/kvnsharshavardhan.appspot.com/o/logos%2Fpython.png?alt=media&token=836f2ca6-4311-45a6-b7a6-b83ef9ebb1e0",
          category: "Backend"
        },
        {
          name: "Java",
          url: "https://firebasestorage.googleapis.com/v0/b/kvnsharshavardhan.appspot.com/o/logos%2Fjava.png?alt=media&token=86e313e8-3692-4f49-831f-6abf5e96bcb6&_gl=1*17sjsm*_ga*Mzg2MjU5NzUxLjE2OTM5OTg3NTc.*_ga_CW55HF8NVT*MTY5NjE3NTMwOC44LjEuMTY5NjE3NTM0MC4yOC4wLjA.",
          category: "Backend"
        },
        {
          name: "Sql Server",
          url: sqlServerLogo,
          category: "Database"
        },
        {
          name: "MySql",
          url: "https://firebasestorage.googleapis.com/v0/b/kvnsharshavardhan.appspot.com/o/logos%2Fmysql.png?alt=media&token=4c0c1a26-0ce3-4b6a-a4ab-06dd8edb0efe",
          category: "Database"
        },
        {
          name: "HTML",
          url: "https://firebasestorage.googleapis.com/v0/b/kvnsharshavardhan.appspot.com/o/logos%2Fhtml.png?alt=media&token=30fbb051-a744-4bf4-ab2e-a77c2fe0b0fc",
          category: "Frontend"
        },
        {
          name: "CSS",
          url: "https://firebasestorage.googleapis.com/v0/b/kvnsharshavardhan.appspot.com/o/logos%2Fcss.png?alt=media&token=873523c9-b65a-48a6-896b-5750bbbbb574",
          category: "Frontend"
        },
        {
          name: "Java Script",
          url: "https://firebasestorage.googleapis.com/v0/b/kvnsharshavardhan.appspot.com/o/logos%2Fjavascript.png?alt=media&token=13c75443-1f62-4c00-9272-3ab3f9496c48",
          category: "Frontend"
        },
        {
          name: "Vue.js",
          url: vueLogo,
          category: "Frontend"
        },
        {
          name: "React",
          url: "https://firebasestorage.googleapis.com/v0/b/kvnsharshavardhan.appspot.com/o/logos%2Freact.png?alt=media&token=00575a4c-959b-4dae-bbd3-5e88880ae7b4&_gl=1*rwjz1q*_ga*Mzg2MjU5NzUxLjE2OTM5OTg3NTc.*_ga_CW55HF8NVT*MTY5NjE3NTMwOC44LjEuMTY5NjE3NTc0MS40OC4wLjA.",
          category: "Frontend"
        },
        {
          name: "Angular",
          url: "https://firebasestorage.googleapis.com/v0/b/kvnsharshavardhan.appspot.com/o/logos%2Fangular.png?alt=media&token=96c8e247-5b8f-427e-9f57-8ca113509eae&_gl=1*1mp2cuh*_ga*Mzg2MjU5NzUxLjE2OTM5OTg3NTc.*_ga_CW55HF8NVT*MTY5NjE3NTMwOC44LjEuMTY5NjE3NTYzMi40OC4wLjA.",
          category: "Frontend"
        },
        {
          name: "Postman",
          url: "https://firebasestorage.googleapis.com/v0/b/kvnsharshavardhan.appspot.com/o/logos%2Fpostman.png?alt=media&token=7e5f9ddd-efaa-4f6a-b16d-b1deb8c46274",
          category: "Tools"
        },
        {
          name: "Jira",
          url: jiraLogo,
          category: "Tools"
        },
        {
          name: "Elastic Search",
          url: "https://firebasestorage.googleapis.com/v0/b/kvnsharshavardhan.appspot.com/o/logos%2Felasticsearch.png?alt=media&token=63f72735-1272-4867-8742-8ab56d1ff889",
          category: "Tools"
        },
        {
          name: "Kibana",
          url: "https://firebasestorage.googleapis.com/v0/b/kvnsharshavardhan.appspot.com/o/logos%2Fkibana.png?alt=media&token=f0cb15a3-02f8-4815-9a2d-badd2d158491",
          category: "Tools"
        },
        {
          name: "Git",
          url: "https://firebasestorage.googleapis.com/v0/b/kvnsharshavardhan.appspot.com/o/logos%2Fgit.png?alt=media&token=aca71b67-0fd7-433a-94d1-72e49340a931&_gl=1*r38l26*_ga*Mzg2MjU5NzUxLjE2OTM5OTg3NTc.*_ga_CW55HF8NVT*MTY5NjE3NTMwOC44LjEuMTY5NjE3NTQzNC41Mi4wLjA.",
          category: "Tools"
        },
        {
          name: "BitBucket",
          url: "https://firebasestorage.googleapis.com/v0/b/kvnsharshavardhan.appspot.com/o/logos%2Fbitbucket.png?alt=media&token=2074c946-dc27-401a-8464-3542583cdbf4",
          category: "Tools"
        },
        {
          name: "GitHub",
          url: "https://firebasestorage.googleapis.com/v0/b/kvnsharshavardhan.appspot.com/o/logos%2Fgithub.png?alt=media&token=de1cafed-20e6-4d2a-b580-11de0535b503",
          category: "Tools"
        },
        {
          name: "Shopify Dev",
          url: "https://firebasestorage.googleapis.com/v0/b/kvnsharshavardhan.appspot.com/o/logos%2Fshopify.png?alt=media&token=92a374d4-9b0a-4ae2-bb53-63b313e6fce9&_gl=1*1gdjmrf*_ga*Mzg2MjU5NzUxLjE2OTM5OTg3NTc.*_ga_CW55HF8NVT*MTY5NjE4MzE2MC45LjEuMTY5NjE4MzE4MS4zOS4wLjA.",
          category: "Tools"
        },
      ],
      tab: null,
    }
  },
  computed: {
    categorizedSkills() {
      var categories = this.skills.map(s => s.category);
      categories = [...new Set(categories)];
      var finalCategories = []
      categories.forEach(category => {
        var skills = this.skills.filter(s => s.category == category);
        finalCategories.push({
          name: category,
          skills: skills
        });
      });
      return finalCategories;
    }
  }
}
</script>

<style scoped>
.skill {
  border: 0.5px solid #a87ffb99;
  border-radius: 5px;
  background-color: #161e29;
  box-shadow: 2px 2px 5px #a87ffbb7;
}

.skill:hover {
  background-color: #161e29a3;
  box-shadow: 2px 2px 10px #a87ffbb7;
}
</style>
