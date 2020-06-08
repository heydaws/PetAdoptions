#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';

import { Services } from '../lib/services';
import { PetSiteServiceEKS } from '../lib/eks-test';

const stackName = "Services";
const app = new cdk.App();

new Services(app, stackName);
//new PetSiteServiceEKS(app,'ecrPetSiteServiceEKS');