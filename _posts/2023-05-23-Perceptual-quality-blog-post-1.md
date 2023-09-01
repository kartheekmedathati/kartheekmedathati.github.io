---
title: 'Perceptual Image Quality'
date: 2023-05-23
permalink: /posts/2023/05/blog-post-1/
tags:
  - Image quality
  - Objective metrics
  - Subjective metrics
  - Dataset creation
---

#### Introduction

1. What is Image quality assessment?
2. Are technical image quality and aesthetic image quality different?
3. What are the popular types of image quality assessment? Full Reference vs No Reference
4. What are the popular benchmarks? 
5. How do people collect ground truth for perceptual image quality measurement?
    - How do we convert subjective ratings into objective metrics? 
    - What are the computational challenges involved?
    - Is personalization required? 
6. What are the important applications of perceptual image quality assessment?


#### Important Datasets


*Under construction 
Here's the expanded table with instructions given to human annotators and the number of annotators used for each perceptual image quality estimation dataset:

| Dataset           | Number of Images | Ratings Metadata                                  | Number of Annotators | Annotator Instructions                                            | License Information                                  | Description and Creation Process                                                                                        |
|-------------------|------------------|--------------------------------------------------|----------------------|-------------------------------------------------------------------|-------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------|
| [LIVE](https://live.ece.utexas.edu/research/Quality/intro.htm)             | 29 reference,<br> 982 distorted | MOS from multiple observers;<br> Mean and standard deviation | 101                  | Conducted Mean Opinion Score (MOS) tests with paired comparisons | Not specified | Contains distorted images generated from reference images. Collected human-rated Mean Opinion Scores (MOS).         |
| [TID2013](https://www.ponomarenko.info/tid2013.htm)           | 25 reference,<br> 3000 distorted | MOS for various distortion types;<br> Std. dev. and skewness | 8 - 25               | Gave explicit instructions for scoring distortions           | Not specified | Reference and distorted images with various distortions. Collected MOS for each distortion type from observers.   |
| [CSIQ](https://qualinet.github.io/databases/image/categorical_image_quality_csiq_database/)              | 30 reference,<br> 866 distorted | MOS for different distortion types; Mean, median, and range | 6 - 25               | Performed ACR-based subjective quality evaluations          | Not specified | Reference and distorted images from different sources. MOS collected for various distortion types.                 |
| [MCL-JCI](https://mcl.usc.edu/mcl-jci-dataset/)           | 150 reference,<br> 1650 distorted | MOS from multiple observers; Std. dev. and skewness | 6 - 15               | Conducted absolute categorical judgment experiments        | Not specified | Includes reference and distorted images with diverse distortions. Collected in a controlled lab environment.      |
| [TID2008](https://www.ponomarenko.info/tid2008.htm)           | 25 reference,<br> 1700 distorted | MOS for various distortion types; Std. dev. and skewness | 25                   | Provided detailed guidelines and protocols for subjective tests | Not specified | Contains reference and distorted images with multiple distortion types. Subjective scores gathered from observers. |
| [KADID-10k](http://database.mmsp-kn.de/kadid-10k-database.html)         |  images    | MOS from diverse observers; Std. dev. and skewness | 229                  | Performed paired comparison tests                             | Creative Commons BY-NC-SA 4.0 | Large-scale database with diverse distortions. MOS collected from a variety of observers.                         |
| [KONVID-1k](http://database.mmsp-kn.de/konvid-1k-database.html)         |  videos     | MOS for video sequences; Std. dev. and skewness | 120 - 180            | Collected MOS using Single Stimulus Continuous Quality Evaluation | Not specified | Focuses on video quality. Contains video sequences with distortion types. Provides MOS for each sequence.         |
| [KOSMO-1k](http://database.mmsp-kn.de/kosmo-1k-database.html)         | 1350 videos     | MOS for video sequences; Std. dev. and skewness | 120 - 180            | Collected MOS using Single Stimulus Continuous Quality Evaluation | Not specified | Focuses on video quality. Contains video sequences with distortion types. Provides MOS for each sequence.         |
| [EVA](https://github.com/kang-gnak/eva-dataset)         |      | MOS for video sequences; Std. dev. and skewness | 120 - 180            | Collected MOS using Single Stimulus Continuous Quality Evaluation | Not specified | Explainable Visual Aesthetics |
| [RPCD](https://github.com/mediatechnologycenter/aestheval)         |      | MOS for video sequences; Std. dev. and skewness | 120 - 180            | Collected MOS using Single Stimulus Continuous Quality Evaluation | Not specified | Explainable Visual Aesthetics |


#### References
1. https://github.com/chaofengc/Awesome-Image-Quality-Assessment
2. https://towardsdatascience.com/deep-image-quality-assessment-30ad71641fac
3. https://github.com/idealo/image-quality-assessment
4. https://github.com/weizhou-geek/Image-Quality-Assessment-Benchmark
5. https://en.wikipedia.org/wiki/Image_quality




