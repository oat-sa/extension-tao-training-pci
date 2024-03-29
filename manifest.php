<?php
/**
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; under version 2
 * of the License (non-upgradable).
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 *
 * Copyright (c) 2022 (original work) Open Assessment Technologies;
 *
 *
 */
use oat\taoTrainingPci\scripts\install\RegisterPciDatePickerIMS;
use oat\taoTrainingPci\scripts\install\RegisterPciDateTimePickerIMS;

return array(
    'name' => 'taoTrainingPci',
	'label' => 'PCI Training',
	'description' => 'Contains PCIs for training purpose',
    'license' => 'GPL-2.0',
	'author' => 'Open Assessment Technologies',
	'managementRole' => 'http://www.tao.lu/Ontologies/generis.rdf#taoTrainingPciManager',
    'acl' => array(
        array('grant', 'http://www.tao.lu/Ontologies/generis.rdf#taoTrainingPciManager', array('ext'=>'taoTrainingPci')),
    ),
    'install' => array(
        'php'	=> array(
            RegisterPciDatePickerIMS::class,
			RegisterPciDateTimePickerIMS::class
		)
    ),
    'update' => 'oat\\taoTrainingPci\\scripts\\update\\Updater',
    'uninstall' => array(
    ),
    'autoload' => array (
        'psr-4' => array(
            'oat\\taoTrainingPci\\' => dirname(__FILE__).DIRECTORY_SEPARATOR
        )
    ),
    'routes' => array(
        '/taoTrainingPci' => 'oat\\taoTrainingPci\\controller'
    ),
	'constants' => array(
	    # views directory
	    "DIR_VIEWS" => dirname(__FILE__).DIRECTORY_SEPARATOR."views".DIRECTORY_SEPARATOR,

		#BASE URL (usually the domain root)
		'BASE_URL' => ROOT_URL.'taoTrainingPci/',
	)
);
