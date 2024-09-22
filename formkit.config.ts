// formkit.config.js

import { defineFormKitConfig } from '@formkit/vue'
import { createMultiStepPlugin } from '@formkit/addons'
import '@formkit/addons/css/multistep'


export default defineFormKitConfig({
    theme: "genesis",
    plugins: [createMultiStepPlugin()],
})

