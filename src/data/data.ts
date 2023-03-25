import type Variant from "~/types/Variant";

const data: Variant[] = [
  {
    name: "Spiking Neural P Systems",
    description: "Standard SN P system",
    references: [
      {
        link: "https://www.researchgate.net/publication/220443792_Spiking_Neural_P_Systems",
        doi: "",
        authors: [
          {
            firstName: "Mihai",
            lastName: "Ionescu",
          },
          {
            firstName: "Gheorghe",
            lastName: "Păun",
          },
          {
            firstName: "Takashi",
            lastName: "Yokomori",
          },
        ],
        date: new Date(2006, 5),
        open: true,
        bibtex: `
@article{article,
	author = {Ionescu, Mihai and Paun, Gheorghe and Yokomori, Takashi},
	year = {2006},
	month = {06},
	pages = {279-308},
	title = {Spiking Neural P Systems.},
	volume = {71},
	journal = {Fundam. Inform.}
}
				`,
      },
    ],
  },
  {
    name: "Homogeneous Spiking Neural P Systems",
    description: "All neurons have the same ruleset",
    references: [
      {
        link: "https://content.iospress.com/articles/fundamenta-informaticae/fi97-1-2-11",
        doi: "10.3233/FI-2009-200",
        authors: [
          {
            firstName: "Xiangxiang",
            lastName: "Zeng",
          },
          {
            firstName: "Xingyi",
            lastName: "Zhang",
          },
          {
            firstName: "Linqiang",
            lastName: "Pan",
          },
        ],
        date: new Date(2009, 11),
        open: false,
        bibtex: "",
      },
    ],
  },
  {
    name: "Spiking Neural P Systems with Communication on Request",
    description: "Spikes are only moved or replicated",
    references: [
      {
        link: "https://www.worldscientific.com/doi/10.1142/S0129065717500423",
        doi: "10.1142/S0129065717500423",
        authors: [
          {
            firstName: "Linqiang",
            lastName: "Pan",
          },
          {
            firstName: "Gheorghe",
            lastName: "Păun",
          },
          {
            firstName: "Gexiang",
            lastName: "Zhang",
          },
          {
            firstName: "Ferrante",
            lastName: "Neri",
          },
        ],
        date: new Date(2017, 9),
        open: false,
        bibtex: `
@article{doi:10.1142/S0129065717500423,
	author = {Pan, Linqiang and P\u{a}un, Gheorghe and Zhang, Gexiang and Neri, Ferrante},
	title = {Spiking Neural P Systems with Communication on Request},
	journal = {International Journal of Neural Systems},
	volume = {27},
	number = {08},
	pages = {1750042},
	year = {2017},
	doi = {10.1142/S0129065717500423},
	note = {PMID: 28982286},
	URL = {https://doi.org/10.1142/S0129065717500423},
	eprint = {https://doi.org/10.1142/S0129065717500423},
}
`,
      },
    ],
  },
  {
    name: "Spiking Neural P Systems with Structural Plasticity",
    description: "Synapses can be created or deleted",
    references: [
      {
        link: "https://link.springer.com/article/10.1007/s00521-015-1857-4",
        doi: "10.1007/s00521-015-1857-4",
        authors: [
          {
            firstName: "Francis George",
            lastName: "Cabarle",
          },
          {
            firstName: "Henry",
            lastName: "Adorna",
          },
          {
            firstName: "Mario",
            lastName: "Pérez-Jiménez",
          },
        ],
        date: new Date(2015, 1),
        open: false,
        bibtex: "",
      },
    ],
  },
  {
    name: "Spiking Neural P Systems with Neuron Division and Budding",
    description: "Neurons can clone themselves",
    references: [
      {
        link: "https://www.researchgate.net/publication/225970721_Spiking_neural_P_systems_with_neuron_division_and_budding",
        doi: "10.1007/s11432-011-4303-y",
        authors: [
          {
            firstName: "Linqiang",
            lastName: "Pan",
          },
          {
            firstName: "Gheorghe",
            lastName: "Păun",
          },
          {
            firstName: "Mario",
            lastName: "Pérez-Jiménez",
          },
        ],
        date: new Date(2011, 7),
        open: true,
        bibtex: `
@article{article,
	author = {Pan, Linqiang and Păun, Gheorghe and Pérez-Jiménez, Mario},
	year = {2011},
	month = {08},
	pages = {1596-1607},
	title = {Spiking neural P systems with neuron division and budding},
	volume = {54},
	journal = {Sciece China. Information Sciences},
	doi = {10.1007/s11432-011-4303-y}
}
`,
      },
    ],
  },
  {
    name: "Asynchronous Spiking Neural P Systems",
    description: "Neurons can decide not to apply rules",
    references: [
      {
        link: "https://www.sciencedirect.com/science/article/pii/S0304397509001807",
        doi: "10.1016/j.tcs.2009.02.031",
        authors: [
          {
            firstName: "Matteo",
            lastName: "Cavaliere",
          },
          {
            firstName: "Oscar",
            lastName: "Ibarra",
          },
          {
            firstName: "Gheorghe",
            lastName: "Păun",
          },
          {
            firstName: "Omer",
            lastName: "Egecioglu",
          },
          {
            firstName: "Mihai",
            lastName: "Ionescu",
          },
          {
            firstName: "Sara",
            lastName: "Woodworth",
          },
        ],
        date: new Date(2009, 4),
        open: true,
        bibtex: `
@article{CAVALIERE20092352,
	title = {Asynchronous spiking neural P systems},
	journal = {Theoretical Computer Science},
	volume = {410},
	number = {24},
	pages = {2352-2364},
	year = {2009},
	note = {Formal Languages and Applications: A Collection of Papers in Honor of Sheng Yu},
	issn = {0304-3975},
	doi = {https://doi.org/10.1016/j.tcs.2009.02.031},
	url = {https://www.sciencedirect.com/science/article/pii/S0304397509001807},
	author = {Matteo Cavaliere and Oscar H. Ibarra and Gheorghe Păun and Omer Egecioglu and Mihai Ionescu and Sara Woodworth},
	keywords = {Membrane computing, Spiking neural P system, Turing computability, Counter machine, Decidability},
}
`,
      },
    ],
  },
  {
    name: "Time-free Spiking Neural P Systems",
    description: "Execution times of rules do not affect computed set",
    references: [
      {
        link: "https://direct.mit.edu/neco/article-abstract/23/5/1320/7654/Time-Free-Spiking-Neural-P-Systems",
        doi: "10.1162/NECO_a_00115",
        authors: [
          {
            firstName: "Linqiang",
            lastName: "Pan",
          },
          {
            firstName: "Xiangxiang",
            lastName: "Zeng",
          },
          {
            firstName: "Xingyi",
            lastName: "Zhang",
          },
        ],
        date: new Date(2011, 4),
        open: false,
        bibtex: `
@article{10.1162/NECO_a_00115,
	author = {Pan, Linqiang and Zeng, Xiangxiang and Zhang, Xingyi},
	title = "{Time-Free Spiking Neural P Systems}",
	journal = {Neural Computation},
	volume = {23},
	number = {5},
	pages = {1320-1342},
	year = {2011},
	month = {05},
	issn = {0899-7667},
	doi = {10.1162/NECO_a_00115},
	url = {https://doi.org/10.1162/NECO\_a\_00115},
	eprint = {https://direct.mit.edu/neco/article-pdf/23/5/1320/856886/neco\_a\_00115.pdf},
}
`,
      },
    ],
  },
	{
		name: "Fuzzy Reasoning Spiking Neural P Systems",
		description: "",
		references: [
			{
				link: "https://www.sciencedirect.com/science/article/abs/pii/S0020025512004793",
				doi: "10.1016/j.ins.2012.07.015",
				authors: [
					{
						firstName: "Hong",
						lastName: "Peng",
					},
					{
						firstName: "Jun",
						lastName: "Wang",
					},
					{
						firstName: "Mario",
						lastName: "Pérez-Jiménez",
					},
					{
						firstName: "Hao",
						lastName: "Wang",
					},
					{
						firstName: "Jie",
						lastName: "Shao",
					},
					{
						firstName: "Tao",
						lastName: "Wang",
					},
				],
				date: new Date(2013, 5),
				open: false,
				bibtex: `
@article{PENG2013106,
	title = {Fuzzy reasoning spiking neural P system for fault diagnosis},
	journal = {Information Sciences},
	volume = {235},
	pages = {106-116},
	year = {2013},
	note = {Data-based Control, Decision, Scheduling and Fault Diagnostics},
	issn = {0020-0255},
	doi = {https://doi.org/10.1016/j.ins.2012.07.015},
	url = {https://www.sciencedirect.com/science/article/pii/S0020025512004793},
	author = {Hong Peng and Jun Wang and Mario J. Pérez-Jiménez and Hao Wang and Jie Shao and Tao Wang},
	keywords = {Fault diagnosis, P systems, Spiking neural P systems, Fuzzy knowledge representation, Fuzzy reasoning},
}
`,
			},
		],
	},
  {
    name: "Spiking Neural P Systems with Chain structures",
  },
  {
    name: "Improved Spiking Neural P Systems",
  },
  {
    name: "Neural-like Probabilistic Spiking Neural P Systems",
  },
  {
    name: "Spiking Neural P Systems with Pre-Computed Resources",
  },
  {
    name: "Spiking Neural P Systems with Self-Updating Rules",
  },
  {
    name: "Optimization Spiking Neural P Systems",
  },
  {
    name: "Interval-Valued Fuzzy Reasoning Spiking Neural P Systems",
  },
  {
    name: "Trapezoidal Fuzzy Reasoning Spiking Neural P Systems",
  },
  {
    name: "Triangular Fuzzy Reasoning Spiking Neural P Systems",
  },
  {
    name: "Temporal Fuzzy Reasoning Spiking Neural P Systems with real numbers",
  },
  {
    name: "Adaptive Fuzzy Reasoning Spiking Neural P Systems",
  },
  {
    name: "Weighted Fuzzy Reasoning Spiking Neural P Systems",
  },
  {
    name: "Intuitionistic Fuzzy Reasoning Spiking Neural P Systems",
  },
  {
    name: "Electrical Synaptic Transmission-based Spiking Neural P Systems",
  },
  {
    name: "Modified Fuzzy Reasoning Spiking Neural P Systems",
  },
  {
    name: "Real Fuzzy Reasoning Spiking Neural P Systems",
  },
  {
    name: "Extended Spiking Neural P Systems",
  },
  {
    name: "Extended Spiking Neural P Systems with Excitatory and Inhibitory Astrocytes",
  },
  {
    name: "Spiking Neural P Systems with Hebbian Learning",
  },
  {
    name: "Spiking Neural P Systems with Thresholds",
  },
  {
    name: "Spiking Neural P Systems with Dendritic Delay",
  },
  {
    name: "Weighted Spiking Neural P Systems with Anti-spikes",
  },
  {
    name: "Spiking Neural P Systems with Polarizations",
    description:
      "Spike counts no longer checked, polarization {–, 0, +} is used instead",
    references: [
      {
        link: "https://ieeexplore.ieee.org/document/7999266",
        doi: "10.1109/TNNLS.2017.2726119",
        authors: [
          {
            firstName: "Tingfang",
            lastName: "Wu",
          },
          {
            firstName: "Andrei",
            lastName: "Păun",
          },
          {
            firstName: "Zhiqiang",
            lastName: "Zhang",
          },
          {
            firstName: "Linqiang",
            lastName: "Pan",
          },
        ],
        date: new Date(2018, 7),
        open: false,
        bibtex: `
@ARTICLE{7999266,
  author={Wu, Tingfang and Păun, Andrei and Zhang, Zhiqiang and Pan, Linqiang},
  journal={IEEE Transactions on Neural Networks and Learning Systems}, 
  title={Spiking Neural P Systems With Polarizations}, 
  year={2018},
  volume={29},
  number={8},
  pages={3349-3360},
  doi={10.1109/TNNLS.2017.2726119}
}
`,
      },
    ],
  },
  {
    name: "Spiking Neural P Systems with Anti-spikes",
    description: "Spikes can be annihilated by anti-spikes",
    references: [
      {
        link: "https://www.univagora.ro/jour/index.php/ijccc/article/view/2435",
        doi: "",
        authors: [
          {
            firstName: "Linqiang",
            lastName: "Pan",
          },
          {
            firstName: "Gheorghe",
            lastName: "Păun",
          },
        ],
        date: new Date(2009, 8),
        open: true,
        bibtex: "",
      },
    ],
  },
  {
    name: "Weighted Spiking Neural P Systems",
    description: "Synapses have weights, rules have thresholds",
    references: [
      {
        link: "https://ieeexplore.ieee.org/document/6795951",
        doi: "10.1162/NECO_a_00022",
        authors: [
          {
            firstName: "Jun",
            lastName: "Wang",
          },
          {
            firstName: "Hendrik Jan",
            lastName: "Hoogeboom",
          },
          {
            firstName: "Linqiang",
            lastName: "Pan",
          },
          {
            firstName: "Gheorghe",
            lastName: "Păun",
          },
          {
            firstName: "Mario",
            lastName: "Pérez-Jiménez",
          },
        ],
        date: new Date(2010, 9),
        open: false,
        bibtex: `
@ARTICLE{6795951,
  author={Wang, Jun and Hoogeboom, Hendrik Jan and Pan, Linqiang and Păun, Gheorghe and Pérez-Jiménez, Mario J.},
  journal={Neural Computation}, 
  title={Spiking Neural P Systems with Weights}, 
  year={2010},
  volume={22},
  number={10},
  pages={2615-2646},
  doi={10.1162/NECO_a_00022}
}
`,
      },
    ],
  },
  {
    name: "Spiking Neural P Systems with Astrocytes",
    description: "Synapses are controlled by astrocytes",
    references: [
      {
        link: "https://www.researchgate.net/publication/51809006_Spiking_Neural_P_Systems_with_Astrocytes",
        doi: "10.1162/NECO_a_00238",
        authors: [
          {
            firstName: "Linqiang",
            lastName: "Pan",
          },
          {
            firstName: "Jun",
            lastName: "Wang",
          },
          {
            firstName: "Hendrik Jan",
            lastName: "Hoogeboom",
          },
        ],
        date: new Date(2011, 10),
        open: true,
        bibtex: `
@article{article,
	author = {Pan, Linqiang and Wang, Jun and Hoogeboom, Hendrik},
	year = {2011},
	month = {11},
	pages = {805-25},
	title = {Spiking Neural P Systems with Astrocytes},
	volume = {24},
	journal = {Neural computation},
	doi = {10.1162/NECO_a_00238}
}
`,
      },
      {
        link: "https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=6d69cd96d25b50c67f1c501f2c2762ccf239488d",
        doi: "",
        authors: [
          {
            firstName: "Gheorghe",
            lastName: "Păun",
          },
        ],
        date: new Date(2007, 10),
        open: true,
        bibtex: "",
      },
    ],
  },
  {
    name: "Spiking Neural P Systems with rules on synapses",
    description: "Rules are on synapses instead of neurons",
    references: [
      {
        link: "https://www.sciencedirect.com/science/article/pii/S0304397514000188",
        doi: "10.1016/j.tcs.2014.01.001",
        authors: [
          {
            firstName: "Tao",
            lastName: "Song",
          },
          {
            firstName: "Linqiang",
            lastName: "Pan",
          },
          {
            firstName: "Gheorghe",
            lastName: "Păun",
          },
        ],
        date: new Date(2014, 3),
        open: true,
        bibtex: `
@article{SONG201482,
	title = {Spiking neural P systems with rules on synapses},
	journal = {Theoretical Computer Science},
	volume = {529},
	pages = {82-95},
	year = {2014},
	issn = {0304-3975},
	doi = {https://doi.org/10.1016/j.tcs.2014.01.001},
	url = {https://www.sciencedirect.com/science/article/pii/S0304397514000188},
	author = {Tao Song and Linqiang Pan and Gheorghe Păun},
	keywords = {Membrane computing, Spiking neural P system, Rule on synapse, Small universal system},
}
`,
      },
    ],
  },
  {
    name: "Numerical Spiking Neural P Systems",
    description: "Spikes & rules → Variables & functions",
    references: [
      {
        link: "https://ieeexplore.ieee.org/document/9138473",
        doi: "10.1109/TNNLS.2020.3005538",
        authors: [
          {
            firstName: "Tingfang",
            lastName: "Wu",
          },
          {
            firstName: "Linqiang",
            lastName: "Pan",
          },
          {
            firstName: "Qiang",
            lastName: "Yu",
          },
          {
            firstName: "Kay Chen",
            lastName: "Tan",
          },
        ],
        date: new Date(2020, 6),
        open: false,
        bibtex: `
@ARTICLE{9138473,
  author = {Wu, Tingfang and Pan, Linqiang and Yu, Qiang and Tan, Kay Chen},
  journal = {IEEE Transactions on Neural Networks and Learning Systems}, 
  title = {Numerical Spiking Neural P Systems}, 
  year = {2021},
  volume = {32},
  number = {6},
  pages = {2443-2457},
  doi = {10.1109/TNNLS.2020.3005538}
}
`,
      },
    ],
  },
];

export default data;
