<?php
/**
 * @link https://craftcms.com/
 * @copyright Copyright (c) Pixel & Tonic, Inc.
 * @license https://craftcms.github.io/license/
 */

namespace craft\conditions;

use yii\db\QueryInterface;

/**
 * QueryConditionInterface defines the common interface to be implemented by conditions that modify a database query.
 *
 * A base implementation is provided by [[BaseQueryCondition]].
 *
 * @author Pixel & Tonic, Inc. <support@pixelandtonic.com>
 * @since 4.0.0
 */
interface QueryConditionInterface extends ConditionInterface
{
    /**
     * Modifies a given query based on the configured condition rules.
     *
     * @param QueryInterface $query
     */
    public function modifyQuery(QueryInterface $query): void;
}