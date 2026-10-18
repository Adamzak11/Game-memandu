import * as THREE from 'three';
import { RoadNetwork } from '../src/world/RoadNetwork.js';
import { buildMapDefinition } from '../src/data/mapData.js';
import { TrafficLights } from '../src/world/TrafficLights.js';
import { Pedestrians } from '../src/world/Pedestrians.js';
import { TrafficManager } from '../src/game/TrafficManager.js';
import { mulberry32 } from '../src/game/util.js';

// Math.random berbenih supaya ujian boleh diulang
export function seedRandom(seed) {
  Math.random = mulberry32(seed);
}

// Dunia minimum tanpa DOM (tiada tekstur canvas) untuk ujian Node.
export function makeTestWorld() {
  const network = new RoadNetwork(buildMapDefinition());
  const scene = new THREE.Scene();
  const lights = new TrafficLights(network);
  const world = { network, scene, lights };
  world.pedestrians = new Pedestrians(network, scene);
  world.colliders = [];
  world.collidersNear = () => [];
  const traffic = new TrafficManager(world);
  return { world, network, traffic };
}

export function makePlayer(x = 5000, z = 5000) {
  return { x, z, yaw: 0, speed: 0, length: 4.3, width: 1.78, signal: 0, laneInfo: null };
}
