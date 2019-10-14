(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{217:function(a,e,s){"use strict";s.r(e);var t=s(0),n=Object(t.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"flux-helm-chart-operations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flux-helm-chart-operations","aria-hidden":"true"}},[a._v("#")]),a._v(" Flux Helm Chart operations")]),a._v(" "),s("p",[a._v("Demo of the HelmRelease operations and Flux.")]),a._v(" "),s("h2",{attrs:{id:"install-gitlab-using-flux"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-gitlab-using-flux","aria-hidden":"true"}},[a._v("#")]),a._v(" Install GitLab using flux")]),a._v(" "),s("p",[a._v("Install GitLab")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("envsubst "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v(" files/flux-repository/namespaces/gitlab-ns.yaml                          "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" tmp/k8s-flux-repository/namespaces/gitlab-ns.yaml\nenvsubst "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v(" files/flux-repository/releases/gitlab-release.yaml                       "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" tmp/k8s-flux-repository/releases/gitlab-release.yaml\nenvsubst "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v(" files/flux-repository/workloads/gitlab-custom-ca.yaml                    "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" tmp/k8s-flux-repository/workloads/gitlab-custom-ca.yaml\nenvsubst "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v(" files/flux-repository/workloads/gitlab-gitlab-initial-root-password.yaml "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" tmp/k8s-flux-repository/workloads/gitlab-gitlab-initial-root-password.yaml\nenvsubst "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v(" files/flux-repository/workloads/gitlab-services.yaml                     "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" tmp/k8s-flux-repository/workloads/gitlab-services.yaml\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" -C tmp/k8s-flux-repository "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" --verbose "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" -C tmp/k8s-flux-repository commit -m "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Add GitLab"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" -C tmp/k8s-flux-repository push -q\nfluxctl "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sync")]),a._v("\n")])])]),s("p",[a._v("Output:")]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("add 'namespaces/gitlab-ns.yaml'\nadd 'releases/gitlab-release.yaml'\nadd 'workloads/gitlab-custom-ca.yaml'\nadd 'workloads/gitlab-gitlab-initial-root-password.yaml'\nadd 'workloads/gitlab-services.yaml'\n[master 691c4f2] Add GitLab\n 5 files changed, 193 insertions(+)\n create mode 100644 namespaces/gitlab-ns.yaml\n create mode 100644 releases/gitlab-release.yaml\n create mode 100644 workloads/gitlab-custom-ca.yaml\n create mode 100644 workloads/gitlab-gitlab-initial-root-password.yaml\n create mode 100644 workloads/gitlab-services.yaml\nSynchronizing with git@github.com:ruzickap/k8s-flux-repository\nRevision of master to apply is 691c4f2\nWaiting for 691c4f2 to be applied ...\nDone.\n")])])]),s("h2",{attrs:{id:"run-and-application-via-flux-helmrelease"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#run-and-application-via-flux-helmrelease","aria-hidden":"true"}},[a._v("#")]),a._v(' Run and application via Flux "HelmRelease"')]),a._v(" "),s("p",[a._v("Create "),s("code",[a._v("HelmRelease")]),a._v(" and "),s("code",[a._v("VirtualService")]),a._v(" files:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("envsubst "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v(" EOF "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" tmp/k8s-flux-repository/releases/podinfo-release.yaml\napiVersion: flux.weave.works/v1beta1\nkind: HelmRelease\nmetadata:\n  name: podinfo\n  namespace: default\n  annotations:\n    flux.weave.works/automated: "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"false"')]),a._v("\nspec:\n  releaseName: podinfo\n  targetNamespace: default\n  chart:\n    repository: https://stefanprodan.github.io/podinfo\n    name: podinfo\n    version: "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2.1")]),a._v(".1\n  values:\n    service:\n      enabled: "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v("\n    message: Hello "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("-"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nEOF\n\nenvsubst "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v(" EOF "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" tmp/k8s-flux-repository/workloads/podinfo.yaml\napiVersion: networking.istio.io/v1alpha3\nkind: VirtualService\nmetadata:\n  name: podinfo-http-virtual-service\n  namespace: default\nspec:\n  hosts:\n  - podinfo."),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${MY_DOMAIN}")]),a._v("\n  gateways:\n  - istio-system/istio-autogenerated-k8s-ingress\n  http:\n  - route:\n    - destination:\n        host: podinfo.default.svc.cluster.local\n        port:\n          number: "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("9898")]),a._v("\nEOF\n")])])]),s("p",[a._v("Push the changes to the Git repository:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" -C tmp/k8s-flux-repository "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" --verbose "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" -C tmp/k8s-flux-repository commit -m "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Add podinfo HelmRelease"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" -C tmp/k8s-flux-repository push -q\nfluxctl "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sync")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sleep")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("20")]),a._v("\n")])])]),s("p",[a._v("Output:")]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("add 'releases/podinfo-release.yaml'\nadd 'workloads/podinfo.yaml'\n[master 03164b6] Add podinfo HelmRelease\n 2 files changed, 34 insertions(+)\n create mode 100644 releases/podinfo-release.yaml\n create mode 100644 workloads/podinfo.yaml\nSynchronizing with git@github.com:ruzickap/k8s-flux-repository\nRevision of master to apply is 03164b6\nWaiting for 03164b6 to be applied ...\nDone.\n")])])]),s("p",[a._v("List the installed Helm Charts:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("helm "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v("\n")])])]),s("p",[a._v("Output:")]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("NAME            REVISION        UPDATED                         STATUS          CHART                APP VERSION     NAMESPACE\ncert-manager    1               Thu Aug 29 09:40:16 2019        DEPLOYED        cert-manager-v0.9.0  v0.9.0          cert-manager\nflux            1               Thu Aug 29 09:39:10 2019        DEPLOYED        flux-0.12.0          1.13.3          flux\ngitlab          1               Thu Aug 29 10:34:40 2019        DEPLOYED        gitlab-2.2.0         12.2.0          gitlab\nharbor          1               Thu Aug 29 09:46:13 2019        DEPLOYED        harbor-1.1.1         1.8.1           harbor\nistio           1               Thu Aug 29 09:42:29 2019        DEPLOYED        istio-1.2.5          1.2.5           istio-system\nistio-init      1               Thu Aug 29 09:41:22 2019        DEPLOYED        istio-init-1.2.5     1.2.5           istio-system\nkubed           1               Thu Aug 29 09:40:48 2019        DEPLOYED        kubed-0.9.0          0.9.0           kubed\npodinfo         1               Thu Aug 29 10:35:53 2019        DEPLOYED        podinfo-2.1.1        2.1.1           default\n")])])]),s("p",[a._v("Show the history of "),s("code",[a._v("podinfo")]),a._v(":")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("helm "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("history")]),a._v(" podinfo\n")])])]),s("p",[a._v("Output:")]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("REVISION        UPDATED                         STATUS          CHART           DESCRIPTION\n1               Thu Aug 29 10:35:53 2019        DEPLOYED        podinfo-2.1.1   Install complete\n")])])]),s("p",[a._v("Check the HelmRelease details for "),s("code",[a._v("podinfo")]),a._v(":")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("kubectl describe helmreleases.flux.weave.works podinfo\n")])])]),s("p",[a._v("Output:")]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('Name:         podinfo\nNamespace:    default\nLabels:       flux.weave.works/sync-gc-mark=sha256.grAYAKjn3uQ_4t8EXwcBCfJndY8XeUwdNz_dOeTJTcs\nAnnotations:  flux.weave.works/automated: false\n              flux.weave.works/sync-checksum: 59cb325964b3d10ff647d8426eccf14f8592f437\n              kubectl.kubernetes.io/last-applied-configuration:\n                {"apiVersion":"flux.weave.works/v1beta1","kind":"HelmRelease","metadata":{"annotations":{"flux.weave.works/automated":"false","flux.weave....\nAPI Version:  flux.weave.works/v1beta1\nKind:         HelmRelease\nMetadata:\n  Creation Timestamp:  2019-08-29T08:35:53Z\n  Generation:          1\n  Resource Version:    10677\n  Self Link:           /apis/flux.weave.works/v1beta1/namespaces/default/helmreleases/podinfo\n  UID:                 036d2df0-ca38-11e9-8542-026128d6be42\nSpec:\n  Chart:\n    Name:            podinfo\n    Repository:      https://stefanprodan.github.io/podinfo\n    Version:         2.1.1\n  Release Name:      podinfo\n  Target Namespace:  default\n  Values:\n    Message:  Hello ;-)\n    Service:\n      Enabled:  true\nStatus:\n  Conditions:\n    Last Transition Time:  2019-08-29T08:35:54Z\n    Last Update Time:      2019-08-29T08:35:54Z\n    Message:               helm install succeeded\n    Reason:                HelmSuccess\n    Status:                True\n    Type:                  Released\n    Last Transition Time:  2019-08-29T08:35:53Z\n    Last Update Time:      2019-08-29T08:36:28Z\n    Message:               chart fetched: podinfo-2.1.1.tgz\n    Reason:                RepoChartInCache\n    Status:                True\n    Type:                  ChartFetched\n  Observed Generation:     1\n  Release Name:            podinfo\n  Release Status:          DEPLOYED\n  Revision:                2.1.1\n  Values Checksum:         d16a2a7c9df4d3b7e98f4dd15ba8f9a83b4d05305f3830567d9372e6f088097e\nEvents:\n  Type    Reason       Age                From           Message\n  ----    ------       ----               ----           -------\n  Normal  ChartSynced  29s (x2 over 63s)  helm-operator  Chart managed by HelmRelease processed\n')])])]),s("p",[a._v("List the running pods:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("kubectl get pods\n")])])]),s("p",[a._v("Output:")]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("NAME                       READY   STATUS    RESTARTS   AGE\npodinfo-85d47bf859-bt6h6   1/1     Running   0          71s\n")])])]),s("p",[a._v("Get the pod's image version:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("kubectl describe pods "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" Image:\n")])])]),s("p",[a._v("Output:")]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("    Image:         stefanprodan/podinfo:2.1.1\n")])])]),s("p",[a._v("List the Flux workloads:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("fluxctl list-workloads\n")])])]),s("p",[a._v("Output:")]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("WORKLOAD                     CONTAINER  IMAGE                       RELEASE   POLICY\ndefault:deployment/podinfo   podinfo    stefanprodan/podinfo:2.1.1  ready\ndefault:helmrelease/podinfo                                         DEPLOYED\n")])])]),s("p",[a._v("List the images discovered by Flux:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("fluxctl list-images -n default "),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("2")]),a._v(">")]),a._v("/dev/null\n")])])]),s("p",[a._v("Output:")]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("WORKLOAD                     CONTAINER  IMAGE                 CREATED\ndefault:deployment/podinfo   podinfo    stefanprodan/podinfo\n                                        |   2.1.3             13 Aug 19 09:33 UTC\n                                        |   latest            13 Aug 19 09:33 UTC\n                                        |   2.1.2             13 Aug 19 07:53 UTC\n                                        '-> 2.1.1             13 Aug 19 07:51 UTC\n                                            2.1.0             07 Aug 19 13:18 UTC\n...\ndefault:helmrelease/podinfo\n")])])]),s("p",[a._v("Upgrade the "),s("code",[a._v("podinfo")]),a._v(" Helm Chart to "),s("code",[a._v("2.1.3")]),a._v(":")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sed")]),a._v(" -i "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"s/version: 2.1.1/version: 2.1.3/"')]),a._v(" tmp/k8s-flux-repository/releases/podinfo-release.yaml\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" -C tmp/k8s-flux-repository "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("diff")]),a._v(" releases/podinfo-release.yaml\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" -C tmp/k8s-flux-repository "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" --verbose "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" -C tmp/k8s-flux-repository commit -m "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Increase podinfo Helm version"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" -C tmp/k8s-flux-repository push -q\nfluxctl "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sync")]),a._v("\n")])])]),s("p",[a._v("Output:")]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("add 'releases/podinfo-release.yaml'\n[master 954ab8e] Increase podinfo Helm version\n 1 file changed, 1 insertion(+), 1 deletion(-)\nSynchronizing with git@github.com:ruzickap/k8s-flux-repository\nRevision of master to apply is 954ab8e\nWaiting for 954ab8e to be applied ...\nDone.\n")])])]),s("p",[a._v("List the release history of "),s("code",[a._v("podinfo")]),a._v(":")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("helm "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("history")]),a._v(" podinfo\n")])])]),s("p",[a._v("Output:")]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("REVISION        UPDATED                         STATUS          CHART           DESCRIPTION\n1               Thu Aug 29 10:35:53 2019        SUPERSEDED      podinfo-2.1.1   Install complete\n2               Thu Aug 29 10:39:39 2019        DEPLOYED        podinfo-2.1.3   Upgrade complete\n")])])]),s("p",[a._v("Check the "),s("code",[a._v("HelmRelease")]),a._v(" details:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("kubectl describe helmreleases.flux.weave.works podinfo\n")])])]),s("p",[a._v("Output:")]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('Name:         podinfo\nNamespace:    default\nLabels:       flux.weave.works/sync-gc-mark=sha256.grAYAKjn3uQ_4t8EXwcBCfJndY8XeUwdNz_dOeTJTcs\nAnnotations:  flux.weave.works/automated: false\n              flux.weave.works/sync-checksum: 67cb807881a41e240fb226cf33885f6e88a03168\n              kubectl.kubernetes.io/last-applied-configuration:\n                {"apiVersion":"flux.weave.works/v1beta1","kind":"HelmRelease","metadata":{"annotations":{"flux.weave.works/automated":"false","flux.weave....\nAPI Version:  flux.weave.works/v1beta1\nKind:         HelmRelease\nMetadata:\n  Creation Timestamp:  2019-08-29T08:35:53Z\n  Generation:          2\n  Resource Version:    11198\n  Self Link:           /apis/flux.weave.works/v1beta1/namespaces/default/helmreleases/podinfo\n  UID:                 036d2df0-ca38-11e9-8542-026128d6be42\nSpec:\n  Chart:\n    Name:            podinfo\n    Repository:      https://stefanprodan.github.io/podinfo\n    Version:         2.1.3\n  Release Name:      podinfo\n  Target Namespace:  default\n  Values:\n    Message:  Hello ;-)\n    Service:\n      Enabled:  true\nStatus:\n  Conditions:\n    Last Transition Time:  2019-08-29T08:35:53Z\n    Last Update Time:      2019-08-29T08:39:38Z\n    Message:               chart fetched: podinfo-2.1.3.tgz\n    Reason:                RepoChartInCache\n    Status:                True\n    Type:                  ChartFetched\n    Last Transition Time:  2019-08-29T08:35:54Z\n    Last Update Time:      2019-08-29T08:39:39Z\n    Message:               helm upgrade succeeded\n    Reason:                HelmSuccess\n    Status:                True\n    Type:                  Released\n  Observed Generation:     2\n  Release Name:            podinfo\n  Release Status:          DEPLOYED\n  Revision:                2.1.3\n  Values Checksum:         d16a2a7c9df4d3b7e98f4dd15ba8f9a83b4d05305f3830567d9372e6f088097e\nEvents:\n  Type    Reason       Age                  From           Message\n  ----    ------       ----                 ----           -------\n  Normal  ChartSynced  73s (x4 over 4m58s)  helm-operator  Chart managed by HelmRelease processed\n')])])]),s("p",[a._v("Check the Helm Charts:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("helm "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v("\n")])])]),s("p",[a._v("Output:")]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("NAME            REVISION        UPDATED                         STATUS          CHART                APP VERSION     NAMESPACE\ncert-manager    1               Thu Aug 29 09:40:16 2019        DEPLOYED        cert-manager-v0.9.0  v0.9.0          cert-manager\nflux            1               Thu Aug 29 09:39:10 2019        DEPLOYED        flux-0.12.0          1.13.3          flux\ngitlab          1               Thu Aug 29 10:34:40 2019        DEPLOYED        gitlab-2.2.0         12.2.0          gitlab\nharbor          1               Thu Aug 29 09:46:13 2019        DEPLOYED        harbor-1.1.1         1.8.1           harbor\nistio           1               Thu Aug 29 09:42:29 2019        DEPLOYED        istio-1.2.5          1.2.5           istio-system\nistio-init      1               Thu Aug 29 09:41:22 2019        DEPLOYED        istio-init-1.2.5     1.2.5           istio-system\nkubed           1               Thu Aug 29 09:40:48 2019        DEPLOYED        kubed-0.9.0          0.9.0           kubed\npodinfo         2               Thu Aug 29 10:39:39 2019        DEPLOYED        podinfo-2.1.3        2.1.3           default\n")])])]),s("p",[a._v("Let's remove the podinfo Helm chart:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" tmp/k8s-flux-repository/releases/podinfo-release.yaml\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" -C tmp/k8s-flux-repository "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" --verbose "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" -C tmp/k8s-flux-repository commit -m "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Remove podinfo Helm Chart"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" -C tmp/k8s-flux-repository push -q\nfluxctl "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sync")]),a._v("\n")])])]),s("p",[a._v("Output:")]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("remove 'releases/podinfo-release.yaml'\n[master bd15a3a] Remove podinfo Helm Chart\n 1 file changed, 18 deletions(-)\n delete mode 100644 releases/podinfo-release.yaml\nSynchronizing with git@github.com:ruzickap/k8s-flux-repository\nRevision of master to apply is bd15a3a\nWaiting for bd15a3a to be applied ...\nDone.\n")])])]),s("p",[a._v("Check the Helm Charts:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("helm "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v("\n")])])]),s("p",[a._v("Output:")]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("NAME            REVISION        UPDATED                         STATUS          CHART                APP VERSION     NAMESPACE\ncert-manager    1               Thu Aug 29 09:40:16 2019        DEPLOYED        cert-manager-v0.9.0  v0.9.0          cert-manager\nflux            1               Thu Aug 29 09:39:10 2019        DEPLOYED        flux-0.12.0          1.13.3          flux\ngitlab          1               Thu Aug 29 10:34:40 2019        DEPLOYED        gitlab-2.2.0         12.2.0          gitlab\nharbor          1               Thu Aug 29 09:46:13 2019        DEPLOYED        harbor-1.1.1         1.8.1           harbor\nistio           1               Thu Aug 29 09:42:29 2019        DEPLOYED        istio-1.2.5          1.2.5           istio-system\nistio-init      1               Thu Aug 29 09:41:22 2019        DEPLOYED        istio-init-1.2.5     1.2.5           istio-system\nkubed           1               Thu Aug 29 09:40:48 2019        DEPLOYED        kubed-0.9.0          0.9.0           kubed\n")])])]),s("h2",{attrs:{id:"gitlab-upgrade"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gitlab-upgrade","aria-hidden":"true"}},[a._v("#")]),a._v(" GitLab upgrade")]),a._v(" "),s("p",[a._v("Open the GitLab URL ( "),s("code",[a._v("root")]),a._v(" / "),s("code",[a._v("admin123")]),a._v(" ) and check the version ("),s("code",[a._v("12.2.0")]),a._v(')\nin the "Admin" area:')]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://gitlab.mylabs.dev",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://gitlab.mylabs.dev"),s("OutboundLink")],1),a._v(", "),s("a",{attrs:{href:"http://gitlab.mylabs.dev",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://gitlab.mylabs.dev"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("code",[a._v("ssh://gitlab.mylabs.dev")])])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(" -x /usr/bin/chromium-browser "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("then")]),a._v(" chromium-browser https://gitlab.mylabs.dev "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("fi")]),a._v("\n")])])]),s("p",[a._v("Upgrade GitLab to version "),s("code",[a._v("12.2.1")]),a._v(":")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sed")]),a._v(" -i "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"s/version: 2.2.0/version: 2.2.1/"')]),a._v(" tmp/k8s-flux-repository/releases/gitlab-release.yaml\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" -C tmp/k8s-flux-repository "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" --verbose "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" -C tmp/k8s-flux-repository commit -m "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Increase GitLab Helm version"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" -C tmp/k8s-flux-repository push -q\nfluxctl "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sync")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("COUNTER")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("while")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$COUNTER")]),a._v(" -lt "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("25")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("do")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("COUNTER")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$((")]),a._v("COUNTER"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("))")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" kubectl get pods -n gitlab "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sleep")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("done")]),a._v("\n")])])]),s("p",[a._v("Output:")]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("add 'releases/gitlab-release.yaml'\n[master 581de58] Increase GitLab Helm version\n 1 file changed, 1 insertion(+), 1 deletion(-)\nSynchronizing with git@github.com:ruzickap/k8s-flux-repository\nRevision of master to apply is 581de58\nWaiting for 581de58 to be applied ...\nDone.\n...\nNAME                                       READY   STATUS            RESTARTS   AGE\ngitlab-gitaly-0                            1/1     Terminating       0          9m50s\ngitlab-gitlab-monitor-54c8678797-cknps     1/1     Running           0          9m51s\ngitlab-gitlab-monitor-7886dc78bb-dvpgr     0/1     PodInitializing   0          7s\ngitlab-gitlab-shell-7b56949489-vhn72       1/1     Running           0          9m51s\ngitlab-gitlab-shell-7b56949489-zlfsz       1/1     Running           0          9m34s\ngitlab-gitlab-shell-7d5875b7f8-lcvqb       0/1     PodInitializing   0          7s\ngitlab-migrations.2-8bbgg                  0/1     PodInitializing   0          7s\ngitlab-minio-5746f7f7c7-bckgb              1/1     Running           0          9m50s\ngitlab-minio-create-buckets.2-z8c9b        0/1     Completed         0          7s\ngitlab-postgresql-554d9fc6d5-fk627         2/2     Running           0          9m50s\ngitlab-redis-78549bd659-hwsjd              2/2     Running           0          9m50s\ngitlab-sidekiq-all-in-1-6f4947dc45-z9p9n   0/1     Init:1/3          0          7s\ngitlab-sidekiq-all-in-1-7bfc6b75-44wmv     1/1     Running           0          9m50s\ngitlab-task-runner-6dfd9d767-spdhf         1/1     Terminating       0          9m50s\ngitlab-unicorn-6d755544d6-s8g4s            0/2     Init:2/3          0          7s\ngitlab-unicorn-7d7c54b787-6cm8f            2/2     Running           0          9m34s\ngitlab-unicorn-7d7c54b787-r8fvv            2/2     Running           0          9m50s\n...\n")])])]),s("p",[a._v("Verify if all the GitLab pods are running:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("kubectl get pods -n gitlab\n")])])]),s("p",[a._v("Output:")]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("NAME                                       READY   STATUS      RESTARTS   AGE\ngitlab-gitaly-0                            1/1     Running     0          3m22s\ngitlab-gitlab-monitor-7886dc78bb-dvpgr     1/1     Running     0          3m59s\ngitlab-gitlab-shell-7d5875b7f8-lcvqb       1/1     Running     0          3m59s\ngitlab-gitlab-shell-7d5875b7f8-p4bw2       1/1     Running     0          3m32s\ngitlab-migrations.2-8bbgg                  0/1     Completed   0          3m59s\ngitlab-minio-5746f7f7c7-bckgb              1/1     Running     0          13m\ngitlab-minio-create-buckets.2-z8c9b        0/1     Completed   0          3m59s\ngitlab-postgresql-554d9fc6d5-fk627         2/2     Running     0          13m\ngitlab-redis-78549bd659-hwsjd              2/2     Running     0          13m\ngitlab-sidekiq-all-in-1-6f4947dc45-z9p9n   1/1     Running     0          3m59s\ngitlab-task-runner-6cd5894bf6-qhp8n        1/1     Running     0          3m21s\ngitlab-unicorn-6d755544d6-d7vqz            2/2     Running     0          2m31s\ngitlab-unicorn-6d755544d6-s8g4s            2/2     Running     0          3m59s\n")])])]),s("p",[a._v("Then verify the GitLab version again (should be "),s("code",[a._v("12.2.1")]),a._v(").")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("helm "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v("\n")])])]),s("p",[a._v("Output:")]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("NAME            REVISION        UPDATED                         STATUS          CHART                APP VERSION     NAMESPACE\ncert-manager    1               Thu Aug 29 09:40:16 2019        DEPLOYED        cert-manager-v0.9.0  v0.9.0          cert-manager\nflux            1               Thu Aug 29 09:39:10 2019        DEPLOYED        flux-0.12.0          1.13.3          flux\ngitlab          2               Thu Aug 29 10:44:09 2019        DEPLOYED        gitlab-2.2.1         12.2.1          gitlab\nharbor          1               Thu Aug 29 09:46:13 2019        DEPLOYED        harbor-1.1.1         1.8.1           harbor\nistio           1               Thu Aug 29 09:42:29 2019        DEPLOYED        istio-1.2.5          1.2.5           istio-system\nistio-init      1               Thu Aug 29 09:41:22 2019        DEPLOYED        istio-init-1.2.5     1.2.5           istio-system\nkubed           1               Thu Aug 29 09:40:48 2019        DEPLOYED        kubed-0.9.0          0.9.0           kubed\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);