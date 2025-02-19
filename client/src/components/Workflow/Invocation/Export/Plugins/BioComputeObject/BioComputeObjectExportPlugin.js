import { InvocationExportPlugin, InvocationExportPluginAction } from "../../model";
import SendForm from "./SendForm.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
library.add(faDatabase);

export const BIO_COMPUTE_OBJ_EXPORT_PLUGIN = new InvocationExportPlugin({
    title: "BioCompute Object",
    markdownDescription: `
A BioCompute Object (BCO) is the unofficial name for a JSON object that adheres to the [IEEE-2791-2020 standard](https://standards.ieee.org/ieee/2791/7337/).
A BCO is designed to communicate High-throughput Sequencing (HTS) analysis results, data set creation, data curation, and bioinformatics verification protocols.

Learn more about [BioCompute Objects](https://biocomputeobject.org/).

Instructions for [creating a BCO using Galaxy](https://w3id.org/biocompute/tutorials/galaxy_quick_start).`,
    downloadFormat: "bco.json",
    additionalActions: [
        new InvocationExportPluginAction({
            id: "send-to-bco-db",
            title: "Send to BCODB",
            icon: faDatabase,
            run: (modal) => {
                modal.showModal();
            },
            modal: SendForm,
        }),
    ],
});
